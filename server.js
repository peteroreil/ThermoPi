var express = require('express'),
 	path = require('path'),
	http = require('http'),
	zone = require('./routes/zones'),
    app = express();


zone.createZoneGPIOs(function(){

	app.configure(function () {	
	    app.set('port', 8888 );
	    app.use(express.logger('dev'));  /* 'default', 'short', 'tiny', 'dev' */
	    app.use(express.bodyParser()),
	    app.use(express.static(path.join(__dirname, 'public')));
	});

	app.get('/mains', zone.getMains);
	app.put('/mains/:id', zone.putZone);
	app.get('/zone', zone.getAllZones);
	app.get('/zone/:id', zone.findZoneById);
	app.put('/zone/:id', zone.putZone);

	http.createServer(app).listen(app.get('port'), function () {
	    console.log("ThermoPi Server now listening on port " + app.get('port'));
	});
});

