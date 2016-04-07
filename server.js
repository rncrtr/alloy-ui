// include dependencies
var express         = require('express');
var app             = express();
var port            = process.env.port || 3001; // set our port
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var jshint          = require('jshint');
var jsonlint        = require('jsonlint');
var fs              = require('fs');
var unzip           = require('unzip2');
var multer          = require('multer');
var MemoryStream    = require('memory-stream');
var Q               = require('q');

// parsers
app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb', type: 'application/vnd.api+json' }));
app.use(multer({ dest:"./uploads/" }).single('file'));

app.use(methodOverride('X-HTTP-Method-Override'));

app.post('/api/upload',function(req,res){
  try{
    var jsonupload = JSON.stringify(req.body);
    console.log(jsonupload);
    var lintresult = jsonlint.parse(jsonupload);
    res.send(lintresult);
  }catch(err){
    res.sendStatus(500);
  };
});

app.post('/api/script', function(req,res){

    var file = req.file;

    var validationPromises = [];

    fs.createReadStream(file.path)
    .pipe(unzip.Parse())
    .on('entry', function (entry){

        var type = entry.type; // 'Directory' or 'File'

        var fileNameParts = entry.path.split('.');
        var extension = fileNameParts[fileNameParts.length - 1];

        if (type === "File" && (extension === 'js' || extension === 'json')) {

            console.log('entry promise created');
            var deferred = Q.defer();
            validationPromises.push(deferred.promise);

            var ws = new MemoryStream();

            if (extension === 'js') {
                ws.on('finish', function() {
                    var isValid = true;
                    jshint.JSHINT(ws.toString(), {undef: true});

                    if (jshint.JSHINT.errors) {
                        isValid = false;
                    }
                    deferred.resolve({fileType: 'js', valid: isValid});
                });
            } else if (extension === 'json') {
                ws.on('finish', function() {
                    var isValid = true;
                    try {
                        jsonlint.parse(ws.toString());
                    } catch(err) {
                        isValid = false;
                    }
                    deferred.resolve({fileType: 'json', valid: isValid});
                });
            }

            entry.pipe(ws);

        } else {
            entry.autodrain();
        }
    }).on('close', function() {
        var javascriptValid = true;
        var jsonValid = true;

        //All entries processed
        Q.all(validationPromises).then(function(results) {
            console.log(results);
            for (var idx in results) {
                var result = results[idx];
                if (result.fileType === 'js' && !result.valid) {
                    javascriptValid = false;
                } else if (result.fileType === 'json' && !result.valid) {
                    jsonValid = false;
                }
            }
            res.send(JSON.stringify({js: javascriptValid, json: jsonValid}));
        })


    });

});

// START THE SERVER
// ====================================================
app.listen(port);
console.log('Server running on port ' + port);