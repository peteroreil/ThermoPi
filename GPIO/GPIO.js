//GPIO Object
var filesystem = require('fs'),
    ConfigurationFile = require('../conf/config'),
    config = new ConfigurationFile(),
    gpioRootDir = config['rootDirectory'];

function GPIO(id, name, direction, value, state, gpioNum, role) {
	
	this.id = id;
	this.name = name;
	this.direction = direction;
	this.value = value;
	this.state = state;
	this.gpioNum = gpioNum;
	this.role = role

	this.getDirection = function() {
		return this.direction;
	};

	this.getValue = function() {
		return this.value;
	};

	this.getState = function() {
		return this.state;
	};

	this.getRole = function() {
		return this.role;
	};

	this.setDirection = function(direction) {
		this.direction = direction;
		console.log("setting gpio: "+ this.name + " direction to: "+ this.direction);
		filesystem.writeFileSync(gpioRootDir +  "gpio" + this.gpioNum + "/direction", this.direction);	
	};

	this.setValue = function(value) {
		
		if (this.value === value) {
			
			console.log("Current GPIO Value: "+ this.value+ " new value: "+ value + " NO CHANGE REQUIRED");

		} else { 

			this.value = value;
			console.log("setting gpio: "+ this.name + " value to: "+ this.value);
			filesystem.writeFileSync(gpioRootDir + "gpio" + this.gpioNum + "/value", this.value);
			
		}	
	};

	this.setName = function(name) {
		this.name = name;
	}; 

	this.setState = function(state) {
		console.log("setting state function called");
		this.state = state;
	};
}

GPIO.prototype.routeDir = config['routeDirectory'];

module.exports = GPIO;
