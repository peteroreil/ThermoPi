var express = require('express'),
 	path = require('path'),
	http = require('http'),
	gpio = require('./routes/gpio'),
    app = express();


gpio.resetGPIOs(function(){

	app.configure(function () {	
	    app.set('port', 8888 );
	    app.use(express.logger('dev'));  /* 'default', 'short', 'tiny', 'dev' */
	    app.use(express.bodyParser()),
	    app.use(express.static(path.join(__dirname, 'public')));
	});

	app.get('/gpio', gpio.findAll);
	app.get('/gpio/:id', gpio.findById);
	app.put('/gpio/:id', gpio.setState);

	http.createServer(app).listen(app.get('port'), function () {
	    console.log("ThermoPi Server now listening on port " + app.get('port'));
	});
});