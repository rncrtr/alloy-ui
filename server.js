// include dependencies
var express    = require('express');
var app        = express();
var port     = process.env.port || 3001; // set our port
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var jsonlint = require('jsonlint');

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

// START THE SERVER
// ====================================================
app.listen(port);
console.log('Server running on port ' + port);