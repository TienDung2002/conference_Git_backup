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
-- Table structure for table `items_warehouse`
--

DROP TABLE IF EXISTS `items_warehouse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `items_warehouse` (
  `item_ID` int NOT NULL,
  `itemName` varchar(100) NOT NULL,
  `quantityAvailable` int NOT NULL,
  `lastModified` timestamp NULL DEFAULT NULL,
  `itemPrice` float NOT NULL,
  PRIMARY KEY (`item_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items_warehouse`
--

LOCK TABLES `items_warehouse` WRITE;
/*!40000 ALTER TABLE `items_warehouse` DISABLE KEYS */;
INSERT INTO `items_warehouse` VALUES (1,'Khăn lạnh',10000,'2023-09-15 05:45:23',10000),(2,'Nước khoáng Quang Hanh',10000,'2023-09-05 00:22:59',13000),(3,'Nước đóng chai Lavie',10000,'2023-09-20 10:10:37',8000),(4,'Cocacola',10000,'2023-09-07 01:55:14',15000),(5,'Pepsi',10000,'2023-09-01 12:31:40',15000),(6,'Cam sành',10000,'2023-09-25 08:18:47',20000),(7,'Quýt',10000,'2023-09-11 02:04:33',16000),(8,'Táo Mỹ',10000,'2023-09-29 23:36:28',25000),(9,'Bưởi da xanh',10000,'2023-09-14 14:59:12',125000),(10,'Bánh ngọt',10000,'2023-09-29 03:27:05',7000),(11,'Trà',10000,'2023-09-22 03:27:10',30000);
/*!40000 ALTER TABLE `items_warehouse` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-15  8:10:16
