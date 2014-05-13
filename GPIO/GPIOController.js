var filesystem = require('fs'),
    sleep = require('sleep'),
    GPIO = require('./GPIO.js'),
    uuid = require('node-uuid'),
    GPIODbConn = require('./GPIODB.js'),
    dbConnection = new GPIODbConn();

function GPIOController(gpioRootDir) {
	
	var gpioRoot = gpioRootDir;
	var exportFile = "export";
	var unexportFile = "unexport";
	var zoneObjArray = new Array();
	
	var writeGPIO = function(gpioNum, fileName, callback) {
		filesystem.writeFileSync(gpioRoot + fileName, gpioNum);
		sleep.sleep(2);	
	
		if(callback) {
			callback(gpioNum);
		}
	};

	var getGPIODirection = function(gpioDir) {
		return filesystem.readFileSync( gpioDir + "/direction", "utf8");
	};

	var setGPIODirection = function (gpioName, direction) {
		console.log("setting gpio: " + gpioName + " direction to: " + direction);
		filesystem.writeFileSync( gpioName+"/direction", direction);
	};

	var getGPIOValue = function(gpioDir) {
		return filesystem.readFileSync( gpioDir + "/value", "utf8");
	};	

	var setGPIOValue = function(gpioName, value) {
		console.log("setting gpio: "+ gpioName + " value to: " + value);
		filesystem.writeFileSync( gpioName + "/value", value);	
	};

	

	this.updateZone = function(jsonObject, callback) {
		
		for( var index in zoneObjArray ) {
			
			if (zoneObjArray[index]['id'] === JSON.parse(jsonObject)['id']) {
				
				var zoneObject = zoneObjArray[index],
				oldName = zoneObjArray[index]['name'],
				oldValue = zoneObjArray[index]['value'],
				newName = JSON.parse(jsonObject)['name'],
				newValue = JSON.parse(jsonObject)['value'];
				
				for (var prop in zoneObject) {
					if (prop != 'value') {
						zoneObject[prop] = JSON.parse(jsonObject)[prop];
					} else {
						zoneObject[prop] = JSON.parse(jsonObject)[prop];
						setGPIOValue(gpioRoot+"gpio"+zoneObject['gpioNum'], JSON.parse(jsonObject)[prop]);
					}
				}

				if(oldName != newName) {
					dbConnection.updateGPIOZoneName(zoneObject, callback);
				} else {
					callback(zoneObject);
				}
			}
		}
	};



	this.getGPIO = function(id, callback) {
		
		var result;
		
		for( var index in zoneObjArray ) {
			if (zoneObjArray[index]['id'] === id) {
				result = zoneObjArray[index];
			}
		}

		if(callback) {
				callback(result);
			}			
		return result;
	};	
		

	this.getAllGPIOs = function(callback) {
		callback(zoneObjArray);
	};	


	this.createThermalGPIOs = function(gpioFiles) {
		for (prop in gpioFiles) {
			var gpioNumber = gpioFiles[prop]['pin'],
			role = gpioFiles[prop]['role'],
			realGPIOExists = filesystem.existsSync(gpioRoot+"gpio"+gpioNumber),
			id = uuid.v4(),
			direction,
			value,
			zone,			 
			state = "off";

			console.log("\n\nchecking if gpioFile: "+ gpioNumber +" exists: "+ realGPIOExists);

			if (! realGPIOExists ) {
				console.log("\nexporting GPIO "+gpioNumber);
				writeGPIO(gpioNumber, exportFile);
				setGPIODirection(gpioRoot+"gpio"+ gpioNumber, "out");
				setGPIOValue(gpioRoot+"gpio"+ gpioNumber, 0);

			} else {
				console.log("\n gpio"+ gpioNumber + " is already exported");
			}

			direction = getGPIODirection(gpioRoot + "gpio" + gpioNumber);
			value = getGPIOValue(gpioRoot +  "gpio" + gpioNumber);	

			if(value != 0) {
				state = "on"
			}

			zone = new GPIO(id, "null", direction, value, state, gpioNumber, role);

			dbConnection.getZoneNameByGPIONumber(zone, function(zoneObj) {
				zoneObjArray.push(zoneObj);
			});						
		}		
	};
}

module.exports = GPIOController;


//curl -i -X PUT -H 'Content-Type: application/json' -d '{"id": "0c55a61b-fa28-4057-989e-8e73c7ffb0fd", "name": "Test One", "direction": "out", "value": "0", "state": "off", "gpioNum": "17", "role": "master"}' http://localhost:8888/mains/0c55a61b-fa28-4057-989e-8e73c7ffb0fd


