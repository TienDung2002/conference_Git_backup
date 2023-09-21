-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: db_a9ed65_tiendun
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `rented`
--

DROP TABLE IF EXISTS `rented`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rented` (
  `rented_ID` int NOT NULL,
  `user_ID` int NOT NULL,
  `conference_ID` int NOT NULL,
  `payment_ID` int NOT NULL,
  `date` timestamp NOT NULL,
  `sumTotal` float DEFAULT NULL,
  `payed` float DEFAULT NULL,
  `payLeft` float DEFAULT NULL,
  `isFinished` tinyint DEFAULT NULL,
  PRIMARY KEY (`rented_ID`),
  KEY `user_ID_idx` (`user_ID`),
  KEY `conference_ID` (`conference_ID`),
  KEY `payment_ID` (`payment_ID`),
  CONSTRAINT `rented_ibfk_1` FOREIGN KEY (`conference_ID`) REFERENCES `conference` (`conference_ID`),
  CONSTRAINT `rented_ibfk_2` FOREIGN KEY (`payment_ID`) REFERENCES `user_method_payment` (`payment_ID`),
  CONSTRAINT `user_ID` FOREIGN KEY (`user_ID`) REFERENCES `users` (`user_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rented`
--

LOCK TABLES `rented` WRITE;
/*!40000 ALTER TABLE `rented` DISABLE KEYS */;
INSERT INTO `rented` VALUES (1,4,1,5,'2023-01-25 05:05:27',0,0,0,1),(2,2,2,2,'2023-01-20 07:16:55',0,0,0,1),(3,6,3,4,'2023-08-09 00:36:40',0,0,0,1),(4,5,4,3,'2023-06-26 12:03:01',0,0,0,1),(5,8,5,1,'2023-09-23 01:12:37',0,0,0,1);
/*!40000 ALTER TABLE `rented` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-15  8:10:15
