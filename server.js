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
app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }));
app.use(multer({ dest:"./uploads/" }).single('file'));

app.use(methodOverride('X-HTTP-Method-Override'));

app.post('/api/upload',function(req,res){
      var file = req.file;

      fs.readFile(file.path, 'utf8', function (err,data) {
          if (err) {
              return res.sendStatus(500);
          }
          try {
              var result = jsonlint.parse(data);
              res.send(result);
          } catch(err) {
              res.sendStatus(500);
          } finally {
              fs.unlink(file.path);
          }
      });
});

app.post('/api/script', function(req,res){

    var file = req.file;
    console.log(file);
    var uid = req.body ? req.body.uid : null;

    //If POST called with file upload and no UID
    if (file && file.mimetype === "application/zip" && !uid) {
        var validationPromises = [];

        fs.createReadStream(file.path)
            .pipe(unzip.Parse())
            .on('entry', function (entry){

                var type = entry.type; // 'Directory' or 'File'

                var fileNameParts = entry.path.split('.');
                var extension = fileNameParts[fileNameParts.length - 1];

                if (type === "File" && (extension === 'js' || extension === 'json')) {

                    var deferred = Q.defer();
                    validationPromises.push(deferred.promise);

                    var ws = new MemoryStream();

                    if (extension === 'js') {
                        ws.on('finish', function() {
                            var isValid = true;
                            jshint.JSHINT(ws.toString(), {undef: true});

                            var errors = jshint.JSHINT.errors;

                            if (errors && errors.length > 0) {
                                console.log(errors);
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
                                console.log(err);
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

                var respObj = {};
                respObj.uid = javascriptValid && jsonValid ? file.filename : null;

                respObj.validations = {
                    javascript: javascriptValid,
                    json: jsonValid
                }

                res.send(JSON.stringify(respObj));
            })
        });
    } else if (uid) {
        //Uid to send to coeus server
        res.send('uid received: ' + uid);
        fs.unlink('./uploads/' + uid);
    } else {
        res.sendStatus(400);
    }

});

// START THE SERVER
// ====================================================
app.listen(port);
console.log('Server running on port ' + port);