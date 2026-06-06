/* BETWEEN */

-- Funciona para buscar dentro de un rango determiado de valores.

SELECT * FROM Products WHERE Price BETWEEN 10 AND 20;

-- Funciona para no buscar dentro de un rango determiado de valores.

SELECT * FROM Products WHERE Price NOT BETWEEN 10 AND 20;