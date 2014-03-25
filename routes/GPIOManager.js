// This GPIO has been tested against the file creator script which has been 
// writen to mimic the GPIO files. filecreator.sh in routeDir will create a dir
// gpio[n] based on string number written to export file. it will remove dir based on
// number written to unexport file.



var filesystem = require('fs'),
sleep = require('sleep');
routeDir ="/home/peter/Desktop/GPIO/",
EXPORT_FILE = "export",
UNEXPORT_FILE = "unexport";

var gpioFiles = {
	"POWER_SIG" : "17",
	"ZONE_ONE" : "27"
}

var GPIO = function GPIO(id, name, direction, state) {
	this.id = id;
	this.name = name;
	this.direction = direction;
	this.state = state;
}

function writeGPIO(gpioNum, fileName, callback) {
	filesystem.writeFileSync(routeDir+fileName, gpioNum);
	sleep.sleep(2);
	
	if(callback) {
		callback();
	}
}

function getGPIODirection(gpioName) {
	return filesystem.readFileSync(routeDir+gpioName+"/direction", "utf8");
}

function getGPIOValue(gpioName) {
	return filesystem.readFileSync(routeDir+gpioName+"/value", "utf8");
}

function setGPIODirection(gpioName, direction) {
	console.log("setting gpio: "+ gpioName + " direction to: "+direction);
	filesystem.writeFileSync(routeDir+gpioName+"/direction", direction);	
}

function setGPIOValue(gpioName, value) {
	console.log("setting gpio: "+ gpioName + " value to: "+value);
	filesystem.writeFileSync(routeDir+gpioName+"/value", value);	
}

function getGPIO(gpioName, callback) {
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
}

function validateRemoval(gpioNum) {
	if (filesystem.existsSync(routeDir+"gpio"+gpioNum) == false) {
		console.log("gpio: "+gpioNum+" unexported successfully");
	} else {
		console.log("unexport unsuccessfull. Attempting to unexport gpio again");
		writeGPIO(gpioNum, UNEXPORT_FILE);
	}
}


function removeGPIODirs(files) {
	var dirName = "", 
	i, 
	gpioNum;

	for(i = 0; i < files.length ; i++) {
		
		dirName = files[i];

		if (dirName.indexOf("gpio") != -1 && dirName != "gpiochip0") {	
			console.log("about to remove gpio : "+dirName);
			gpioNum = dirName.split("gpio")[1];		
			writeGPIO(gpioNum, UNEXPORT_FILE);
			validateRemoval(gpioNum);			
		}
	}
}

function getGPIOs(callback) {
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
}

function provisionGPIOs(){
	console.log("\nprovisioning gpio files ..........");
	for (var file in gpioFiles) {
		console.log("creating gpio file: gpio"+gpioFiles[file]);
		writeGPIO(gpioFiles[file],EXPORT_FILE, function() {
			setGPIODirection("gpio"+gpioFiles[file], "out");
			setGPIOValue("gpio"+gpioFiles[file], 0);
		});

		console.log("gpio"+gpioFiles[file]+" created");
	}

}

exports.resetGPIOs = function(callback) {
	filesystem.exists(routeDir, function(exits){
		console.log("\nresetting GPIOs ................");
		console.log("\nroute gpio dir ["+routeDir+"] exists: "+exits);
		console.log ("\nfinding all registered GPIOs.....");		
		var dirContents = filesystem.readdirSync(routeDir);
		removeGPIODirs(dirContents);
		provisionGPIOs()
		callback();
	});
}

exports.findAll = function(request, response) {
				
	getGPIOs(function(gpioList){
		response.send(gpioList);
	});	
}

exports.setState = function(request, response) {
	var id = request.params.id;
	var gpio = request.body;
	var jsonStr =  JSON.stringify(gpio);
	var state = JSON.parse(jsonStr)["state"];
    console.log('Updating gpio: ' + id + " to state: "+ state);
    setGPIOValue("gpio"+id, state);  
    getGPIO("gpio"+id,function(gpio) {
    	response.send(gpio);
    });  
}

exports.findById = function(request, response) {
	var id = request.params.id;
	getGPIO("gpio"+id,function(gpio) {
		console.log("finding GPIO : gpio"+id);
		console.log("the gpio: "+ gpio);
    	response.send(gpio);
    }); 	
}


