ThermoPi
======================

A node.js http server designed to run on Raspberry Pi (Model B) with the intention of 
controlling a home heating system. 


Installation Instructions
=========================

######Requires mysql server to be installed on the Pi

Install mysql on Pi

```
pi@raspberrypi ~ $ sudo apt-get install mysql-server

pi@raspberrypi ~ $ mysql --version
mysql  Ver 14.14 Distrib 5.5.37, for debian-linux-gnu (armv7l)
```

Once mysql is installed you need to create a database. Use the ThermoPi.sql to create this DB

Sign into mysql 
```
pi@raspberrypi ~ $ mysql -u[username]-p[password]
```

Create the ThermoPi database
```
mysql> create database ThermoPi;
```

Insert the sql dump (will give the required schema)
```
pi@raspberrypi ~ $ mysql -uroot -pshroot ThermoPi < ThermoPi.sql

```
In the config.js verify (or add) the name of the database / username / password and port for your instance of mysql


Once verified that DB is up and running and database is accessible,

Install Node.js for your OS. (Current installed Version on rpi http://nodejs.org/dist/v0.10.24/node-v0.10.24-linux-arm-pi.tar.gz) 

Navigate to the ThermoPi dir and install required packages ----> npm install

start the http server.js -----> node server.js

Open a browser and assuming that your pi is on your local network, launch the browser 
and navigate to:
```
http://[ip address of your pi]:8888
```



