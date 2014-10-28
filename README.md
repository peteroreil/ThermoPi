ThermoPi
======================

A node.js http server designed to run on Raspberry Pi (Model B) with the intention of 
controlling a home heating system. 


Installation Instructions
=========================

*Requires mysql server to also be installed on the Pi*


Once mysql is installed create a database (use same name as sql dump below) for your ThermoPi application.

In the config.js verify (or add) the name of the database / username / password and port.

Insert the ThermoPi.sql dump file into database.

Once verified that DB is up and running and database is accessible,
Install Node.js for your OS. (Current installed Version on rpi http://nodejs.org/dist/v0.10.24/node-v0.10.24-linux-arm-pi.tar.gz) 

Clone this repo.

Navigate to the ThermoPi dir and install required packages ----> npm install

start the http server.js -----> node server.js



