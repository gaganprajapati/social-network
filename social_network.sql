-- CREATE DATABASE  IF NOT EXISTS `social_network` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
-- USE `social_network`;
-- MySQL dump 10.13  Distrib 8.0.22, for macos10.15 (x86_64)
--
-- Host: localhost    Database: social_network
-- ------------------------------------------------------
-- Server version	8.0.22

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
-- Table structure for table `friends`
--

DROP TABLE IF EXISTS `friends`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `friends` (
  `user_id_1` bigint NOT NULL,
  `user_id_2` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `friends`
--

LOCK TABLES `friends` WRITE;
/*!40000 ALTER TABLE `friends` DISABLE KEYS */;
INSERT INTO `friends` VALUES (10000001,10000025),(10000002,10000026),(10000003,10000027),(10000004,10000028),(10000005,10000029),(10000006,10000030),(10000007,10000031),(10000008,10000032),(10000009,10000033),(10000010,10000034),(10000001,10000029),(10000001,10000038),(10000001,10000061),(10000001,10000076),(10000003,10000001),(10000088,10000001),(10000047,10000001);
/*!40000 ALTER TABLE `friends` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` mediumint unsigned NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `avatar` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10000101 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (10000001,'Griffith','Cash','neque.'),(10000002,'Mari','Higgins','arcu'),(10000003,'Allistair','Rich','congue.'),(10000004,'Kimberly','Ramirez','lorem'),(10000005,'Sloane','Park','id'),(10000006,'Carla','Good','molestie'),(10000007,'Bernard','Chandler','placerat,'),(10000008,'Jaden','Petersen','Aliquam'),(10000009,'Odette','Hill','Suspendisse'),(10000010,'Pearl','Pruitt','Curabitur'),(10000011,'Jason','Howard','arcu.'),(10000012,'Francis','White','lorem'),(10000013,'Upton','Benton','non,'),(10000014,'George','England','Mauris'),(10000015,'Hop','Townsend','eros.'),(10000016,'Gloria','Hoover','sagittis'),(10000017,'Cade','Carrillo','Maecenas'),(10000018,'Brian','Collins','sit'),(10000019,'Reagan','Mclean','euismod'),(10000020,'Rhoda','Herrera','sit'),(10000021,'Samuel','Peters','tellus.'),(10000022,'Sigourney','Cherry','purus.'),(10000023,'Diana','Benson','quis'),(10000024,'Thor','Fowler','ligula.'),(10000025,'Myra','Barker','elit.'),(10000026,'Cameron','Baker','arcu.'),(10000027,'Uriah','Pate','nonummy'),(10000028,'Hanna','Fox','congue.'),(10000029,'Fay','Rios','Quisque'),(10000030,'Otto','Joyce','Integer'),(10000031,'Teegan','Wooten','neque'),(10000032,'Dara','Riddle','at'),(10000033,'Frances','Sykes','dolor'),(10000034,'Ivana','Bryant','iaculis'),(10000035,'Grant','Barlow','adipiscing'),(10000036,'Janna','Acevedo','commodo'),(10000037,'Inga','Terrell','non'),(10000038,'Ciara','Harding','ligula'),(10000039,'Blossom','Jefferson','blandit'),(10000040,'Wyatt','Barton','aliquet'),(10000041,'Sophia','Mcdaniel','cubilia'),(10000042,'Colby','Fischer','imperdiet'),(10000043,'Elvis','Hill','nec'),(10000044,'Hasad','Salinas','Ut'),(10000045,'Melodie','Oneal','semper'),(10000046,'Hillary','Guerrero','mi'),(10000047,'Warren','Wolf','tincidunt'),(10000048,'Ethan','Freeman','dui'),(10000049,'Frances','Booker','quis'),(10000050,'Merrill','Mccray','consequat'),(10000051,'Owen','Bullock','quam'),(10000052,'Tyrone','Arnold','libero'),(10000053,'Zane','Ellis','non'),(10000054,'Reed','Buchanan','Vivamus'),(10000055,'Hector','Mccullough','tortor'),(10000056,'Addison','Adkins','nunc,'),(10000057,'Illana','Vang','tempus'),(10000058,'Laura','Foreman','diam.'),(10000059,'Guy','Valencia','dapibus'),(10000060,'Virginia','Collier','scelerisque'),(10000061,'Orson','Kirby','arcu.'),(10000062,'Jael','Fernandez','risus'),(10000063,'Katell','Henry','lorem'),(10000064,'Kessie','Simpson','Ut'),(10000065,'Kiara','Dennis','vitae'),(10000066,'Guy','Mack','senectus'),(10000067,'Akeem','Dunlap','sit'),(10000068,'Reed','Hinton','enim.'),(10000069,'Miriam','Webster','odio.'),(10000070,'Vernon','Benson','nibh'),(10000071,'Amaya','Gamble','Fusce'),(10000072,'Abra','Brewer','ac'),(10000073,'Wayne','Gamble','conubia'),(10000074,'Amy','Montoya','turpis.'),(10000075,'Bernard','Bright','lorem'),(10000076,'Christopher','Marsh','sit'),(10000077,'Ivy','Melendez','Nam'),(10000078,'Sara','Nelson','Phasellus'),(10000079,'Karyn','Pollard','Pellentesque'),(10000080,'Ursa','Chase','imperdiet'),(10000081,'Camille','Murray','metus'),(10000082,'Portia','Daugherty','Proin'),(10000083,'Beck','James','Phasellus'),(10000084,'Molly','Finley','in,'),(10000085,'Noah','Hester','libero'),(10000086,'Hashim','Tyler','non,'),(10000087,'Leo','Simmons','Aliquam'),(10000088,'Brandon','Burnett','enim.'),(10000089,'Jerome','Gates','et'),(10000090,'Brielle','Gentry','Aliquam'),(10000091,'Kirby','Pruitt','sit'),(10000092,'Jermaine','Aguirre','metus.'),(10000093,'Ulric','Ray','Maecenas'),(10000094,'Clark','Smith','Nunc'),(10000095,'Adam','Huber','nec,'),(10000096,'Avye','Oneill','et'),(10000097,'Todd','Mccoy','Integer'),(10000098,'Angelica','Shaw','ac,'),(10000099,'Bell','Johns','eu,'),(10000100,'Mariam','Wise','Nunc');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-26 10:03:22
