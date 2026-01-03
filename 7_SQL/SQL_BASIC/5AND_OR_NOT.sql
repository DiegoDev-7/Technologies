/* AND */

-- Permite utilizar mas de una condicion mostrando el registro si todas las condiciones son VERDADERAS

SELECT * FROM Customers WHERE Country="Spain" AND CustomerName LIKE "G%";

SELECT * FROM Customers WHERE Country="Brazil" AND City = "Rio de Janeiro" AND CUstomerID > 50; 



/* OR */

-- Selecciona todas las filas que contentgan varias condiciones mostrando asi hasta mas de 3 resultados.

SELECT * FROM Customers WHERE Country = "Germany" OR Country = "Spain" OR Country = "Canada";



/* NOT */

-- Filtra tablas que no tengan cierto valor o condicion

SELECT * FROM Customers WHERE NOT Country = "Spain";

SELECT * FROM Customers WHERE CustomerName NOT LIKE "A%";