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
var MemoryStream    = require('memory-stream');
var Q               = require('q');

// parsers
app.use(express.static(__dirname + '/dist'));

app.use(methodOverride('X-HTTP-Method-Override'));

// app.post('/api/upload',function(req,res){
//       var file = req.file;

//       fs.readFile(file.path, 'utf8', function (err,data) {
//           if (err) {
//               return res.sendStatus(500);
//           }
//           try {
//               var result = jsonlint.parse(data);
//               res.send(result);
//           } catch(err) {
//               res.sendStatus(500);
//           } finally {
//               fs.unlink(file.path);
//           }
//       });
// });

// START THE SERVER
// ====================================================
app.listen(port);
console.log('Server running on port ' + port);