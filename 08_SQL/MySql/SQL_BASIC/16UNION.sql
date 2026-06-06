/* UNION */

-- Funciona para combinar los resultados de dos o más consultas SELECT en un solo conjunto de resultados.

SELECT City FROM Customers 
UNION
SELECT City FROM Suppliers ORDER BY City;



/* UNION ALL */

-- Funciona de manera similar a UNION, pero incluye todos los registros, incluyendo los duplicados.

SELECT City FROM Customers
UNION ALL
SELECT City FROM Suppliers ORDER BY City;


/* UNION with WHERE */

SELECT City FROM Customers 
WHERE Country = 'USA'
UNION
SELECT City FROM Suppliers 
WHERE Country = 'USA' ORDER BY City;