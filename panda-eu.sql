-- MySQL dump 10.13  Distrib 5.6.10, for Win64 (x86_64)
--
-- Host: localhost    Database: pandaeu
-- ------------------------------------------------------
-- Server version	5.6.10

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
-- Table structure for table `user_t`
--

DROP TABLE IF EXISTS `user_t`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_t` (
  `userID` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `ID` varchar(18) NOT NULL COMMENT 'ID',
  `userName` varchar(45) NOT NULL COMMENT '用户姓名',
  `phone` varchar(11) NOT NULL COMMENT '电话',
  `emailID` varchar(45) NOT NULL COMMENT '邮箱',
  `address` text NOT NULL COMMENT '地址',
  `category` varchar(255) NOT NULL COMMENT '类别',
  `originalPrice` decimal(9,2) NOT NULL COMMENT '原始价格',
  `discountedPrice` decimal(9,2) DEFAULT NULL COMMENT '打折价格',
  `discount` varchar(45) DEFAULT NULL COMMENT '折扣规则',
  `description` text NOT NULL COMMENT '说明',
  `creationDate` datetime NOT NULL COMMENT '创建日期',
  `state` tinyint(4) NOT NULL COMMENT '状态：0-未接受 1-已接受 2-已拒绝',
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COMMENT='用户表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_t`
--

LOCK TABLES `user_t` WRITE;
/*!40000 ALTER TABLE `user_t` DISABLE KEYS */;
INSERT INTO `user_t` VALUES (1,'99999999','Kai','666666','kaikai@163.com','sheng 888','God',64.32,64.32,'0','Eternal God','2020-10-22 18:26:00',0),(2,'88888888','James','5791650000','15161@163.com','yanderra 2570','Paragraph',4000.00,400.00,'10%','Need to paint 2 aluminum windows and a sliding glass door','2020-10-22 19:26:00',0),(3,'48911231','Uzi','7141414199','361141561@qq.com','89 S Plaza Way','God',9999.99,9999.99,'0','Who changed the truth of God into a lie, and worshipped and served the creature more than the Creator, who is blessed for ever','2020-10-22 19:26:00',0),(4,'77748915','Mlxg','1415152555','66666666@qq.com','4114 Sepulveda Blvd','people',9999.99,9999.99,'0','Who changed the truth of God into a lie, and worshipped and served the creature more than the Creator, who is blessed for ever','2019-10-22 19:26:00',0),(5,'41116203','Ming','4456210002','5555555@qq.com','89 S Plaza Way','God',9999.99,9999.99,'0','Who changed the truth of God into a lie, and worshipped and served the creature more than the Creator, who is blessed for ever','2018-10-22 19:26:00',0),(6,'12419100','PDD','1414515610','3333333@qq.com','4114 Sepulveda Blvd','people',9999.99,9999.99,'0','Who changed the truth of God into a lie, and worshipped and served the creature more than the Creator, who is blessed for ever','2015-10-22 22:26:00',0);
/*!40000 ALTER TABLE `user_t` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-23  3:36:08
