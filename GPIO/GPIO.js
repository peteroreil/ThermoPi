//GPIO Object
var filesystem = require('fs');

function GPIO(id, name, direction, value) {
	
	this.id = id;
	this.name = name;
	this.direction = direction;
	this.value = value;

	this.getDirection = function() {
		return this.direction;
	};

	this.getValue = function() {
		return this.value;
	};

	this.setDirection = function(direction) {
		this.direction = direction;
		console.log("setting gpio: "+ this.name + " direction to: "+ this.direction);
		filesystem.writeFileSync(this.routeDir+this.name+"/direction", this.direction);	
	};

	this.setValue = function(value) {
		this.value = value;
		console.log("setting gpio: "+ this.name + " value to: "+ this.value);
		filesystem.writeFileSync(this.routeDir + this.name +"/value", this.value);	
	};
}

GPIO.prototype.routeDir = "/home/peter/Desktop/GPIO/";

module.exports = GPIO;