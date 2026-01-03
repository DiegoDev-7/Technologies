/* SELECT TOP */

-- Selecciona los primeros registros de una tabla.

SELECT TOP 3 * FROM Customers;

SELECT TOP 3 * FROM Customers WHERE Country="Germany";


/* Alternative */

-- LIMIT especifica un limite de 10 columnas.

SELECT * FROM Customers WHERE Country='Germany' LIMIT 10;