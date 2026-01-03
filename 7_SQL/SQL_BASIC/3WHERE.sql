/* WHERE */

--Selecciona todos los customers de Colombia.

SELECT * FROM Customers WHERE Country='Colombia';

SELECT * FROM Customers WHERE Country=1;

SELECT * FROM Customers WHERE Country > 80;



/* WHERE EXIST */

-- Funciona para verificar si existe al menos una fila que cumple con una condición específica.

SELECT * FROM Customers WHERE EXISTS (SELECT * FROM Orders WHERE condition);