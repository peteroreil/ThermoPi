function Config() {
	this.rootDirectory = "/home/peter/Desktop/GPIO_Simulator/";
	
	this.thermalGpioFiles = [
		{ "pin" : "17", "role" : "master" },
		{ "pin" : "18", "role" : "zone" },
		{ "pin" : "19", "role" : "zone" },
		{ "pin" : "20", "role" : "zone" }
	];

	this.host = "localhost";

	this.database = "ThermoPi";

	this.username = "root";

	this.password = "shroot";

	this.portNumber = "1234";

}

module.exports = Config;