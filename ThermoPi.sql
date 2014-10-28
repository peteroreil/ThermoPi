-- MySQL dump 10.13  Distrib 5.5.37, for debian-linux-gnu (armv7l)
--
-- Host: localhost    Database: ThermoPi
-- ------------------------------------------------------
-- Server version	5.5.37-0+wheezy1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `SCHEDULE_NAMES`
--

DROP TABLE IF EXISTS `SCHEDULE_NAMES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `SCHEDULE_NAMES` (
  `SCHEDULE_ID` int(11) NOT NULL AUTO_INCREMENT,
  `SCHEDULE_NAME` varchar(40) DEFAULT NULL,
  `ZONE_ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`SCHEDULE_ID`),
  KEY `ZONE_ID_idx` (`ZONE_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SCHEDULE_NAMES`
--

LOCK TABLES `SCHEDULE_NAMES` WRITE;
/*!40000 ALTER TABLE `SCHEDULE_NAMES` DISABLE KEYS */;
INSERT INTO `SCHEDULE_NAMES` VALUES (1,'Harsh Cold Winter',1);
/*!40000 ALTER TABLE `SCHEDULE_NAMES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SCHEDULE_ZONE_ONE`
--

DROP TABLE IF EXISTS `SCHEDULE_ZONE_ONE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `SCHEDULE_ZONE_ONE` (
  `SCHEDULE_ID` int(11) DEFAULT NULL,
  `ZONE_ID` int(11) DEFAULT NULL,
  `POWERED_ON` tinyint(4) DEFAULT NULL,
  `TIME_RANGE` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SCHEDULE_ZONE_ONE`
--

LOCK TABLES `SCHEDULE_ZONE_ONE` WRITE;
/*!40000 ALTER TABLE `SCHEDULE_ZONE_ONE` DISABLE KEYS */;
INSERT INTO `SCHEDULE_ZONE_ONE` VALUES (1,1,1,'00:00:00'),(1,1,0,'00:15:00'),(1,1,1,'00:30:00'),(1,1,0,'00:45:00'),(1,1,1,'01:00:00'),(1,1,0,'01:15:00'),(1,1,1,'01:30:00'),(1,1,0,'01:45:00'),(1,1,1,'02:00:00'),(1,1,0,'02:15:00'),(1,1,1,'02:30:00'),(1,1,0,'02:45:00'),(1,1,1,'03:00:00'),(1,1,0,'03:15:00'),(1,1,1,'03:30:00'),(1,1,0,'03:45:00'),(1,1,1,'04:00:00'),(1,1,0,'04:15:00'),(1,1,1,'04:30:00'),(1,1,0,'04:45:00'),(1,1,1,'05:00:00'),(1,1,0,'05:15:00'),(1,1,1,'05:30:00'),(1,1,0,'05:45:00'),(1,1,1,'06:00:00'),(1,1,0,'06:15:00'),(1,1,1,'06:30:00'),(1,1,0,'06:45:00'),(1,1,1,'07:00:00'),(1,1,0,'07:15:00'),(1,1,1,'07:30:00'),(1,1,0,'07:45:00'),(1,1,1,'08:00:00'),(1,1,0,'08:15:00'),(1,1,1,'08:30:00'),(1,1,0,'08:45:00'),(1,1,1,'09:00:00'),(1,1,0,'09:15:00'),(1,1,1,'09:30:00'),(1,1,0,'09:45:00'),(1,1,1,'10:00:00'),(1,1,0,'10:15:00'),(1,1,1,'10:30:00'),(1,1,0,'10:45:00'),(1,1,1,'11:00:00'),(1,1,0,'11:15:00'),(1,1,1,'11:30:00'),(1,1,0,'11:45:00'),(1,1,1,'12:00:00'),(1,1,0,'12:15:00'),(1,1,1,'12:30:00'),(1,1,0,'12:45:00'),(1,1,1,'13:00:00'),(1,1,0,'13:15:00'),(1,1,1,'13:30:00'),(1,1,0,'13:45:00'),(1,1,1,'14:00:00'),(1,1,0,'14:15:00'),(1,1,1,'14:30:00'),(1,1,0,'14:45:00'),(1,1,1,'15:00:00'),(1,1,0,'15:15:00'),(1,1,1,'15:30:00'),(1,1,0,'15:45:00'),(1,1,1,'16:00:00'),(1,1,0,'16:15:00'),(1,1,1,'16:30:00'),(1,1,0,'16:45:00'),(1,1,1,'17:00:00'),(1,1,0,'17:15:00'),(1,1,1,'17:30:00'),(1,1,0,'17:45:00'),(1,1,1,'18:00:00'),(1,1,0,'18:15:00'),(1,1,1,'18:30:00'),(1,1,0,'18:45:00'),(1,1,1,'19:00:00'),(1,1,0,'19:15:00'),(1,1,1,'19:30:00'),(1,1,0,'19:45:00'),(1,1,1,'20:00:00'),(1,1,0,'20:15:00'),(1,1,1,'20:30:00'),(1,1,0,'20:45:00'),(1,1,1,'21:00:00'),(1,1,0,'21:15:00'),(1,1,1,'21:30:00'),(1,1,0,'21:45:00'),(1,1,1,'22:00:00'),(1,1,0,'22:15:00'),(1,1,1,'22:30:00'),(1,1,0,'22:45:00'),(1,1,1,'23:00:00'),(1,1,0,'23:15:00'),(1,1,1,'23:30:00'),(1,1,0,'23:45:00');
/*!40000 ALTER TABLE `SCHEDULE_ZONE_ONE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SCHEDULE_ZONE_THREE`
--

DROP TABLE IF EXISTS `SCHEDULE_ZONE_THREE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `SCHEDULE_ZONE_THREE` (
  `SCHEDULE_ID` int(11) DEFAULT NULL,
  `ZONE_ID` int(11) DEFAULT NULL,
  `POWERED_ON` tinyint(4) DEFAULT NULL,
  `TIME_RANGE` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SCHEDULE_ZONE_THREE`
--

LOCK TABLES `SCHEDULE_ZONE_THREE` WRITE;
/*!40000 ALTER TABLE `SCHEDULE_ZONE_THREE` DISABLE KEYS */;
INSERT INTO `SCHEDULE_ZONE_THREE` VALUES (3,3,1,'00:00:00'),(3,3,0,'00:15:00'),(3,3,1,'00:30:00'),(3,3,0,'00:45:00'),(3,3,1,'01:00:00'),(3,3,0,'01:15:00'),(3,3,1,'01:30:00'),(3,3,0,'01:45:00'),(3,3,1,'02:00:00'),(3,3,0,'02:15:00'),(3,3,1,'02:30:00'),(3,3,0,'02:45:00'),(3,3,1,'03:00:00'),(3,3,0,'03:15:00'),(3,3,1,'03:30:00'),(3,3,0,'03:45:00'),(3,3,1,'04:00:00'),(3,3,0,'04:15:00'),(3,3,1,'04:30:00'),(3,3,0,'04:45:00'),(3,3,1,'05:00:00'),(3,3,0,'05:15:00'),(3,3,1,'05:30:00'),(3,3,0,'05:45:00'),(3,3,1,'06:00:00'),(3,3,0,'06:15:00'),(3,3,1,'06:30:00'),(3,3,0,'06:45:00'),(3,3,1,'07:00:00'),(3,3,0,'07:15:00'),(3,3,1,'07:30:00'),(3,3,0,'07:45:00'),(3,3,1,'08:00:00'),(3,3,0,'08:15:00'),(3,3,1,'08:30:00'),(3,3,0,'08:45:00'),(3,3,1,'09:00:00'),(3,3,0,'09:15:00'),(3,3,1,'09:30:00'),(3,3,0,'09:45:00'),(3,3,1,'10:00:00'),(3,3,0,'10:15:00'),(3,3,1,'10:30:00'),(3,3,0,'10:45:00'),(3,3,1,'11:00:00'),(3,3,0,'11:15:00'),(3,3,1,'11:30:00'),(3,3,0,'11:45:00'),(3,3,1,'12:00:00'),(3,3,0,'12:15:00'),(3,3,1,'12:30:00'),(3,3,0,'12:45:00'),(3,3,1,'13:00:00'),(3,3,0,'13:15:00'),(3,3,1,'13:30:00'),(3,3,0,'13:45:00'),(3,3,1,'14:00:00'),(3,3,0,'14:15:00'),(3,3,1,'14:30:00'),(3,3,0,'14:45:00'),(3,3,1,'15:00:00'),(3,3,0,'15:15:00'),(3,3,1,'15:30:00'),(3,3,0,'15:45:00'),(3,3,1,'16:00:00'),(3,3,0,'16:15:00'),(3,3,1,'16:30:00'),(3,3,0,'16:45:00'),(3,3,1,'17:00:00'),(3,3,0,'17:15:00'),(3,3,1,'17:30:00'),(3,3,0,'17:45:00'),(3,3,1,'18:00:00'),(3,3,0,'18:15:00'),(3,3,1,'18:30:00'),(3,3,0,'18:45:00'),(3,3,1,'19:00:00'),(3,3,0,'19:15:00'),(3,3,1,'19:30:00'),(3,3,0,'19:45:00'),(3,3,1,'20:00:00'),(3,3,0,'20:15:00'),(3,3,1,'20:30:00'),(3,3,0,'20:45:00'),(3,3,1,'21:00:00'),(3,3,0,'21:15:00'),(3,3,1,'21:30:00'),(3,3,0,'21:45:00'),(3,3,1,'22:00:00'),(3,3,0,'22:15:00'),(3,3,1,'22:30:00'),(3,3,0,'22:45:00'),(3,3,1,'23:00:00'),(3,3,0,'23:15:00'),(3,3,1,'23:30:00'),(3,3,0,'23:45:00');
/*!40000 ALTER TABLE `SCHEDULE_ZONE_THREE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SCHEDULE_ZONE_TWO`
--

DROP TABLE IF EXISTS `SCHEDULE_ZONE_TWO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `SCHEDULE_ZONE_TWO` (
  `SCHEDULE_ID` int(11) DEFAULT NULL,
  `ZONE_ID` int(11) DEFAULT NULL,
  `POWERED_ON` tinyint(4) DEFAULT NULL,
  `TIME_RANGE` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SCHEDULE_ZONE_TWO`
--

LOCK TABLES `SCHEDULE_ZONE_TWO` WRITE;
/*!40000 ALTER TABLE `SCHEDULE_ZONE_TWO` DISABLE KEYS */;
INSERT INTO `SCHEDULE_ZONE_TWO` VALUES (2,2,0,'00:00:00'),(2,2,1,'00:15:00'),(2,2,0,'00:30:00'),(2,2,1,'00:45:00'),(2,2,0,'01:00:00'),(2,2,1,'01:15:00'),(2,2,0,'01:30:00'),(2,2,1,'01:45:00'),(2,2,0,'02:00:00'),(2,2,1,'02:15:00'),(2,2,0,'02:30:00'),(2,2,1,'02:45:00'),(2,2,0,'03:00:00'),(2,2,1,'03:15:00'),(2,2,0,'03:30:00'),(2,2,1,'03:45:00'),(2,2,0,'04:00:00'),(2,2,1,'04:15:00'),(2,2,0,'04:30:00'),(2,2,1,'04:45:00'),(2,2,0,'05:00:00'),(2,2,1,'05:15:00'),(2,2,0,'05:30:00'),(2,2,1,'05:45:00'),(2,2,0,'06:00:00'),(2,2,1,'06:15:00'),(2,2,0,'06:30:00'),(2,2,1,'06:45:00'),(2,2,0,'07:00:00'),(2,2,1,'07:15:00'),(2,2,0,'07:30:00'),(2,2,1,'07:45:00'),(2,2,0,'08:00:00'),(2,2,1,'08:15:00'),(2,2,0,'08:30:00'),(2,2,1,'08:45:00'),(2,2,0,'09:00:00'),(2,2,1,'09:15:00'),(2,2,0,'09:30:00'),(2,2,1,'09:45:00'),(2,2,0,'10:00:00'),(2,2,1,'10:15:00'),(2,2,0,'10:30:00'),(2,2,1,'10:45:00'),(2,2,0,'11:00:00'),(2,2,1,'11:15:00'),(2,2,0,'11:30:00'),(2,2,1,'11:45:00'),(2,2,0,'12:00:00'),(2,2,1,'12:15:00'),(2,2,0,'12:30:00'),(2,2,1,'12:45:00'),(2,2,0,'13:00:00'),(2,2,1,'13:15:00'),(2,2,0,'13:30:00'),(2,2,1,'13:45:00'),(2,2,0,'14:00:00'),(2,2,1,'14:15:00'),(2,2,0,'14:30:00'),(2,2,1,'14:45:00'),(2,2,0,'15:00:00'),(2,2,1,'15:15:00'),(2,2,0,'15:30:00'),(2,2,1,'15:45:00'),(2,2,0,'16:00:00'),(2,2,1,'16:15:00'),(2,2,0,'16:30:00'),(2,2,1,'16:45:00'),(2,2,0,'17:00:00'),(2,2,1,'17:15:00'),(2,2,0,'17:30:00'),(2,2,1,'17:45:00'),(2,2,0,'18:00:00'),(2,2,1,'18:15:00'),(2,2,0,'18:30:00'),(2,2,1,'18:45:00'),(2,2,0,'19:00:00'),(2,2,1,'19:15:00'),(2,2,0,'19:30:00'),(2,2,1,'19:45:00'),(2,2,0,'20:00:00'),(2,2,1,'20:15:00'),(2,2,0,'20:30:00'),(2,2,1,'20:45:00'),(2,2,0,'21:00:00'),(2,2,1,'21:15:00'),(2,2,0,'21:30:00'),(2,2,1,'21:45:00'),(2,2,0,'22:00:00'),(2,2,1,'22:15:00'),(2,2,0,'22:30:00'),(2,2,1,'22:45:00'),(2,2,0,'23:00:00'),(2,2,1,'23:15:00'),(2,2,0,'23:30:00'),(2,2,1,'23:45:00');
/*!40000 ALTER TABLE `SCHEDULE_ZONE_TWO` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ZONES`
--

DROP TABLE IF EXISTS `ZONES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ZONES` (
  `ZONE_ID` int(11) NOT NULL AUTO_INCREMENT,
  `ZONE_NAME` varchar(40) DEFAULT NULL,
  `gpio` int(11) DEFAULT NULL,
  PRIMARY KEY (`ZONE_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ZONES`
--

LOCK TABLES `ZONES` WRITE;
/*!40000 ALTER TABLE `ZONES` DISABLE KEYS */;
INSERT INTO `ZONES` VALUES (1,'Test One',17),(2,'Underfloor',27),(3,'House Downstairs',22),(4,'Hot Water',23);
/*!40000 ALTER TABLE `ZONES` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-10-28 19:45:18
