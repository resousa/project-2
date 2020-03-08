CREATE DATABASE IF NOT EXISTS log_db;
USE log_db;
DROP TABLE IF EXISTS users;
CREATE TABLE users ( 
	id int AUTO_INCREMENT,
	username varchar(20),
	fullname varchar(20),
	password varchar(128),
	PRIMARY KEY (id)
);
