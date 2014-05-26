
var ConfigurationFile = require('../conf/config'),
filesystem = require('fs'),
config = new ConfigurationFile(),
GPIO_HOME = config['rootDirectory'],
THERMO_GPIO_FILES =config['thermalGpioFiles'],
GPIOController = require('../GPIO/GPIOController'),
gpioController = new GPIOController(GPIO_HOME);



exports.createZoneGPIOs = function(callback) {
	
	filesystem.exists(GPIO_HOME, function(isDir){		
		console.log("\nroute gpio dir ["+ GPIO_HOME +"] exists: "+ isDir);
		console.log("\nVerifying all required GPIOs for Zones exist...............");		
		gpioController.createThermalGPIOs(THERMO_GPIO_FILES, callback());		
	});
}

exports.getAllZones = function(request, response) {				
	gpioController.getAllGPIOs(function(gpioList) {
		
		var zoneList = new Array();

		for (gpio in gpioList) {
			if(gpioList[gpio]['role'] === "zone") {
				zoneList.push(gpioList[gpio]);
			}
		}
		response.send(zoneList);
	});	
}

exports.putZone = function(request, response) {
	var id = request.params.id;
	var gpio = request.body;
	var jsonStr =  JSON.stringify(gpio);	
    gpioController.updateZone(jsonStr, function(gpio) {
    	response.send(gpio);    	  
    });     
}

exports.findZoneById = function(request, response) {
	var id = request.params.id;	
	gpioController.getGPIO(id, function(gpio) {
		response.send(gpio);
    }); 	
}

exports.getMains = function(request, response) {
	gpioController.getAllGPIOs(function(gpioList) {
		
		var main = {};

		for (gpio in gpioList) {
			if(gpioList[gpio]['role'] === "master") {
				main = gpioList[gpio];
			}
		}
		response.send(main);
	});	
}

