//  The express dependency was installed using npm

var express = require('express');

//  Create our app
var app = express();
//  the port is accessed this way on behalf of heroku
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next) {
	if (req.headers['x-forwarded-proto'] === 'https') {
		res.redirect('http://' + req.hostname + req.url);
	} else {
		next();
	}
});


app.use(express.static('public'));

//  app.listen() starts the server
app.listen(PORT, function() {
	console.log('Express server is up on port ' + PORT);
});
