/* CREATE DATABASE */

-- Permite crear una base de datos nueva.

CREATE DATABASE databasename;



/* CREATE TABLE */

-- Permite crear una tabla nueva dentro de una base de datos.

CREATE TABLE table_name (
    ID int,
    lastname varchar(255),
    age int,
    address varchar(255)
    PRIMARY KEY (ID)
    FOREIGN KEY (ID) REFERENCES other_table(ID)
    CONSTRAINT chk_age CHECK (age >= 18 AND City="Madrid"),
);