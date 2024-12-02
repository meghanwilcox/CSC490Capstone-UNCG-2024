-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: capstoneserver.mysql.database.azure.com    Database: capstone-db
-- ------------------------------------------------------
-- Server version	8.0.37-azure

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
-- Table structure for table `app_sighting`
--

DROP TABLE IF EXISTS `app_sighting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `app_sighting` (
  `id` int NOT NULL AUTO_INCREMENT,
  `species_name` varchar(100) NOT NULL,
  `date_seen` date NOT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL,
  `photo` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_sighting`
--

LOCK TABLES `app_sighting` WRITE;
/*!40000 ALTER TABLE `app_sighting` DISABLE KEYS */;
INSERT INTO `app_sighting` VALUES (1,'Test Species','2024-09-19',-34,180,'sightings_photos/unnamed_1.jpg'),(2,'Test Species 2','2024-09-19',-50,175,'sightings_photos/unnamed_1_ipRvQf1.jpg'),(3,'Test Species 2','2024-09-03',-50,175,'sightings_photos/unnamed_1_zhpNwbY.jpg'),(4,'Test Species 2','2024-09-19',-80,190,'sightings_photos/unnamed_1_3sX2NeO.jpg'),(5,'Acanthaeschna victoria','2024-09-04',60,148,'sightings_photos/unnamed_1_kMinKQf.jpg'),(6,'Butis butis','2024-09-03',81,100,'sightings_photos/unnamed_1_5j0h2Wm.jpg'),(7,'Alticola strelzowi','2024-09-17',70,100,'sightings_photos/unnamed_1_hDRoacy.jpg'),(8,'Artemia monica','2024-10-10',-70,148,'sightings_photos/427061.jpg'),(9,'Allocrangonyx pellucidus','2024-11-15',82,50,'sightings_photos/unnamed_1_2AN1wEn.jpg'),(10,'Agrotis kerri','2024-11-15',-50,24,'sightings_photos/unnamed_1_g5xOhVW.jpg'),(11,'Adrianichthys kruyti','2024-11-15',90,90,'sightings_photos/unnamed_1_oYcN6oT.jpg'),(12,'Agrotis kerri','2024-11-15',20,20,'sightings_photos/unnamed_1_eEo25zF.jpg'),(13,'Actinella laciniosa','2024-11-15',10,9,'sightings_photos/dog_sitting.jfif'),(14,'Cobitis hellenica','2024-12-01',-70,51,'sightings_photos/unnamed_1_HY80ZHr.jpg'),(15,'Acipenser sinensis','2024-12-01',-70,52,'sightings_photos/unnamed_1_0e0ZU09.jpg'),(16,'Canis rufus','2024-12-01',60,59,'sightings_photos/canisrufus.png'),(17,'Canis rufus','2024-12-01',60,54,'sightings_photos/canisrufus_B242SMm.png'),(18,'Canis rufus','2023-12-12',80,-12,'sightings_photos/canisrufus_c2tC0fL.png');
/*!40000 ALTER TABLE `app_sighting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `app_user`
--

DROP TABLE IF EXISTS `app_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `app_user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `password` varchar(128) NOT NULL,
  `name` varchar(100) NOT NULL,
  `is_researcher` tinyint(1) NOT NULL,
  `bio` longtext,
  `last_login` datetime(6) DEFAULT NULL,
  `profile_picture` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_user`
--

LOCK TABLES `app_user` WRITE;
/*!40000 ALTER TABLE `app_user` DISABLE KEYS */;
INSERT INTO `app_user` VALUES (1,'ajasper26@gmail.com','pbkdf2_sha256$870000$8IBHj7rxaLTmCiA39DUujY$nDi7UvJXDOvKhrLb4DQFiFmJraKyDgekCnfF3rL91vo=','Alex Jasper',0,'Hello','2024-12-02 00:07:04.337610','profile_pictures/IMG_5595_zIUARey.jpg'),(2,'alex@email.com','pbkdf2_sha256$870000$Yf7WGKXC9UDdWVe2qJXHkd$HgSrn6BbL5UNqannZegne2jKSSC/zhLmy43Gh2qGsXY=','Jasper',0,NULL,'2024-09-28 01:48:11.528416',NULL),(3,'jodir2r@hotmail.com','pbkdf2_sha256$870000$HybTwKzAepZbzRJ2WMdnMr$CKIpMi8m1jSuHomadGIibluoWGCAR9NuAo7sHFaiml0=','Jodi Wilcox',0,NULL,'2024-11-15 21:10:17.403867',NULL),(4,'test11@gmail.com','pbkdf2_sha256$870000$2yj5OdHb8Zbvvjv8aSnkpZ$9JIH6jmWaRDfLwByogKzNsl4FSwtetADkDw7/NXeHMY=','Meghan Wilcox',1,NULL,'2024-09-30 13:56:36.507747',NULL),(5,'m_wilcox@uncg.edu','pbkdf2_sha256$870000$cZ7OgdgxgbdHsGP6K8RIYj$YMxri378a1jLIjeq951aNDDyvWu5sRzW6bMqcrZO6H4=','Meghan Wilcox',1,NULL,'2024-11-15 21:11:38.473017',NULL),(6,'meghanwilcox4235@gmail.edu','pbkdf2_sha256$870000$INX1kZXMiqTxYViIuxCzCG$cjc+9cxh7+0++IN5JZ6HbFiVNNLGuqc4+jWUuaPY8Z8=','Meghan',1,NULL,'2024-10-16 22:30:28.877931',''),(7,'TEST@gmail.com','pbkdf2_sha256$600000$UyskjjLnWNKiVObenQTJca$JsSwgh9+73pJbeodVazHq7VMMICquIXBCqNPZ+JIF84=','jodi',0,NULL,'2024-11-15 15:38:42.875246',''),(8,'derekefox@gmail.com','pbkdf2_sha256$870000$xGuz9jEzhgK1l5rss5tnle$Suw7KQwbwaS425+u96j2GnyNYWcUVwX6/6evVF/YRbE=','Derek Fox',0,NULL,'2024-10-23 20:53:12.042942',''),(9,'defox@uncg.edu','pbkdf2_sha256$600000$6o7u3dzZVeTwBmHFSO3xnN$7VssBHU9gPeWcULnaaIZ7cq4mup+IbMSu7yVwi2/x6g=','Derek Fox',1,NULL,'2024-11-27 16:14:57.774498',''),(10,'123@gmail.com','pbkdf2_sha256$600000$WbjzB95viFnI6MFnguY49r$LRSB+PNv/uTHphugyyYSJ241EG14OdRu5uSMcjGEPds=','123',0,NULL,'2024-12-01 15:47:04.551115',''),(11,'h_abbasz@uncg.edu','pbkdf2_sha256$600000$T1sl5ebvggdk90UCPG38oC$wB4g/HnfLk6no6fbamaRFcO5YasiHfJiPlg2RNP5PwU=','123',1,NULL,'2024-12-01 15:46:40.737076',''),(12,'456@gmail.com','pbkdf2_sha256$600000$djUA7DQDWcJtQRyI4FsxN1$SVM+5CVtWrxsvC+6ocM/Xha6iQhzThCjtl2G5uK5Oj4=','Meghan',0,NULL,'2024-12-01 15:51:15.787520',''),(13,'678@gmail.com','pbkdf2_sha256$600000$0MzKO5OWSI7WjlunzFYaIR$7tWkJ2AOWFYC8P9IVgH9+Z9Vh3Qwd9w1Ig2KYn/7okE=','Meghan',0,NULL,'2024-12-01 16:03:46.109138',''),(14,'789@gmail.com','pbkdf2_sha256$600000$FR1VmKe9kd5VOflUOG88lW$mics+kj906rP4Vqq3M9MNZGdBoxILNNNXqfUqJQz/jg=','Meghan',0,NULL,'2024-12-01 16:09:00.085494',''),(15,'111@gmail.com','pbkdf2_sha256$600000$CnQ1l29A3UM54jWCbScQ13$gZCIUpk4z7pWnH9XMGKmIEXyXrwWdQBsfBXBexXYy1o=','Meghan',0,NULL,'2024-12-01 16:14:33.657901','');
/*!40000 ALTER TABLE `app_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add user',4,'add_user'),(14,'Can change user',4,'change_user'),(15,'Can delete user',4,'delete_user'),(16,'Can view user',4,'view_user'),(17,'Can add content type',5,'add_contenttype'),(18,'Can change content type',5,'change_contenttype'),(19,'Can delete content type',5,'delete_contenttype'),(20,'Can view content type',5,'view_contenttype'),(21,'Can add session',6,'add_session'),(22,'Can change session',6,'change_session'),(23,'Can delete session',6,'delete_session'),(24,'Can view session',6,'view_session'),(25,'Can add user',7,'add_user'),(26,'Can change user',7,'change_user'),(27,'Can delete user',7,'delete_user'),(28,'Can view user',7,'view_user'),(29,'Can add species',8,'add_species'),(30,'Can change species',8,'change_species'),(31,'Can delete species',8,'delete_species'),(32,'Can view species',8,'view_species'),(33,'Can add admin',9,'add_admin'),(34,'Can change admin',9,'change_admin'),(35,'Can delete admin',9,'delete_admin'),(36,'Can view admin',9,'view_admin'),(37,'Can add sighting',10,'add_sighting'),(38,'Can change sighting',10,'change_sighting'),(39,'Can delete sighting',10,'delete_sighting'),(40,'Can view sighting',10,'view_sighting');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(9,'app','admin'),(10,'app','sighting'),(8,'app','species'),(7,'app','user'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(5,'contenttypes','contenttype'),(6,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2024-09-22 11:45:23.547544'),(2,'auth','0001_initial','2024-09-22 11:45:26.185206'),(3,'admin','0001_initial','2024-09-22 11:45:26.903403'),(4,'admin','0002_logentry_remove_auto_add','2024-09-22 11:45:26.939391'),(5,'admin','0003_logentry_add_action_flag_choices','2024-09-22 11:45:26.978602'),(6,'app','0001_initial','2024-09-22 11:45:27.106922'),(7,'app','0002_rename_isresearcher_user_is_researcher','2024-09-22 11:45:27.187675'),(8,'app','0003_alter_user_password','2024-09-22 11:45:27.393320'),(9,'app','0004_species','2024-09-22 11:45:27.425975'),(10,'app','0005_admin','2024-09-22 11:45:27.555822'),(11,'app','0006_user_bio','2024-09-22 11:45:27.639114'),(12,'contenttypes','0002_remove_content_type_name','2024-09-22 11:45:28.061726'),(13,'auth','0002_alter_permission_name_max_length','2024-09-22 11:45:28.340977'),(14,'auth','0003_alter_user_email_max_length','2024-09-22 11:45:28.427847'),(15,'auth','0004_alter_user_username_opts','2024-09-22 11:45:28.462790'),(16,'auth','0005_alter_user_last_login_null','2024-09-22 11:45:28.741887'),(17,'auth','0006_require_contenttypes_0002','2024-09-22 11:45:28.775647'),(18,'auth','0007_alter_validators_add_error_messages','2024-09-22 11:45:28.806748'),(19,'auth','0008_alter_user_username_max_length','2024-09-22 11:45:29.052313'),(20,'auth','0009_alter_user_last_name_max_length','2024-09-22 11:45:29.361340'),(21,'auth','0010_alter_group_name_max_length','2024-09-22 11:45:29.439116'),(22,'auth','0011_update_proxy_permissions','2024-09-22 11:45:29.542275'),(23,'auth','0012_alter_user_first_name_max_length','2024-09-22 11:45:29.873642'),(24,'sessions','0001_initial','2024-09-22 11:45:30.059450'),(25,'app','0007_alter_species_options','2024-09-23 02:45:46.562225'),(26,'app','0008_alter_species_table','2024-09-23 02:52:49.010220'),(27,'app','0009_alter_species_table','2024-09-23 02:52:49.124934'),(28,'app','0010_alter_species_options_user_last_login','2024-09-28 01:48:11.637893'),(29,'app','0011_sighting','2024-09-28 01:56:07.274246'),(30,'app','0012_remove_sighting_sighted_by_alter_user_email_and_more','2024-09-29 03:07:02.062640'),(31,'app','0013_user_profile_picture','2024-10-15 00:45:30.723391');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('001cicxsz0bawju7caml8399ikjux7y4','.eJyrViotTi2Kz0xRsjLWUYpPLC3JiIeLKBkroYglJSZnp-aBJFKyEvPS8_WS8_NKijKT9EBK9KCyxXq--SmpOU5QtSgGZCQWZwB1K9UCAMs3Khc:1sujLy:rXDCu4gYxcqIaPJFrTUSgMUehLbH92uUd03dfFCQTtc','2024-09-29 07:08:06.279984'),('00ek02nyffhwwp7ym6ct2r9u1ppf5wdr','.eJyrViotTi2Kz0xRsjLUUYpPLC3JiIeLKBkqoYglJSZnp-aBJFKyEvPS8_WS8_NKijKT9EBK9KCyxXq--SmpOU5QtSgGZCQWZwB1K9UCAMmtKhM:1sufFW:ZxSmTMwxnHZ2BDAeAHhdnf-f4em2qSjb6cj7BhPMWBc','2024-09-29 02:45:10.831511'),('0c6ih2gu9z3s4ew6fyga5vid24qtk2wq','.eJxVjDsOwjAQBe_iGlls1jgOJT1nsPbj4ACypTipEHeHSCmgfTPzXibSuuS4tjTHSc3ZoDn8bkzySGUDeqdyq1ZqWeaJ7abYnTZ7rZqel939O8jU8rceTgziw8DoQx9YFJUkMfgjkIYkHbL0CswKQr5zOAIw8OA6cYgjmvcH_ts4eA:1suktj:_GkERyYNn_AMYsdcDvWjRo7HNzA_olIbKjSPXueFaaY','2024-09-29 08:47:03.820513'),('0h3n698tz2k3i5o0ackkptizm95dn03y','.eJxVjDsOwjAQBe_iGlls1jgOJT1nsPbj4ACypTipEHeHSCmgfTPzXibSuuS4tjTHSc3ZoDn8bkzySGUDeqdyq1ZqWeaJ7abYnTZ7rZqel939O8jU8rceTgziw8DoQx9YFJUkMfgjkIYkHbL0CswKQr5zOAIw8OA6cYgjmvcH_ts4eA:1t3hfR:2puv5NPvpKksbj9LJCIFhC6qqNQjBP_0MnbVr75wImA','2024-10-24 01:09:17.447428'),('1icntlnp53kbayls17ir337d002brc4b','.eJyrViotTi2Kz0xRsjLWUYpPLC3JiIeLKBkroYglJSZnp-aBJFKyEvPS8_WS8_NKijKT9EBK9KCyxXq--SmpOU5QtSgGZCQWZwB1K9UCAMs3Khc:1suj30:PhATUCt4nzg2dS1riZJawCIQtgBsaQKHDKivKAHa0Zw','2024-09-29 06:48:30.351604'),('1wh2boscqnwj3q0ffj831frp8okedilo','.eJxVjMEOwiAQRP-FsyF0WQt49O43kC0LUjWQlPZk_Hdp0oPeJm_ezFt42tbstxYXP7O4iEGcftlE4RnLXvCDyr3KUMu6zJPcFXm0Td4qx9f1cP8OMrXc12eVRjuCYo3KOoOIoKNGE9IQ0LIi6MhAz84Z4zR1KYFmBwwUwInPF5zcNj0:1tHRSx:Z2mAwptePhoMumB3Cws5QxAWFYF89LdplOf9LzKaOtE','2024-11-30 22:41:11.018872'),('1xymp2vl9ufadcmrikn4lja9lo0zghuk','.eJxVjDsOwjAQBe_iGln2rn9Q0ucMltfr4ABypDipEHeHSCmgfTPzXiKmba1x62WJE4uLcOL0u1HKj9J2wPfUbrPMc1uXieSuyIN2OcxcntfD_TuoqddvjZ4SMDqj0DjPikBnB6izVuRtYYuWxjN6sD4Qgg6-IAULIxcw2Srx_gC7xzbU:1t1CCc:YLgXbLobWfNsTjiptTyBJftJwYM8m9P9DGFWYe6f4w8','2024-10-17 03:09:10.688050'),('25vlh184sb25ejjoluvnn700v206mkwl','.eJxVjMEOwiAQRP-FsyF0WQt49O43kC0LUjWQlPZk_Hdp0oPeJm_ezFt42tbstxYXP7O4iEGcftlE4RnLXvCDyr3KUMu6zJPcFXm0Td4qx9f1cP8OMrXc12eVRjuCYo3KOoOIoKNGE9IQ0LIi6MhAz84Z4zR1KYFmBwwUwInPF5zcNj0:1t0Vrl:W-b1v7jj0vKj7x0BqqfyZxYqSdKW1unFY0hqyVuWDdA','2024-10-15 05:56:49.884539'),('2g3im4vhkpgh644zi4qwg4qvvbw3rerb','.eJyrViotTi2Kz0xRsjLWUYpPLC3JiIeLKBkroYglJSZnp-aBJFKyEvPS8_WS8_NKijKT9EBK9KCyxXq--SmpOU5QtSgGZCQWZwB1K9UCAMs3Khc:1sujU6:iWT2pb6iAh-TvdpQRHHEg_0c408bq5sVvF16IOgFNeQ','2024-09-29 07:16:30.181920'),('2naeipqgrwnosg7f1juozq88rck03im1','.eJxVjMEOwiAQRP-FsyF0WQt49O43kC0LUjWQlPZk_Hdp0oPeJm_ezFt42tbstxYXP7O4iEGcftlE4RnLXvCDyr3KUMu6zJPcFXm0Td4qx9f1cP8OMrXc12eVRjuCYo3KOoOIoKNGE9IQ0LIi6MhAz84Z4zR1KYFmBwwUwInPF5zcNj0:1tHRex:2koFxLhGVfexgjZ4zaEzCKPfIPrZFJGmz9e-tVe8uX8','2024-11-30 22:53:35.032418'),('2wwt8j55hwcjyf0gdzrbk04z4xydf369','.eJxVjDsOwjAQBe_iGlls1jgOJT1nsPbj4ACypTipEHeHSCmgfTPzXibSuuS4tjTHSc3ZoDn8bkzySGUDeqdyq1ZqWeaJ7abYnTZ7rZqel939O8jU8rceTgziw8DoQx9YFJUkMfgjkIYkHbL0CswKQr5zOAIw8OA6cYgjmvcH_ts4eA:1sukrQ:7t4cH4C0kNg4Xp7n-D4cHdbXk7knmFiN_lDfhoxZ6BY','2024-09-29 08:44:40.863317'),('2xj068yl1jqtmu8z555la2llrxk5c0gm','.eJxVjMEOwiAQRP-FsyF0WQt49O43kC0LUjWQlPZk_Hdp0oPeJm_ezFt42tbstxYXP7O4iEGcftlE4RnLXvCDyr3KUMu6zJPcFXm0Td4qx9f1cP8OMrXc12eVRjuCYo3KOoOIoKNGE9IQ0LIi6MhAz84Z4zR1KYFmBwwUwInPF5zcNj0:1t0Wgv:bX7rB0JV3bDpu4TqwdJ254iED454JUd8eoRO4CyDVCI','2024-10-15 06:49:41.151186'),('3118t71u2so0qsl0za3xlc7nlho4wsm8','.eJyrViotTi2Kz0xRsjLWUYpPLC3JiIeLKBkroYglJSZnp-aBJFKyEvPS8_WS8_NKijKT9EBK9KCyxXq--SmpOU5QtSgGZCQWZwB1K9UCAMs3Khc:1sujGQ:TFfRWDpPQp5yutFbE8nJ83-x5bDt-F8FfrXng5qaRfA','2024-09-29 07:02:22.223473'),('3c4rcq54kf4na260n82i65ojdibc8okl','.eJxVjEEOwiAQRe_C2hAKDIJL956BTJmpVA0kpV0Z726bdNFu_3vvf0XEZc5xaTzFkcRNgLgctx7Tm8sG6IXlWWWqZZ7GXm6K3GmTj0r8ue_u6SBjy2udiIMLbLRJV7QEGgbw2A0qOK3BeE_WMxGxsYpXDXWyAOAMd0Qelfj9Aea5N9w:1tC29c:0_kBJmOp8IgmYsYunc_J-lyoFc3oUUFj8jtZrHTyovs','2024-11-16 00:38:52.338827'),('3jftsj2bv5jpsw56nc9nimkpjlqn40vj','.eJxVjDsOwjAQBe_iGlls1jgOJT1nsPbj4ACypTipEHeHSCmgfTPzXibSuuS4tjTHSc3ZoDn8bkzySGUDeqdyq1ZqWeaJ7abYnTZ7rZqel939O8jU8rceTgziw8DoQx9YFJUkMfgjkIYkHbL0CswKQr5zOAIw8OA6cYgjmvcH_ts4eA:1sukvH:8NDwdfyvEILVpvBW2gEsOdF2_CJ915zOy5vedM1W_Ps','2024-09-29 08:48:39.489601'),('3jgzx9tt4latt82v1x4sxctlc181q4yv','.eJxVjDsOwjAQBe_iGlls1jgOJT1nsPbj4ACypTipEHeHSCmgfTPzXibSuuS4tjTHSc3ZoDn8bkzySGUDeqdyq1ZqWeaJ7abYnTZ7rZqel939O8jU8rceTgziw8DoQx9YFJUkMfgjkIYkHbL0CswKQr5zOAIw8OA6cYgjmvcH_ts4eA:1tC3DA:gxdf5Neu4-HVTD52fw1gQs4cW06poKecdiolwuG1XDs','2024-11-16 01:46:36.584589'),('4xcf7o3phk9b651sjrp8nvwob4cryv5c','.eJxVjDsOwjAQBe_iGlls1jgOJT1nsPbj4ACypTipEHeHSCmgfTPzXibSuuS4tjTHSc3ZoDn8bkzySGUDeqdyq1ZqWeaJ7abYnTZ7rZqel939O8jU8rceTgziw8DoQx9YFJUkMfgjkIYkHbL0CswKQr5zOAIw8OA6cYgjmvcH_ts4eA:1sul6l:45pwXbAWcmtTNfs672ytzHSrKnxF_lrcR7nGkXpRY-Q','2024-09-29 09:00:31.255067'),('4xfyadl4au1d1wblyc5bu6cc9lp94561','.eJxVjEEOwiAQRe_C2hBKKTAu3fcMZJihUjWQlHZlvLtt0oVu33v_v0XAbc1ha2kJM4ur6Dpx-YUR6ZnKYfiB5V4l1bIuc5RHIk_b5Fg5vW5n-3eQseV9naJzPJAnB2C88awhGkvgdkLOEdieNaJlrXpGikOKkwajwaKFSSnx-QIMoTgq:1tHm9g:B-lFB3eO_jhvtmpcKGR1sIf_lXmpp28FpwA51ibcNGg','2024-12-01 20:46:40.773234'),('5d3m2frfmm3o546n0ucdmcc8f1rns4ce','.eJxVjEEOwiAQRe_C2hAKDIJL956BTJmpVA0kpV0Z726bdNFu_3vvf0XEZc5xaTzFkcRNgLgctx7Tm8sG6IXlWWWqZZ7GXm6K3GmTj0r8ue_u6SBjy2udiIMLbLRJV7QEGgbw2A0qOK3BeE_WMxGxsYpXDXWyAOAMd0Qelfj9Aea5N9w:1svGWz:fSIvRHkmi2MhbKfbvt9CdAIxYPYMcNsLDvDdaVx2taQ','2024-09-30 18:33:41.667544'),('5khz67pvpvjeab6eyv4eidke07pb7fht','.eJxVjMEOwiAQRP-FsyF0WQt49O43kC0LUjWQlPZk_Hdp0oPeJm_ezFt42tbstxYXP7O4iEGcftlE4RnLXvCDyr3KUMu6zJPcFXm0Td4qx9f1cP8OMrXc12eVRjuCYo3KOoOIoKNGE9IQ0LIi6MhAz84Z4zR1KYFmBwwUwInPF5zcNj0:1t0Vot:s3EE5owiMXBasQBvX4OhiW4s0ByNSbDPHC7vQKnuw8o','2024-10-15 05:53:51.909206'),('5nnz0d7nm4ycj9hfs1wl81yec7mx7xh9','.eJxVjMEOwiAQRP-FsyF0WQt49O43kC0LUjWQlPZk_Hdp0oPeJm_ezFt42tbstxYXP7O4iEGcftlE4RnLXvCDyr3KUMu6zJPcFXm0Td4qx9f1cP8OMrXc12eVRjuCYo3KOoOIoKNGE9IQ0LIi6MhAz84Z4zR1KYFmBwwUwInPF5zcNj0:1svMr8:_6ilqg2NsWT3owpj-NPpgtz8MHeBc6bb2FD2cRe8bYE','2024-10-01 01:18:54.576901'),('5s7xxmzhwpiysghkqmtp6g8me0m2iemc','.eJxVjMEOwiAQRP-FsyF0WQt49O43kC0LUjWQlPZk_Hdp0oPeJm_ezFt42tbstxYXP7O4iEGcftlE4RnLXvCDyr3KUMu6zJPcFXm0Td4qx9f1cP8OMrXc12eVRjuCYo3KOoOIoKNGE9IQ0LIi6MhAz84Z4zR1KYFmBwwUwInPF5zcNj0:1tHREE:Cf2up-LqqJ-2hJ1D1jnUFiRzoQeU7KDUuEt_n2Kezeg','2024-11-30 22:25:58.058513'),('5sxwtegk403jf8ar2nk8yff9f4vu7mhg','.eJxVjDsOwjAQBe_iGln2rn9Q0ucMltfr4ABypDipEHeHSCmgfTPzXiKmba1x62WJE4uLcOL0u1HKj9J2wPfUbrPMc1uXieSuyIN2OcxcntfD_TuoqddvjZ4SMDqj0DjPikBnB6izVuRtYYuWxjN6sD4Qgg6-IAULIxcw2Srx_gC7xzbU:1t1CKn:by7YTAhfL1eZ7lUCggHcClbXa4WWOnIJMqJhBuYahaI','2024-10-17 03:17:37.254562'),('6e6no6gu9uuuamlsd5o6fw1wozu100pu','.eJxVjMEOwiAQRP-FsyF0WQt49O43kC0LUjWQlPZk_Hdp0oPeJm_ezFt42tbstxYXP7O4iEGcftlE4RnLXvCDyr3KUMu6zJPcFXm0Td4qx9f1cP8OMrXc12eVRjuCYo3KOoOIoKNGE9IQ0LIi6MhAz84Z4zR1KYFmBwwUwInPF5zcNj0:1tC19F:eXdbXX9EhIJ0_3q1SopNM0ZPGW1HblGS5bn-LC3wXsc','2024-11-15 23:34:25.216941'),('7a14alpmx3k32y8mntdtp0imop1tg3jd','.eJxVjMEOwiAQRP-FsyF0WQt49O43kC0LUjWQlPZk_Hdp0oPeJm_ezFt42tbstxYXP7O4iEGcftlE4RnLXvCDyr3KUMu6zJPcFXm0Td4qx9f1cP8OMrXc12eVRjuCYo3KOoOIoKNGE9IQ0LIi6MhAz84Z4zR1KYFmBwwUwInPF5zcNj0:1suxEP:3zvL5LTz8bLmqP9AcdoRTqT9Fiip1Hnp69a-6izRZVU','2024-09-29 21:57:13.907553'),('7spbjwnkmv15rq0dphxreo4fh6lf1iq7','.eJxVjEEOwiAQRe_C2hAKDIJL956BTJmpVA0kpV0Z726bdNFu_3vvf0XEZc5xaTzFkcRNgLgctx7Tm8sG6IXlWWWqZZ7GXm6K3GmTj0r8ue_u6SBjy2udiIMLbLRJV7QEGgbw2A0qOK3BeE_WMxGxsYpXDXWyAOAMd0Qelfj9Aea5N9w:1t3hfy:FtRUbDF8AIYNph-43TJyOeE-dMBW4ZVAG5xpFmRc7k4','2024-10-24 01:09:50.803640'),('7w16oygwxrs4545gf1mwuofonvrscj18','.eJxVjEEOwiAQRe_C2hAKDIJL956BTJmpVA0kpV0Z726bdNFu_3vvf0XEZc5xaTzFkcRNgLgctx7Tm8sG6IXlWWWqZZ7GXm6K3GmTj0r8ue_u6SBjy2udiIMLbLRJV7QEGgbw2A0qOK3BeE_WMxGxsYpXDXWyAOAMd0Qelfj9Aea5N9w:1tC3RZ:zfxODzX0hHU-qRjLjR_nFmfGGMsdcbScnr4QcJRPYGE','2024-11-16 02:01:29.680913'),('7wzebckxxjeh1medfjdhh3jdb4hb1qc0','.eJxVjMEOwiAQRP-FsyF0WQt49O43kC0LUjWQlPZk_Hdp0oPeJm_ezFt42tbstxYXP7O4iEGcftlE4RnLXvCDyr3KUMu6zJPcFXm0Td4qx9f1cP8OMrXc12eVRjuCYo3KOoOIoKNGE9IQ0LIi6MhAz84Z4zR1KYFmBwwUwInPF5zcNj0:1tHRff:_d-8t5n0bNmGeI3bv2C88exHIp9wYf6Gxmg9xXxpziY','2024-11-30 22:54:19.403358'),('8c1il7jpk34jmp10j2a0vfjtkenpls8u','.eJxVjMEOwiAQRP-FsyF0WQt49O43kC0LUjWQlPZk_Hdp0oPeJm_ezFt42tbstxYXP7O4iEGcftlE4RnLXvCDyr3KUMu6zJPcFXm0Td4qx9f1cP8OMrXc12eVRjuCYo3KOoOIoKNGE9IQ0LIi6MhAz84Z4zR1KYFmBwwUwInPF5zcNj0:1tHRft:pN8dnqFzgBE6u_gdnMDlYGijsM46MJQL-oOGr0IiUx8','2024-11-30 22:54:33.429469'),('8mcu7hf6fqc0qw876c280b1ypbvbrrap','.eJxVjMsOwiAUBf-FtSGlUG5x6d5vIPcBUjU0Ke3K-O_apAvdnpk5LxVxW0vcWlriJOqsjFOn35GQH6nuRO5Yb7Pmua7LRHpX9EGbvs6SnpfD_Tso2Mq35oFSBkO9h9E7GygLcugYbTbQZWPFgCPwHhOCAIlzw9h7SZYkcGD1_gAe6jjQ:1tHmVI:b5zwa7MC50tx5IDhgFmRHXlPWLTCDDLFgOaXKOl_Uc4','2024-12-01 21:09:00.119078'),('8tste4lsv6ej81dteid4kf3zo2k9shfo','.eJxVjDsOwjAQBe_iGln2rr-U9JzB8meNA8iR4qRC3B0ipYD2zcx7sRC3tYVt0BKmws5MCnb6HVPMD-o7KffYbzPPc1-XKfFd4Qcd_DoXel4O9--gxdG-ddUJpY1VC4NSYCoSpQEHqIyl4iwQSk-qVtBCF2GiB_KQNSahPDjD3h_aQjas:1tHm8t:k7qPULR5T35JqPcz95M2baGEA_AeEypgezCB0xYp5rw','2024-12-01 20:45:51.590290'),('96zg14y70orvhcnvtc6b3ch2yjyqa9oz','.eJyrViotTi2Kz0xRsjLUUYpPLC3JiIeLKBkqoYglJSZnp-aBJFKyEvPS8_WS8_NKijKT9EBK9KCyxXq--SmpOU5QtSgGZCQWZwB1K9UCAMmtKhM:1sueYq:HeB3GyUrLOV-1hhD5Rm8K1DwX4TTHw-Zadrhmujtdg4','2024-09-29 02:01:04.726282'),('9stwg54i8y5vqum7bnrfj9di9ygtr206','.eJyrViotTi2Kz0xRsjLUUYpPLC3JiIeLKBkqoYglJSZnp-aBJFKyEvPS8_WS8_NKijKT9EBK9KCyxXq--SmpOU5QtSgGZCQWZwB1K9UCAMmtKhM:1suf2r:Iualo09omijq9jMwAPzn4aMpw6DfRcbgbtgmlRGxbG8','2024-09-29 02:32:05.969504'),('ab9gqczm54ttezc493huatrryvxnut8o','.eJxVjMEOwiAQRP-FsyF0WQt49O43kC0LUjWQlPZk_Hdp0oPeJm_ezFt42tbstxYXP7O4iEGcftlE4RnLXvCDyr3KUMu6zJPcFXm0Td4qx9f1cP8OMrXc12eVRjuCYo3KOoOIoKNGE9IQ0LIi6MhAz84Z4zR1KYFmBwwUwInPF5zcNj0:1t0idB:oh45lvnZAXB_l_gJVnHrPbiSEEZ8f-bJdcyFdntPQCs','2024-10-15 19:34:37.640831'),('abkixnnb1sha331hti5drf797yvi2jkh','.eJyrViotTi2Kz0xRsjLUUYpPLC3JiIeLKBkqoYglJSZnp-aBJFKyEvPS8_WS8_NKijKT9EBK9KCyxXq--SmpOU5QtSgGZCQWZwB1K9UCAMmtKhM:1sueWG:LdxQEE0MftTtG_QfiXvnB7k72VlIoiGgQks3x4i2Ygw','2024-09-29 01:58:24.883622'),('atn6ubv4u41re12gqokp3mtvkvnoup9w','.eJyrViotTi2Kz0xRsjLWUYpPLC3JiIeLKBkroYglJSZnp-aBJFKyEvPS8_WS8_NKijKT9EBK9KCyxXq--SmpOU5QtSgGZCQWZwB1K9UCAMs3Khc:1sujWt:4Rv6nfaQWeP671PZfjO4HCgjZXVyP9DEhZ4oFV7KamQ','2024-09-29 07:19:23.312524'),('b0guboozobfslpeyoyq3xo5qs225jt0s','eyJ1c2VyX2lkIjozfQ:1suMWJ:0G5Ml-D-ve4pqA6IwqEsV9uoi8hYX0ktn1OvqizgMnI','2024-09-28 06:45:15.575838'),('bcyidfnv5x9poy3n90fkeat0iih90ohs','.eJxVjMEOwiAQRP-FsyF0WQt49O43kC0LUjWQlPZk_Hdp0oPeJm_ezFt42tbstxYXP7O4iEGcftlE4RnLXvCDyr3KUMu6zJPcFXm0Td4qx9f1cP8OMrXc12eVRjuCYo3KOoOIoKNGE9IQ0LIi6MhAz84Z4zR1KYFmBwwUwInPF5zcNj0:1t2cuc:6lZSFRlMxoaHL0UId7w2vtoG2rFar3yrNj4HVtxUDj4','2024-10-21 01:52:30.267287'),('bie2ivd8yzgj3h7fewk0tu0zbmohnt3r','.eJyrViotTi2Kz0xRsjLUUYpPLC3JiIeLKBkqoYglJSZnp-aBJFKyEvPS8_WS8_NKijKT9EBK9KCyxXq--SmpOU5QtSgGZCQWZwB1K9UCAMmtKhM:1sueY2:jH1ykCbozAkM0FJLRLDWkFDWTDNj2tkziHusrDKJYJo','2024-09-29 02:00:14.924240'),('boghx4axoa2frdbec71rwhzz651h4fy5','.eJxVjDsOwjAQBe_iGlls1jgOJT1nsPbj4ACypTipEHeHSCmgfTPzXibSuuS4tjTHSc3ZoDn8bkzySGUDeqdyq1ZqWeaJ7abYnTZ7rZqel939O8jU8rceTgziw8DoQx9YFJUkMfgjkIYkHbL0CswKQr5zOAIw8OA6cYgjmvcH_ts4eA:1sukhg:8vN_hB0AyuoZq9bGdQjNo5-rE24zrsQHYZ0xeT14WbQ','2024-09-29 08:34:36.107979'),('byegzw772sv1rfjucn93p6qbygjl9apr','.eJxVjMEOwiAQRP-FsyF0WQt49O43kC0LUjWQlPZk_Hdp0oPeJm_ezFt42tbstxYXP7O4iEGcftlE4RnLXvCDyr3KUMu6zJPcFXm0Td4qx9f1cP8OMrXc12eVRjuCYo3KOoOIoKNGE9IQ0LIi6MhAz84Z4zR1KYFmBwwUwInPF5zcNj0:1t0inH:CU3dOJaNaBeqayZOvv3UPdSbsUsI0Z_7o62nF8BLdkw','2024-10-15 19:45:03.480507'),('cvfuuwlytujvkjb6sfpt0rttypycprj6','.eJxVjDsOwjAQBe_iGlls1jgOJT1nsPbj4ACypTipEHeHSCmgfTPzXibSuuS4tjTHSc3ZoDn8bkzySGUDeqdyq1ZqWeaJ7abYnTZ7rZqel939O8jU8rceTgziw8DoQx9YFJUkMfgjkIYkHbL0CswKQr5zOAIw8OA6cYgjmvcH_ts4eA:1sukxa:Vo3ht4sRgrYqlS5-Rj4ol6AYXGA5PA0_Pq4ISNMHj60','2024-09-29 08:51:02.937512'),('d1cloztph2h7ivoso9pkkpql4f98m59l','.eJxVjDsOwjAQBe_iGlls1jgOJT1nsPbj4ACypTipEHeHSCmgfTPzXibSuuS4tjTHSc3ZoDn8bkzySGUDeqdyq1ZqWeaJ7abYnTZ7rZqel939O8jU8rceTgziw8DoQx9YFJUkMfgjkIYkHbL0CswKQr5zOAIw8OA6cYgjmvcH_ts4eA:1sukHQ:2KMC0vJsT0OrUTbFJrMbQYOkhpNrSXhp2R7nryV1Mxo','2024-09-29 08:07:28.876321'),('e86g3fussmmcitpp98un3py86jju86xv','.eJxVjDsOwjAQBe_iGlls1jgOJT1nsPbj4ACypTipEHeHSCmgfTPzXibSuuS4tjTHSc3ZoDn8bkzySGUDeqdyq1ZqWeaJ7abYnTZ7rZqel939O8jU8rceTgziw8DoQx9YFJUkMfgjkIYkHbL0CswKQr5zOAIw8OA6cYgjmvcH_ts4eA:1tC2P8:kZdHzzvHXlpFIUOWqXvA0MfXOgLBGy7K010C_f1i57A','2024-11-16 00:54:54.181738'),('e8oq4cnlkndjeocccs5qooringw9quvy','.eJyrViotTi2Kz0xRsjLWUYpPLC3JiIeLKBkroYglJSZnp-aBJFKyEvPS8_WS8_NKijKT9EBK9KCyxXq--SmpOU5QtSgGZCQWZwB1K9UCAMs3Khc:1sujrg:CixgPlSC_zV-0H_DEFKD_NKh2gcYutzzbsoRmE94_uw','2024-09-29 07:40:52.359426'),('egrly1ohdanc1134c60sx98g1vh0yk4o','.eJyrViotTi2Kz0xRsjLUUYpPLC3JiIeLKBkqoYglJSZnp-aBJFKyEvPS8_WS8_NKijKT9EBK9KCyxXq--SmpOU5QtSgGZCQWZwB1K9UCAMmtKhM:1sueBW:mlW3CvCXBN2mPj0yUtUJdE3ZrV8V1WPjYo-_POApMSg','2024-09-29 01:36:58.569241'),('evv8u3t3skauizeo63pl95t6molrb022','.eJxVjMEOwiAQRP-FsyFQ2FI8eu83kF1YpGpoUtqT8d9tkx50jvPezFsE3NYStsZLmJK4Cm3E5bckjE-uB0kPrPdZxrmuy0TyUORJmxznxK_b6f4dFGxlX2PO0PVo9iB3EXqrlCJSSWfQ3kbrB4DsAA07Ghx7h4rZkNOZbNQoPl8BrDgm:1tHmQE:69xWTxNL53ZHCS6hw4snPtSMmr9rIshR3mv22Wnc0-w','2024-12-01 21:03:46.141388'),('eyuqno9wzxwneslnkxssjjh2azl1i41d','.eJxVjEEOwiAQRe_C2hAKDIJL956BTJmpVA0kpV0Z726bdNFu_3vvf0XEZc5xaTzFkcRNgLgctx7Tm8sG6IXlWWWqZZ7GXm6K3GmTj0r8ue_u6SBjy2udiIMLbLRJV7QEGgbw2A0qOK3BeE_WMxGxsYpXDXWyAOAMd0Qelfj9Aea5N9w:1tC2Qi:b0Km3MRV3Fl1ds7_9qWBQ-8LJhqUGJDVUBL7dZrsJ0k','2024-11-16 00:56:32.808294'),('ezo8r9g4klkhcfa2jvp3ygov0kbfz5vt','.eJxVjEEOwiAQRe_C2hAKDIJL956BTJmpVA0kpV0Z726bdNFu_3vvf0XEZc5xaTzFkcRNgLgctx7Tm8sG6IXlWWWqZZ7GXm6K3GmTj0r8ue_u6SBjy2udiIMLbLRJV7QEGgbw2A0qOK3BeE_WMxGxsYpXDXWyAOAMd0Qelfj9Aea5N9w:1t2uax:3sK-Yo5MFkQ82BVAPiylG7RiTG1nd8P2FSEMReO2GiY','2024-10-21 20:45:23.793872'),('f8qy8ai4bxr9m5kfrjd514i7a5ai0ngt','.eJxVjDsOwjAQBe_iGlls1jgOJT1nsPbj4ACypTipEHeHSCmgfTPzXibSuuS4tjTHSc3ZoDn8bkzySGUDeqdyq1ZqWeaJ7abYnTZ7rZqel939O8jU8rceTgziw8DoQx9YFJUkMfgjkIYkHbL0CswKQr5zOAIw8OA6cYgjmvcH_ts4eA:1t1CWr:UoPqhms1WWGTaWyxGzArSOa78am0OIwRKb_7VdCwysc','2024-10-17 03:30:05.602437'),('f8tybbzv35r2llp4bfsyrzkvg7z25j3d','.eJxVjMEOwiAQRP-FsyF0WQt49O43kC0LUjWQlPZk_Hdp0oPeJm_ezFt42tbstxYXP7O4iEGcftlE4RnLXvCDyr3KUMu6zJPcFXm0Td4qx9f1cP8OMrXc12eVRjuCYo3KOoOIoKNGE9IQ0LIi6MhAz84Z4zR1KYFmBwwUwInPF5zcNj0:1tHRkE:L-Cd2jPHzgF93n4iAj-i2kpUQnaMVIokmgks2i4Sxow','2024-11-30 22:59:02.242266'),('f9yul05yuje6bvkqyylepwd373rmvbsk','.eJxVjDsOwjAQBe_iGlls1jgOJT1nsPbj4ACypTipEHeHSCmgfTPzXibSuuS4tjTHSc3ZoDn8bkzySGUDeqdyq1ZqWeaJ7abYnTZ7rZqel939O8jU8rceTgziw8DoQx9YFJUkMfgjkIYkHbL0CswKQr5zOAIw8OA6cYgjmvcH_ts4eA:1tC2jx:K623P-oCldZYqq3okTNInyjcOB5Hx8llpYkLP_PTd1o','2024-11-16 01:16:25.652443'),('faucgzf22tq7h8rwhknle08yd97kjra9','.eJxVjDsOwjAQBe_iGln2rn9Q0ucMltfr4ABypDipEHeHSCmgfTPzXiKmba1x62WJE4uLcOL0u1HKj9J2wPfUbrPMc1uXieSuyIN2OcxcntfD_TuoqddvjZ4SMDqj0DjPikBnB6izVuRtYYuWxjN6sD4Qgg6-IAULIxcw2Srx_gC7xzbU:1t1CXE:8r4bRK131L1YKPvvSoINJEGh3y3XqMSUKyuBCjhzhFo','2024-10-17 03:30:28.909879'),('fqfn1mo72obe9mbc5yn3nhar5sv3ik8m','.eJxVjDsOgzAQRO_iOrK8-INJmZ4zWLv2EpNEtoShinL3gESRlDPvzbxFwG3NYWu8hDmJq_Di8tsRxieXA6QHlnuVsZZ1mUkeijxpk2NN_Lqd7t9Bxpb3te0oMoHyyiVwOPUAaTDRQUdW9Y73yOQNarCWojKscULrvWZNEQYjPl_fSDe7:1t3iLw:PuPy6gUfqE8UkQh0w4W8ARegVVN2hiKkMYgeHk6pDHg','2024-10-24 01:53:12.079865'),('frodoq5lbp8ohqurzswxrge8u69pcky4','.eJxVjEEOwiAQRe_C2pDpMBZw6b5nIAMMUjVtUtqV8e7apAvd_vfef6nA21rD1mQJY1YXRer0u0VOD5l2kO883Wad5mldxqh3RR-06WHO8rwe7t9B5Va_dfHGo6D1rsdM6QxgU3TclyxgWNA43xuALjEhE2BxYoxgIYJINnbq_QHNxjc2:1svGtA:l6g3hpmX7Llnprk2CVpmyVGGCnzNFvdY9k_rZZKimo4','2024-09-30 18:56:36.538690'),('fs8zapeg0c1t2bhvg60q0mo1pjmuj4b8','.eJxVjMEOwiAQRP-FsyF0WQt49O43kC0LUjWQlPZk_Hdp0oPeJm_ezFt42tbstxYXP7O4iEGcftlE4RnLXvCDyr3KUMu6zJPcFXm0Td4qx9f1cP8OMrXc12eVRjuCYo3KOoOIoKNGE9IQ0LIi6MhAz84Z4zR1KYFmBwwUwInPF5zcNj0:1suwfX:ETNaawG80mxgv0lJABinLEWVTZvqeylaLq9Cl0EW-VI','2024-09-29 21:21:11.245070'),('g4foxfibtiflfxbfvgba66wg5sow9qup','.eJxVjEEOwiAQRe_C2hAKDIJL956BTJmpVA0kpV0Z726bdNFu_3vvf0XEZc5xaTzFkcRNgLgctx7Tm8sG6IXlWWWqZZ7GXm6K3GmTj0r8ue_u6SBjy2udiIMLbLRJV7QEGgbw2A0qOK3BeE_WMxGxsYpXDXWyAOAMd0Qelfj9Aea5N9w:1t4hxc:6ihqkXI5gFwVzQI2_4zWxMor0xnfmt1HpAM-02PbOVY','2024-10-26 19:40:12.535482'),('g7bh6ue3phqw4jc6dyxmc2jfdnwzmzqa','.eJxVjMEOwiAQRP-FsyF0WQt49O43kC0LUjWQlPZk_Hdp0oPeJm_ezFt42tbstxYXP7O4iEGcftlE4RnLXvCDyr3KUMu6zJPcFXm0Td4qx9f1cP8OMrXc12eVRjuCYo3KOoOIoKNGE9IQ0LIi6MhAz84Z4zR1KYFmBwwUwInPF5zcNj0:1t0VJE:69vPCQd53zeL8cps4-ERhoo4xEX6Nr-vl59Bke3WFOw','2024-10-15 05:21:08.727714'),('gsntgvtnvgfgxh9snqrjnpikhxd075dm','.eJxVjLsOAiEQAP-F2hDweK2lvd9AdlmQUwPJPSrjvxuSK7SdmcxbRNy3Gvc1L3FmcREgTr-MMD1zG4If2O5dpt62ZSY5EnnYVd4659f1aP8GFdc6tmjUpMnp4s9JQ5ryBIptSD4ocoaBHbICVTQER1mztogeis0GLAGJzxfUSze4:1tGKgr:-x1w97Rpa14mAGTWk7qSqjh0PkTwLCY2PXs3VdRSy7M','2024-11-27 21:14:57.815271'),('gy7iegefpdnvng2ey0y52rerjogr6ndy','.eJxVjMEOwiAQRP-FsyF0WQt49O43kC0LUjWQlPZk_Hdp0oPeJm_ezFt42tbstxYXP7O4iEGcftlE4RnLXvCDyr3KUMu6zJPcFXm0Td4qx9f1cP8OMrXc12eVRjuCYo3KOoOIoKNGE9IQ0LIi6MhAz84Z4zR1KYFmBwwUwInPF5zcNj0:1t2xUn:gTSjYEyaYGHfgv2vKrsyre8WdofCNK5DchwUCYy73uo','2024-10-21 23:51:13.479606'),('hsbdjcmkvhraqqoj6pwi5oseiqm36u18','.eJyrViotTi2Kz0xRsjLUUYpPLC3JiIeLKBkqoYglJSZnp-aBJFKyEvPS8_WS8_NKijKT9EBK9KCyxXq--SmpOU5QtSgGZCQWZwB1K9UCAMmtKhM:1suw8k:bKRDnlhTE_5Qs7LdxnXMtuayiPFbQQVNbPTN_7gsNMs','2024-09-29 20:47:18.406906'),('hvyrvxdxpom3m3gbbr6yfzovx64fqpgx','.eJyrViotTi2Kz0xRsjLWUYpPLC3JiIeLKBkroYglJSZnp-aBJFKyEvPS8_WS8_NKijKT9EBK9KCyxXq--SmpOU5QtSgGZCQWZwB1K9UCAMs3Khc:1sujyX:1tl_baxIKeYG7vPn4ZNdYyJgON_G7N6pFe871iO_ruM','2024-09-29 07:47:57.279577'),('i1zslxvrlllsxc5sntvq0iqgb21piq8o','.eJxVjDsOwjAQBe_iGlls1jgOJT1nsPbj4ACypTipEHeHSCmgfTPzXibSuuS4tjTHSc3ZoDn8bkzySGUDeqdyq1ZqWeaJ7abYnTZ7rZqel939O8jU8rceTgziw8DoQx9YFJUkMfgjkIYkHbL0CswKQr5zOAIw8OA6cYgjmvcH_ts4eA:1sukCI:xtwuTYNUfTzC78n1Gq-lFOOw9OiGozW8Hi3NFDQy-k0','2024-09-29 08:02:10.430164'),('ib1dd2ftgpz2kinpggv1v562ahw4u9wm','.eJyrViotTi2Kz0xRsjLWUYpPLC3JiIeLKBkroYglJSZnp-aBJFKyEvPS8_WS8_NKijKT9EBK9KCyxXq--SmpOU5QtSgGZCQWZwB1K9UCAMs3Khc:1sujvy:ZZqLRnMdM0ICre3oF2MyZOGzlv9CkIu5JxerbINk_AY','2024-09-29 07:45:18.826522'),('j8prz6pod8t330p5pk5jd77t9lcdcymk','.eJxVjDsOwjAQBe_iGlls1jgOJT1nsPbj4ACypTipEHeHSCmgfTPzXibSuuS4tjTHSc3ZoDn8bkzySGUDeqdyq1ZqWeaJ7abYnTZ7rZqel939O8jU8rceTgziw8DoQx9YFJUkMfgjkIYkHbL0CswKQr5zOAIw8OA6cYgjmvcH_ts4eA:1sukoC:r-_pk4K2Otd0uxy6l20OEWMeHZgoqwFanGjtETfOqqc','2024-09-29 08:41:20.877050'),('jion8lx8blmqxpx99uv2jy0la3n8mz6w','.eJxVjMEOwiAQRP-FsyF0WQt49O43kC0LUjWQlPZk_Hdp0oPeJm_ezFt42tbstxYXP7O4iEGcftlE4RnLXvCDyr3KUMu6zJPcFXm0Td4qx9f1cP8OMrXc12eVRjuCYo3KOoOIoKNGE9IQ0LIi6MhAz84Z4zR1KYFmBwwUwInPF5zcNj0:1t0imJ:qSHBtU6P-u5BYjVZU-XDoA_PPBCcpEjMfc9QDOHzpAI','2024-10-15 19:44:03.700441'),('jnab2owhq9mgnkr878yevn2k7ax5flox','.eJxVjMEOwiAQRP-FsyF0WQt49O43kC0LUjWQlPZk_Hdp0oPeJm_ezFt42tbstxYXP7O4iEGcftlE4RnLXvCDyr3KUMu6zJPcFXm0Td4qx9f1cP8OMrXc12eVRjuCYo3KOoOIoKNGE9IQ0LIi6MhAz84Z4zR1KYFmBwwUwInPF5zcNj0:1tHtxw:d68FFNrvD5RLtMaUw2WIKkmtj3rCyQ_xTxbwQ5OVWmI','2024-12-02 05:07:04.369611'),('jqlw3sjaner98bu2p54x70ydvu89s0ea','.eJxVjDsOwjAQBe_iGlls1jgOJT1nsPbj4ACypTipEHeHSCmgfTPzXibSuuS4tjTHSc3ZoDn8bkzySGUDeqdyq1ZqWeaJ7abYnTZ7rZqel939O8jU8rceTgziw8DoQx9YFJUkMfgjkIYkHbL0CswKQr5zOAIw8OA6cYgjmvcH_ts4eA:1sukhK:TmkWYKASyI5yq5Atn4JpuoX5iPv4gG4iwDnnMW7UYzQ','2024-09-29 08:34:14.400923'),('k3r56qmybsrmfy3oqoiemne1ipfpyc2o','.eJxVjMEOwiAQRP-FsyF0WQt49O43kC0LUjWQlPZk_Hdp0oPeJm_ezFt42tbstxYXP7O4iEGcftlE4RnLXvCDyr3KUMu6zJPcFXm0Td4qx9f1cP8OMrXc12eVRjuCYo3KOoOIoKNGE9IQ0LIi6MhAz84Z4zR1KYFmBwwUwInPF5zcNj0:1t2csw:pJqWSnX9ukBd4X3JO9VllVNfhWlhba5758v4yAwitv0','2024-10-21 01:50:46.098476'),('lx9lkah3xqxph4rhccbkw3kg6cr9xno0','.eJxVjM0OwiAQhN-FsyHysxQ8evcZCOxupWogKe3J-O62SQ96nPm-mbeIaV1KXDvPcSJxEUqL02-ZEz657oQeqd6bxFaXecpyV-RBu7w14tf1cP8OSuplWwfIbsyDMgocWZt4C0CagQGdtwFd8IZIcfCJ0GqHYAbSkO0ZRqWd-HwBC2036Q:1tHmE7:G0kSu9QadUufwtv3eTBRZcMIAsZzNGKBL1EFZX5uOCY','2024-12-01 20:51:15.822516'),('n0efqhdzq0kh8r7dpg6m9x4dpb02ipz5','.eJyrViotTi2Kz0xRsjLWUYpPLC3JiIeLKBkroYglJSZnp-aBJFKyEvPS8_WS8_NKijKT9EBK9KCyxXq--SmpOU5QtSgGZCQWZwB1K9UCAMs3Khc:1sujJT:tWmZqQteXwc600oRwynAZ5WjY-TJxD50XCFHAxx2Wfc','2024-09-29 07:05:31.690639'),('nz1mitewotdaonvmozydk3lr19eqj1wn','.eJxVjEEOwiAQRe_C2hAKDIJL956BTJmpVA0kpV0Z726bdNFu_3vvf0XEZc5xaTzFkcRNgLgctx7Tm8sG6IXlWWWqZZ7GXm6K3GmTj0r8ue_u6SBjy2udiIMLbLRJV7QEGgbw2A0qOK3BeE_WMxGxsYpXDXWyAOAMd0Qelfj9Aea5N9w:1tByQC:83xPr53qjnABIyKEDc2qvrbZ_cQjqQECchFrYhmepNA','2024-11-15 20:39:44.056165'),('ocd557os0i1xn90grwwar9kz7cxdl1qy','.eJxVjDsOwjAQBe_iGlls1jgOJT1nsPbj4ACypTipEHeHSCmgfTPzXibSuuS4tjTHSc3ZoDn8bkzySGUDeqdyq1ZqWeaJ7abYnTZ7rZqel939O8jU8rceTgziw8DoQx9YFJUkMfgjkIYkHbL0CswKQr5zOAIw8OA6cYgjmvcH_ts4eA:1suklH:7yvs_X6gTuH2D7p6bQ6C6QJgLb8Gh9XN4CoMc9dL7xU','2024-09-29 08:38:19.641487'),('oglntokpxfbyly8h1oimb9j9mmkq6hxb','.eJxVjDsOwjAQBe_iGlls1jgOJT1nsPbj4ACypTipEHeHSCmgfTPzXibSuuS4tjTHSc3ZoDn8bkzySGUDeqdyq1ZqWeaJ7abYnTZ7rZqel939O8jU8rceTgziw8DoQx9YFJUkMfgjkIYkHbL0CswKQr5zOAIw8OA6cYgjmvcH_ts4eA:1sus5t:jQPAe9LUDJ5mMwAl1QBbJpc5233mhqmj552XAXU2wqM','2024-09-29 16:28:05.621144'),('p9vpqk80zdccvh6ulcld6wcs49tl5xmv','.eJxVjMsOgjAQRf-la9MwLbTUpXu_gQzzsKgpCYWV8d-VhIVu7znnvsyA25qHrcoyTGzOBjpz-h1HpIeUnfAdy222NJd1mUa7K_ag1V5nluflcP8OMtb8rYU61ACeAgSNrSg4D0zc9DH0o3LCFjgxqo8aHXBDnYB3GlQ4eUnm_QEiIzjU:1tHmaf:luVEZt-wRbLD5Bl5g8FNHm9JEw1WbMR1f5ytNaJBphU','2024-12-01 21:14:33.692221'),('pad2js3rrh6posyvstubd7bwo4e2526n','.eJxVjEEOwiAQRe_C2pDpMBZw6b5nIAMMUjVtUtqV8e7apAvd_vfef6nA21rD1mQJY1YXRer0u0VOD5l2kO883Wad5mldxqh3RR-06WHO8rwe7t9B5Va_dfHGo6D1rsdM6QxgU3TclyxgWNA43xuALjEhE2BxYoxgIYJINnbq_QHNxjc2:1svGU2:L61ePEQZYcQ8xwHH91auSvZwxXbeOGuTSezeKN9-2sw','2024-09-30 18:30:38.316685'),('pbwulxdsyc8y20bxgm13cv63v4z2tsei','.eJxVjEEOwiAQRe_C2hAGKBNcuvcMZBhAqgaS0q6Md9cmXej2v_f-SwTa1hq2kZcwJ3EWKE6_WyR-5LaDdKd265J7W5c5yl2RBx3y2lN-Xg7376DSqN-atbfeEqMqiACowZbJYnGRyTvwaDR7g4ZdLMVNAGSjApVJF2Ujonh_AMQANxU:1t2exC:1Otn4YKw-QjeOZNfNFUVSZh3EDiTDXp21A8tof87TZw','2024-10-21 04:03:18.442754'),('phojx2b2ttofkdi9xza0cw55oifzti31','.eJxVjDsOwjAQBe_iGln2rn9Q0ucMltfr4ABypDipEHeHSCmgfTPzXiKmba1x62WJE4uLcOL0u1HKj9J2wPfUbrPMc1uXieSuyIN2OcxcntfD_TuoqddvjZ4SMDqj0DjPikBnB6izVuRtYYuWxjN6sD4Qgg6-IAULIxcw2Srx_gC7xzbU:1t1CJf:WXM_uIAIFn5IITXOfAnrpiTte3EC-n7cH3-jhjsdAkw','2024-10-17 03:16:27.983380'),('rclaz7g2w7alh4z72ztgvb9rw859hp37','.eJyrViotTi2Kz0xRsjLUUYpPLC3JiIeLKBkqoYglJSZnp-aBJFKyEvPS8_WS8_NKijKT9EBK9KCyxXq--SmpOU5QtSgGZCQWZwB1K9UCAMmtKhM:1suf2f:YiARdEstYCJGXXNNovtAS-BeVpGnaUQA7TtRx4HwR0I','2024-09-29 02:31:53.179700'),('rwn51dqg94o3o5wft3jdcxq36uft743g','.eJxVjDsOwjAQBe_iGln2rr-U9JzB8meNA8iR4qRC3B0ipYD2zcx7sRC3tYVt0BKmws5MCnb6HVPMD-o7KffYbzPPc1-XKfFd4Qcd_DoXel4O9--gxdG-ddUJpY1VC4NSYCoSpQEHqIyl4iwQSk-qVtBCF2GiB_KQNSahPDjD3h_aQjas:1tHmA4:UCuU97sz25h3pAFtnDHGOTWqO_V6707sQZNrpWgF2oA','2024-12-01 20:47:04.583825'),('rz73jzvfunwfvutw0x3ksjych2j4de97','.eJxVjDsOwjAQBe_iGlls1jgOJT1nsPbj4ACypTipEHeHSCmgfTPzXibSuuS4tjTHSc3ZoDn8bkzySGUDeqdyq1ZqWeaJ7abYnTZ7rZqel939O8jU8rceTgziw8DoQx9YFJUkMfgjkIYkHbL0CswKQr5zOAIw8OA6cYgjmvcH_ts4eA:1suk9L:B-YTWGg50giWZFfZJPGRmdGhuMjiltuPVQXVyKmvwLc','2024-09-29 07:59:07.779502'),('sdrxy3vg3s26towoh738r64o2dlfdcjf','.eJxVjMEOwiAQRP-FsyF0WQt49O43kC0LUjWQlPZk_Hdp0oPeJm_ezFt42tbstxYXP7O4iEGcftlE4RnLXvCDyr3KUMu6zJPcFXm0Td4qx9f1cP8OMrXc12eVRjuCYo3KOoOIoKNGE9IQ0LIi6MhAz84Z4zR1KYFmBwwUwInPF5zcNj0:1t0jbM:QeNV2wGKgQWwjFGNHXR5LDOeQn-ifwj0Kb6NhspJUpM','2024-10-15 20:36:48.174988'),('t27j6qqgvj6v9htd4z660lqa010utpbd','.eJxVjDsOwjAQBe_iGlls1jgOJT1nsPbj4ACypTipEHeHSCmgfTPzXibSuuS4tjTHSc3ZoDn8bkzySGUDeqdyq1ZqWeaJ7abYnTZ7rZqel939O8jU8rceTgziw8DoQx9YFJUkMfgjkIYkHbL0CswKQr5zOAIw8OA6cYgjmvcH_ts4eA:1tC3PB:L2MSCayyVGJMJnyswIuLykOZBNBnver9wwP3FfPVUMI','2024-11-16 01:59:01.760890'),('tapxnjt2lvc5fryhwoifcef8q1qg63g7','.eJxVjDsOwjAQBe_iGlls1jgOJT1nsPbj4ACypTipEHeHSCmgfTPzXibSuuS4tjTHSc3ZoDn8bkzySGUDeqdyq1ZqWeaJ7abYnTZ7rZqel939O8jU8rceTgziw8DoQx9YFJUkMfgjkIYkHbL0CswKQr5zOAIw8OA6cYgjmvcH_ts4eA:1t1CJD:vAzB-7wzWvvEa--zahJHF06PX3QwHP_1yxY1AQNVIsk','2024-10-17 03:15:59.972698'),('tm257672gz0ztccbu4it3bnqxsgippsb','.eJxVjEEOwiAQRe_C2hAKDIJL956BTJmpVA0kpV0Z726bdNFu_3vvf0XEZc5xaTzFkcRNgLgctx7Tm8sG6IXlWWWqZZ7GXm6K3GmTj0r8ue_u6SBjy2udiIMLbLRJV7QEGgbw2A0qOK3BeE_WMxGxsYpXDXWyAOAMd0Qelfj9Aea5N9w:1tC3bO:DU_gyUECS5LRqvk7MnC1NCJg7FF1-xPF_1e4GLRaczs','2024-11-16 02:11:38.506304'),('uc0wl0rywjrampzw7p4s9bis45gmaepk','.eJxVjDsOwjAQBe_iGlls1jgOJT1nsPbj4ACypTipEHeHSCmgfTPzXibSuuS4tjTHSc3ZoDn8bkzySGUDeqdyq1ZqWeaJ7abYnTZ7rZqel939O8jU8rceTgziw8DoQx9YFJUkMfgjkIYkHbL0CswKQr5zOAIw8OA6cYgjmvcH_ts4eA:1sukW0:9-wXoL3Fg2itztTsLSDUWq7Q85t5Usy8mqJoNVPchxU','2024-09-29 08:22:32.533537'),('ukgaa0tqiu8kpa2k9ojd3iypdoqsml8z','.eJxVjDsOwjAQBe_iGln2rn9Q0ucMltfr4ABypDipEHeHSCmgfTPzXiKmba1x62WJE4uLcOL0u1HKj9J2wPfUbrPMc1uXieSuyIN2OcxcntfD_TuoqddvjZ4SMDqj0DjPikBnB6izVuRtYYuWxjN6sD4Qgg6-IAULIxcw2Srx_gC7xzbU:1t1CFx:7IiOMu6-VTWct-XqyWHOBDCinh4TZGdjKRFgwQ_jeP8','2024-10-17 03:12:37.609139'),('utzevfqcwmvhj0jxioh02ab3kg7enlnh','.eJyrViotTi2Kz0xRsjLWUYpPLC3JiIeLKBkroYglJSZnp-aBJFKyEvPS8_WS8_NKijKT9EBK9KCyxXq--SmpOU5QtSgGZCQWZwB1K9UCAMs3Khc:1sujRL:DOclAOWtmIljsfj5QMcsF8zpI5szPwcrXHsxmucbt94','2024-09-29 07:13:39.020413'),('v2epry602zmcxet8cwnqy6uj99m2owta','.eJxVjEEOwiAQRe_C2hAGKBNcuvcMZBhAqgaS0q6Md9cmXej2v_f-SwTa1hq2kZcwJ3EWKE6_WyR-5LaDdKd265J7W5c5yl2RBx3y2lN-Xg7376DSqN-atbfeEqMqiACowZbJYnGRyTvwaDR7g4ZdLMVNAGSjApVJF2Ujonh_AMQANxU:1tByPC:Q8rD7boaTcph4sRP7fwjKnPUVHneHBBz1_krcqdqAWk','2024-11-15 20:38:42.907762'),('vrb3d7k9wsgbyfyflwtuod0bsf7sg8ay','.eJxVjDsOwjAQBe_iGlls1jgOJT1nsPbj4ACypTipEHeHSCmgfTPzXibSuuS4tjTHSc3ZoDn8bkzySGUDeqdyq1ZqWeaJ7abYnTZ7rZqel939O8jU8rceTgziw8DoQx9YFJUkMfgjkIYkHbL0CswKQr5zOAIw8OA6cYgjmvcH_ts4eA:1sul5e:DjOdPTvwJzVwBeXUSLRaaO6dPaCCrGmcvZsBQXVVI-8','2024-09-29 08:59:22.763052'),('wi5zd9d0xyd9z3l8uwipq4msgca2ync6','.eJxVjMEOwiAQRP-FsyF0WQt49O43kC0LUjWQlPZk_Hdp0oPeJm_ezFt42tbstxYXP7O4iEGcftlE4RnLXvCDyr3KUMu6zJPcFXm0Td4qx9f1cP8OMrXc12eVRjuCYo3KOoOIoKNGE9IQ0LIi6MhAz84Z4zR1KYFmBwwUwInPF5zcNj0:1tHRYy:UnOXS6al9VE3iohp33WGbWCdWEFl8nNRT_6sMJyujfU','2024-11-30 22:47:24.379875'),('x5oco274uow4b8vyaamw9is64s4oy1dc','.eJxVjDsOwjAQBe_iGlls1jgOJT1nsPbj4ACypTipEHeHSCmgfTPzXibSuuS4tjTHSc3ZoDn8bkzySGUDeqdyq1ZqWeaJ7abYnTZ7rZqel939O8jU8rceTgziw8DoQx9YFJUkMfgjkIYkHbL0CswKQr5zOAIw8OA6cYgjmvcH_ts4eA:1tC3a5:sme954twnW3tq6cQVuo7aQG4OeF3PEq_VilX8KJrzzQ','2024-11-16 02:10:17.438590'),('xqkpmai7k6hjr48fqb37nczga4cn276k','.eJxVjMEOwiAQRP-FsyF0WQt49O43kC0LUjWQlPZk_Hdp0oPeJm_ezFt42tbstxYXP7O4iEGcftlE4RnLXvCDyr3KUMu6zJPcFXm0Td4qx9f1cP8OMrXc12eVRjuCYo3KOoOIoKNGE9IQ0LIi6MhAz84Z4zR1KYFmBwwUwInPF5zcNj0:1t3ht5:gxdroySwjg8uJOHg1PGU1bG1_NQqSGJUrRS-5TqLybc','2024-10-24 01:23:23.754011'),('y1lmocsxjxxk06988rdx4f9dtlz08ud8','.eJyrViotTi2Kz0xRsjLWUYpPLC3JiIeLKBkroYglJSZnp-aBJFKyEvPS8_WS8_NKijKT9EBK9KCyxXq--SmpOU5QtSgGZCQWZwB1K9UCAMs3Khc:1suMZZ:aEPrJCf3JumIIyRnfLPhOoYIHvQFETmOA5261w6rq-M','2024-09-28 06:48:37.510874'),('y5vmj9wjfcqvivjze8400s5neeyphg08','.eJxVjDsOwjAQBe_iGlls1jgOJT1nsPbj4ACypTipEHeHSCmgfTPzXibSuuS4tjTHSc3ZoDn8bkzySGUDeqdyq1ZqWeaJ7abYnTZ7rZqel939O8jU8rceTgziw8DoQx9YFJUkMfgjkIYkHbL0CswKQr5zOAIw8OA6cYgjmvcH_ts4eA:1sul0G:cBdYWGNrXifeRH4RZ5YeDB1fki0GK1Exiu6jvwfbiX4','2024-09-29 08:53:48.152867'),('y7ucfuub8kj8kb6e8y9ac8ssjwbsryqx','.eJxVjMEOwiAQRP-FsyF0WQt49O43kC0LUjWQlPZk_Hdp0oPeJm_ezFt42tbstxYXP7O4iEGcftlE4RnLXvCDyr3KUMu6zJPcFXm0Td4qx9f1cP8OMrXc12eVRjuCYo3KOoOIoKNGE9IQ0LIi6MhAz84Z4zR1KYFmBwwUwInPF5zcNj0:1t2xjs:Q5cTksQ7TyHE6RaVr8Ejzs1C6cMFgTd25XI7LK4fjZM','2024-10-22 00:06:48.656652'),('y8zqh86exd5wtm38kbuo3b1855c3d3mc','.eJxVjMEOwiAQRP-FsyF0WQt49O43kC0LUjWQlPZk_Hdp0oPeJm_ezFt42tbstxYXP7O4iEGcftlE4RnLXvCDyr3KUMu6zJPcFXm0Td4qx9f1cP8OMrXc12eVRjuCYo3KOoOIoKNGE9IQ0LIi6MhAz84Z4zR1KYFmBwwUwInPF5zcNj0:1t0iaD:cJVkbNjRZt4wnjmo8_YvH2dVMlX36nvZTXhpUGsF3Nw','2024-10-15 19:31:33.460245'),('ybr3u49m1r93eaw1ti0uepawm0xuqclw','.eJxVjEEOwiAQRe_C2hAKDIJL956BTJmpVA0kpV0Z726bdNFu_3vvf0XEZc5xaTzFkcRNgLgctx7Tm8sG6IXlWWWqZZ7GXm6K3GmTj0r8ue_u6SBjy2udiIMLbLRJV7QEGgbw2A0qOK3BeE_WMxGxsYpXDXWyAOAMd0Qelfj9Aea5N9w:1tC3El:juC9uWKjnxaO-wG0DDWqlId-xfHp6rhPnGD8xQhA-pc','2024-11-16 01:48:15.491701'),('ysxgw6tnkiubk0em7k3x3p0c4x6q3kbp','.eJxVjDsOwjAQBe_iGlls1jgOJT1nsPbj4ACypTipEHeHSCmgfTPzXibSuuS4tjTHSc3ZoDn8bkzySGUDeqdyq1ZqWeaJ7abYnTZ7rZqel939O8jU8rceTgziw8DoQx9YFJUkMfgjkIYkHbL0CswKQr5zOAIw8OA6cYgjmvcH_ts4eA:1tC26y:c8p8zK86lDRil0b5JAL-VNXEjP2NaSqnS_0gAjj_vd0','2024-11-16 00:36:08.188596'),('yx0md7ozue4e7pbwimaopbn0rjddfn97','.eJxVjDsOwjAQBe_iGlls1jgOJT1nsPbj4ACypTipEHeHSCmgfTPzXibSuuS4tjTHSc3ZoDn8bkzySGUDeqdyq1ZqWeaJ7abYnTZ7rZqel939O8jU8rceTgziw8DoQx9YFJUkMfgjkIYkHbL0CswKQr5zOAIw8OA6cYgjmvcH_ts4eA:1tC27r:ofxnD0V2AVIus9erCWjRJ_9o5QyfNZzqh_Of330ZwZU','2024-11-16 00:37:03.960742'),('zc78xl8gptwnn8q4l83y27nqkznhivub','.eJxVjMEOwiAQRP-FsyF0WQt49O43kC0LUjWQlPZk_Hdp0oPeJm_ezFt42tbstxYXP7O4iEGcftlE4RnLXvCDyr3KUMu6zJPcFXm0Td4qx9f1cP8OMrXc12eVRjuCYo3KOoOIoKNGE9IQ0LIi6MhAz84Z4zR1KYFmBwwUwInPF5zcNj0:1tHRcD:8yvgcvMJ_SXY5ShI5g-cSntpKUagnZL5bLMjngkVw9U','2024-11-30 22:50:45.403684'),('zhdihoqjrz1khk7o6zu9pq9n8n6kwg2h','.eJxVjMEOwiAQRP-FsyF0WQt49O43kC0LUjWQlPZk_Hdp0oPeJm_ezFt42tbstxYXP7O4iEGcftlE4RnLXvCDyr3KUMu6zJPcFXm0Td4qx9f1cP8OMrXc12eVRjuCYo3KOoOIoKNGE9IQ0LIi6MhAz84Z4zR1KYFmBwwUwInPF5zcNj0:1tHUiM:yvxdlUxBZuaJwxcu8oJXI_zAMEZldlW-m2IsZU9kFa0','2024-12-01 02:09:18.872131'),('ztpyhvsfadt6mh3gthr4pljgbcecirn0','.eJxVjEEOwiAQRe_C2hAKDIJL956BTJmpVA0kpV0Z726bdNFu_3vvf0XEZc5xaTzFkcRNgLgctx7Tm8sG6IXlWWWqZZ7GXm6K3GmTj0r8ue_u6SBjy2udiIMLbLRJV7QEGgbw2A0qOK3BeE_WMxGxsYpXDXWyAOAMd0Qelfj9Aea5N9w:1tC2mU:sVI8sDGbuj69XyH_OPdVpAqLrl7DVUaOfUnPc20CHic','2024-11-16 01:19:02.026253');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `species`
--

DROP TABLE IF EXISTS `species`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `species` (
  `taxonid` int NOT NULL,
  `kingdom_name` varchar(100) NOT NULL,
  `phylum_name` varchar(100) NOT NULL,
  `class_name` varchar(100) NOT NULL,
  `order_name` varchar(100) NOT NULL,
  `family_name` varchar(100) NOT NULL,
  `genus_name` varchar(100) NOT NULL,
  `scientific_name` varchar(255) NOT NULL,
  `taxonomic_authority` varchar(255) NOT NULL,
  `infra_rank` varchar(100) DEFAULT NULL,
  `infra_name` varchar(100) DEFAULT NULL,
  `population` text,
  `category` varchar(50) NOT NULL,
  `main_common_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`taxonid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `species`
--

LOCK TABLES `species` WRITE;
/*!40000 ALTER TABLE `species` DISABLE KEYS */;
/*!40000 ALTER TABLE `species` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-02 11:57:22
