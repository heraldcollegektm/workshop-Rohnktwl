-- MySQL dump 10.13  Distrib 5.7.33, for Win64 (x86_64)
--
-- Host: localhost    Database: weatherdb
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `weather`
--

DROP TABLE IF EXISTS `weather`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `weather` (
  `created_at` datetime DEFAULT NULL,
  `name` varchar(250) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `icon` varchar(50) DEFAULT NULL,
  `temp` float DEFAULT NULL,
  `pressure` varchar(255) DEFAULT NULL,
  `humidity` varchar(255) DEFAULT NULL,
  `deg` varchar(100) DEFAULT NULL,
  `temp_max` float DEFAULT NULL,
  `temp_min` float DEFAULT NULL,
  `speed` float DEFAULT NULL,
  `sunrise` int DEFAULT NULL,
  `sunset` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `weather`
--

LOCK TABLES `weather` WRITE;
/*!40000 ALTER TABLE `weather` DISABLE KEYS */;
INSERT INTO `weather` VALUES ('2022-08-11 04:19:42','Guildford','clear sky','01n',14.84,'1022','83','30',18.36,12.96,2.29,1660192928,1660246383),('2022-08-11 04:23:09','Guildford','clear sky','01n',14.84,'1022','83','30',18.36,12.96,2.29,1660192928,1660246383),('2022-08-11 04:27:08','Guildford','clear sky','01n',14.84,'1022','83','30',18.36,12.96,2.29,1660192928,1660246383);
/*!40000 ALTER TABLE `weather` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-11 10:00:50
