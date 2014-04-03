
var gpioConfig = require('../GPIO/config');
var config = new gpioConfig();
var GPIO_HOME = config['routeDirectory'];
var GPIOController = require('../GPIO/GPIOController');
var gpioController = new GPIOController(GPIO_HOME);
var filesystem = require('fs');

var gpioFiles = {
	"POWER_SIG" : "17",
	"ZONE_ONE" : "27"
}


exports.resetGPIOs = function(callback) {
	
	filesystem.exists(GPIO_HOME, function(isDir){
		
		console.log("\nroute gpio dir ["+ GPIO_HOME +"] exists: "+ isDir);
		console.log("\nremoving existing GPIOs ................");
		gpioController.removeAllGPIOs();		
		console.log ("\nProvisioning new GPIOs.....");				
		gpioController.provisionGPIOs(gpioFiles);		
		callback();
	});
}

exports.findAll = function(request, response) {
				
	gpioController.getAllGPIOs(function(gpioList){
		response.send(gpioList);
	});	
}

exports.setState = function(request, response) {
	
	var id = request.params.id;
	var gpio = request.body;
	var jsonStr =  JSON.stringify(gpio);
	var state = JSON.parse(jsonStr)["state"];
   
    console.log('Updating gpio: ' + id + " to state: "+ state);
    gpioController.setGPIOVal("gpio" + id, state);  
   
    gpioController.getGPIO("gpio" + id, function(gpio) {
    	response.send(gpio);
    });  
}

exports.findById = function(request, response) {
	var id = request.params.id;
	
	gpioController.getGPIO("gpio" + id, function(gpio) {
		
		console.log("finding GPIO : gpio"+id);
		console.log("the gpio: "+ gpio);
    	response.send(gpio);

    }); 	
}


