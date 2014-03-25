var express = require('express'),
 	path = require('path'),
	http = require('http'),
	gpioManager = require('./routes/GPIOManager');
var app = express();


gpioManager.resetGPIOs(function(){

	app.configure(function () {	
	    app.set('port', 8888 );
	    app.use(express.logger('dev'));  /* 'default', 'short', 'tiny', 'dev' */
	    app.use(express.bodyParser()),
	    app.use(express.static(path.join(__dirname, 'public')));
	});

	app.get('/gpio', gpioManager.findAll);
	app.get('/gpio/:id', gpioManager.findById);
	app.put('/gpio/:id', gpioManager.setState);

	http.createServer(app).listen(app.get('port'), function () {
	    console.log("ThermoPi Server now listening on port " + app.get('port'));
	});
});