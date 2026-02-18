/* SELECT */

-- Selecciona una tabla.

SELECT CustomerName, city FROM Customers

SELECT * FROM Customers



/* SELECT DISTINCT */

-- ELimina duplicados.

SELECT DISTINCT Country FROM Customers



/* SELECT INTO */

-- Copia datos de una tabla a una nueva tabla.

SELECT * INTO newtable FROM oldtable



/* INSERT INTO SELECT */

-- Funciona como un INSERT INTO, pero copia datos de una tabla y los inserta en otra tabla.

INSERT INTO table2 SELECT * FROM table1;