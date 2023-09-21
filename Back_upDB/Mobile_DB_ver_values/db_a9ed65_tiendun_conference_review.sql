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
-- Table structure for table `conference_review`
--

DROP TABLE IF EXISTS `conference_review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `conference_review` (
  `review_ID` int NOT NULL,
  `user_ID` int NOT NULL,
  `conference_ID` int NOT NULL,
  `review_content` text,
  `review_rating` int NOT NULL,
  `review_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`review_ID`),
  KEY `user_ID_idx` (`user_ID`),
  KEY `conference_ID` (`conference_ID`),
  CONSTRAINT `conference_review_ibfk_1` FOREIGN KEY (`conference_ID`) REFERENCES `conference` (`conference_ID`),
  CONSTRAINT `conference_review_ibfk_2` FOREIGN KEY (`user_ID`) REFERENCES `users` (`user_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conference_review`
--

LOCK TABLES `conference_review` WRITE;
/*!40000 ALTER TABLE `conference_review` DISABLE KEYS */;
INSERT INTO `conference_review` VALUES (1,1,2,'Khu này xây theo phong cách châu âu, tên đường là tên các loài hoa.Rất rộng và chia ra nhiều khu với diện tích khác nhau, trang trí sang trọng và hiện đại',5,'2023-01-11 15:28:36'),(2,2,2,'Đồ ăn ngon, rộng rãi thoáng mát',4,'2023-06-08 08:53:48'),(3,3,3,'Trung tâm hội nghị rất to và sang trọng ',5,'2023-03-06 01:07:12'),(4,4,1,'Nhân viên phục vụ nhanh nhẹn và chu đáo, lịch sự.',5,'2023-07-23 15:16:35'),(5,5,4,'Không gian rộng rãi, thiết kế tinh tế còn có khu bể bơi ngoài trời nữa .',4,'2023-01-20 03:10:03'),(6,6,4,'Món ăn rất đa dạng và ngon mắt . Trước khi bày đồ ăn còn có 1 đĩa phô mai để nhâm nhi uống cùng rượu nữa',5,'2023-08-26 00:36:50'),(7,7,5,'Bữa có dịp ra Hà Nội dự hội nghị, được ghé nhà hàng này dùng bữa. Món ở đây vị khá ngon, trình bày chưa được đẹp mắt lắm. Không gian thì rộng rãi. Phục vụ chu đáo lịch sự',5,'2023-04-08 05:52:18'),(8,8,1,'Cảm giác đầu tiên của mình là mặt tiền sang trong, mặt sau view đẹp, phong cảnh như các phim trường trung Hoa, bạn nào thích photograph thì mình nghĩ đây là địa điểm cho các bạn thoả sức luyện tay nghề.',5,'2023-09-25 08:55:04'),(9,9,2,'Thực đơn quốc tế đa dạng là cái mình ấn tượng nhất về đây.',4,'2023-06-20 11:25:01'),(10,10,5,'Trung tâm hội nghị rất to và sang trọng :3 dù nó xa trung tâm thành phố rất là nhiều. Nơi đây là tổ hợp của hội nghị , tổ chức tiệc cưới. Đường đi hơi vòng vèo nhưng luôn có biển chỉ dẫn',5,'2023-08-09 15:40:38');
/*!40000 ALTER TABLE `conference_review` ENABLE KEYS */;
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
