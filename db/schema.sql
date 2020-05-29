-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS burgers_db;

--Create the `burgers_db`--
CREATE DATABASE `burgers_db`;

--Switch to or use the `burgers_db`.--
USE  `burgers_db`;

--Create a `burgers` table with these fields:
CREATE TABLE burgers (
    id int AUTO_INCREMENT NOT NULL,
    burger_name VARCAR (100),
    devoured BOOLEAN default false,
    PRIMARY KEY (id)
);
