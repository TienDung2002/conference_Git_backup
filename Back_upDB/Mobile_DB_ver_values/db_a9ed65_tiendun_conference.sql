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
-- Table structure for table `conference`
--

DROP TABLE IF EXISTS `conference`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `conference` (
  `conference_ID` int NOT NULL,
  `user_ID` int NOT NULL,
  `conferenceName` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `NumberOfSeat` int DEFAULT NULL,
  `Price` float DEFAULT NULL,
  `Require_First_Pay` varchar(10) NOT NULL,
  PRIMARY KEY (`conference_ID`),
  KEY `user_ID` (`user_ID`),
  CONSTRAINT `conference_ibfk_1` FOREIGN KEY (`user_ID`) REFERENCES `users` (`user_ID`),
  CONSTRAINT `conference_chk_1` CHECK (((`Require_First_Pay` like _utf8mb4'100%') or (`Require_First_Pay` between _utf8mb4'0%' and _utf8mb4'99%')))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conference`
--

LOCK TABLES `conference` WRITE;
/*!40000 ALTER TABLE `conference` DISABLE KEYS */;
INSERT INTO `conference` VALUES (1,2,'Almaz Convention Center Hà Nội','Khu đô thị Vinhomes Riverside, Phúc Lợi, Long Biên, Hà Nội',1600,120000000,'30'),(2,7,'InterContinental Hanoi Landmark72','E6, đường Phạm Hùng, khu đô thị mới Cầu Giấy,Yên Hòa, Hà Nội',2000,89000000,'25'),(3,3,'Trung tâm Hội nghị quốc gia','Cổng số 1, ĐCT08, Mễ Trì, Nam Từ Liêm, Hà Nội',700,100000000,'22'),(4,9,'Trung tâm tổ chức sự kiện Venus','39 Cầu Diễn, P. Phúc Diễn, Q. Bắc Từ Liêm.',500,99000000,'13'),(5,6,'Trống đồng Palace','65 Quán Sứ, Trần Hưng Đạo, Quận Hoàn Kiếm',1500,50000000,'10');
/*!40000 ALTER TABLE `conference` ENABLE KEYS */;
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
