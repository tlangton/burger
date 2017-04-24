CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE `burgers_db`.`burgers` (
`id` INT NOT NULL AUTO_INCREMENT,
`burger_name` VARCHAR(255) NULL,
`devoured` INT NULL,
`date` DATETIME NULL,
PRIMARY KEY (`id`));
