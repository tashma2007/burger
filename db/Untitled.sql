DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id int(11) NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT FALSE,
	PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured)
		VALUES('Hamburger', FALSE);
INSERT INTO burgers (burger_name, devoured)
		VALUES('Cheese Burger', FALSE);
INSERT INTO burgers (burger_name, devoured)
		VALUES('Bacon Double Cheese Burger', TRUE);