var filesystem = require('fs'),
    sleep = require('sleep');
    GPIO = require('./GPIO.js');

function GPIOController(routeDirectory) {
	
	var routeDir = routeDirectory;
	var exportFile = "export";
	var unexportFile = "unexport";
	
	var writeGPIO = function(gpioNum, fileName, callback) {
		filesystem.writeFileSync(routeDir + fileName, gpioNum);
		sleep.sleep(2);	
	
		if(callback) {
			callback(gpioNum);
		}
	}

	var getGPIODirection = function(gpioDir) {
		return filesystem.readFileSync(routeDir + gpioDir + "/direction", "utf8");
	};

	var setGPIODirection = function (gpioName, direction) {
		console.log("setting gpio: " + gpioName + " direction to: " + direction);
		filesystem.writeFileSync(routeDir + gpioName+"/direction", direction);
	};

	var getGPIOValue = function(gpioDir) {
		return filesystem.readFileSync(routeDir + gpioDir + "/value", "utf8");
	};	

	var setGPIOValue = function(gpioName, value) {
		console.log("setting gpio: "+ gpioName + " value to: " + value);
		filesystem.writeFileSync(routeDir + gpioName + "/value", value);	
	};

	var getGPIOs = function(callback) {
		var gpioList = new Array();
		var dirContents = filesystem.readdir(routeDir, function(err, files) {
		
			var dirName = "", 
				i;
			
			for(i = 0; i < files.length ; i++) {		
				
				dirName = files[i];

				if (dirName.indexOf("gpio") != -1 && dirName != "gpiochip0") {
					var direction = getGPIODirection(dirName);	
					var value = getGPIOValue(dirName);
					var id = dirName.substring(4, dirName.length);
					var gpio = new GPIO(id, dirName, direction, value);
					gpioList.push(gpio);		
				}
			}
		
			if(callback) {
				callback(gpioList);
			}
		});	

		return gpioList;
	};

	var validateRemoval = function(gpioNum) {

		if (filesystem.existsSync(routeDir+"gpio"+gpioNum) == false) {
			console.log("gpio: "+gpioNum+" unexported successfully");
		} else {
			console.log("unexport unsuccessfull. Attempting to unexport gpio again");
			writeGPIO(gpioNum, this.unexportFile);
		}
	};

	this.getGPIO = function(gpioName, callback) {

		var gpios = getGPIOs(function(gpioList) {
			var i;
			var result;

			for (i=0 ; i< gpios.length ; i++) {
				var gpio = gpios[i];

				if (gpioName === gpio["name"]){
					result = gpio;
				}
			} 

			if(callback) {
				callback(result);
			}			
			return this;
		});	
	};

	this.removeAllGPIOs = function() {
		var files = filesystem.readdirSync(routeDir);
		var dirName = "", 
			i, 
			gpioNum;

			for(i = 0; i < files.length ; i++) {

				dirName = files[i];

				if (dirName.indexOf("gpio") != -1 && dirName != "gpiochip0") {	
					console.log("about to remove gpio : "+dirName);
					gpioNum = dirName.split("gpio")[1];		
					writeGPIO(gpioNum, unexportFile);
					validateRemoval(gpioNum);			
				}
			}
	};

	this.getAllGPIOs = function(callback) {
		getGPIOs(callback);
	};

	this.setGPIOVal = function(gpioName, value) {
		setGPIOValue(gpioName, value);
	};

	this.provisionGPIOs = function(gpios) {
		
		for (var val in gpios) {
			console.log("creating gpio file: gpio"+ gpios[val] );
		
			writeGPIO(gpios[val], exportFile, function() {
				
				setGPIODirection("gpio" + gpios[val], "out");
				setGPIOValue("gpio" + gpios[val], 0);

			});

			console.log("gpio"+gpios[val]+" created");
		}
	};
}

module.exports = GPIOController;