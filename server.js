// include dependencies
var express    = require('express');
var app        = express();
var port     = process.env.port || 3000; // set our port
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// parsers
app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride('X-HTTP-Method-Override'));

// START THE SERVER
// ====================================================
app.listen(port);
console.log('Server running on port ' + port);