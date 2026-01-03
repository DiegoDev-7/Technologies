/* HAVING */

--  Funciona para filtrar los resultados de una consulta que utiliza GROUP BY.

-- La siguiente sentencia SQL muestra el número de clientes en cada país. Incluya solo los países con más de 5 clientes:

SELECT COUNT(CustomerID), Country FROM Customers GROUP BY Country HAVING COUNT(CustomerID) > 5;