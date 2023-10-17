CREATE DATABASE  IF NOT EXISTS `db_a9ed65_tiendun` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `db_a9ed65_tiendun`;
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
-- Table structure for table `user_method_payment`
--

DROP TABLE IF EXISTS `user_method_payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_method_payment` (
  `payment_ID` int NOT NULL,
  `user_ID` int NOT NULL,
  `method_ID` int NOT NULL,
  `card_numbers` varchar(16) DEFAULT NULL,
  `card_expire_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`payment_ID`),
  KEY `user_ID` (`user_ID`),
  KEY `method_ID` (`method_ID`),
  CONSTRAINT `user_method_payment_ibfk_1` FOREIGN KEY (`user_ID`) REFERENCES `users` (`user_ID`),
  CONSTRAINT `user_method_payment_ibfk_2` FOREIGN KEY (`method_ID`) REFERENCES `app_method_payment` (`method_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_method_payment`
--

LOCK TABLES `user_method_payment` WRITE;
/*!40000 ALTER TABLE `user_method_payment` DISABLE KEYS */;
INSERT INTO `user_method_payment` VALUES (1,8,2,'3142574859244925','2023-10-15 07:30:45'),(2,3,3,'57293412983195','2024-05-02 01:15:20'),(3,2,1,'54538775931234','2026-08-05 02:25:33'),(4,9,4,'3822874581205','2027-03-12 14:55:55'),(5,10,5,NULL,NULL),(6,1,2,'1923871892574','2023-09-15 05:45:23'),(7,4,2,'1231256125643','2024-02-05 00:22:59'),(8,7,1,'1263463471234','2026-12-07 01:55:14'),(9,6,5,NULL,NULL),(10,5,3,'1231534535345','2027-07-01 12:31:40');
/*!40000 ALTER TABLE `user_method_payment` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-18  0:31:55
