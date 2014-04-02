#!/bin/bash

#script to be put on cron will query schedules table to determine if gpio value should
# be 1 or 0.
GPIO_VALUE="/home/peter/Desktop/GPIO_Simulator/gpio2/value"
CRON_LOG="/home/peter/Desktop/GPIO_Simulator/zoneSchedulers.log"

QUERY="mysql --skip-column-names -uroot -pshroot ThermoPi -e 'select POWERED_ON from SCHEDULE_ZONE_TWO where (TIME_RANGE = getTime(now()))and (ZONE_ID = 1);'"

EXECUTE=$(eval $QUERY);

function compareToValueFile {
	VAL=`cat $GPIO_VALUE`;
	
	if [ $VAL -eq $1 ] ; then 
		echo -e `date` " [ZONE TWO]: no state change required in value: Current value -> $VAL" >> $CRON_LOG;
		exit 0;
	fi
}

if [ $EXECUTE -gt 0 ] ; then
	compareToValueFile 1;
	echo "1" > $GPIO_VALUE;
	echo -e `date` " [ZONE TWO]: GPIO2 turned ON: " >> $CRON_LOG;

else 
	compareToValueFile 0;
	echo "0" > $GPIO_VALUE;
	echo -e `date`  " [ZONE TWO]: GPIO2 turned OFF." >> $CRON_LOG;
fi

exit 0;