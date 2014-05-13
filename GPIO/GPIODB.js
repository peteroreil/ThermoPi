var mysql = require('mysql'),
CONFIG = require('../conf/config.js'),
config = new CONFIG();

var pool = mysql.createPool({
	host : config.host,
	user : config.username,
	password: config.password, 
	database: config.database
});

function GPIODB() {

	this.getZoneNameByGPIONumber = function(gpioZone, callback) {
    	
    	var gpioNum = gpioZone['gpioNum'];

    	console.log("executing query "+ gpioNum);
		pool.getConnection(function(err, connection){
			
			var sql = 'SELECT ZONE_NAME as zone from ZONES where gpio = ' + connection.escape(gpioNum);
			if(err) {
				console.log("ERROR!!\n" + err);
				throw err;
			}

			connection.query(sql, function(err, rows, fields){
			
				if(callback) {
					gpioZone['name'] = rows[0].zone;
					callback(gpioZone);
				}
			});
			
			connection.release();
		});
	};

	this.updateGPIOZoneName = function(gpioZone, callback) {
		pool.getConnection(function(err, connection){
			
			var escapedName = connection.escape(gpioZone['name']);
			var escapedNum = connection.escape(gpioZone['gpioNum']);
			var sql = 'UPDATE ZONES SET ZONE_NAME = '+ escapedName +' where gpio = '+escapedNum;
			
			if(err) {
				console.log("ERROR!!\n" + err);
				throw err;
			}

			var query = connection.query(sql, function(err, rows, fields){
			console.log("LOGGING QUERY "+ query+"\n\n END OF QUERY");	
						
				if(callback) {					
					callback(gpioZone);
				}
			});
			
			connection.release();
		});
	}


	// this.sampleInsertQueryWithArray = function() {
		
	// 	pool.getConnection(function(err, connection) {

	// 		if(err) {
	// 			console.log("ERROR!!\n" + err);
	// 			throw err;
	// 		}

	// 		var values = [
	// 						[1, 'Zone One', 17],
	// 						[2, 'Zone Two', 18], 
	// 						[3, 'Zone THree', 19]
	// 					];

	// 		var sql = 'insert into ZONES (ZONE_ID, ZONE_NAME, gpio) VALUES ?';
			
	// 		var query = connection.query(sql , [values], function(err, result) {		
	// 						console.log(query.sql);							
	// 					});

	// 		connection.release();
	// 	});
	// }
}

module.exports = GPIODB;