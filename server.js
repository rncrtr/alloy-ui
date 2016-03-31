// include dependencies
var express    = require('express');
var app        = express();
var port     = process.env.port || 3001; // set our port
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var jsonlint = require('jsonlint');
var unzip = require('unzip');

// parsers
app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
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

app.post('/api/script',function(req,res){
  var inputfile = req.body;
  // unzip file
  fs.createReadStream(inputfile)
    .pipe(unzip.Parse())
    .on('entry', function (entry){
      var fileName = entry.path;
      var type = entry.type; // 'Directory' or 'File'
      var size = entry.size;
      if (fileName === "this IS the file I'm looking for") {
        entry.pipe(fs.createWriteStream('files'));
      } else {
        entry.autodrain();
      }
    });
  // validate each one including unit test JSON file

  // run the unit test json against the js files

});

// START THE SERVER
// ====================================================
app.listen(port);
console.log('Server running on port ' + port);