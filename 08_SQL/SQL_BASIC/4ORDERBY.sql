/* ORDER BY */

-- Ordena valores de menor a mayor.
--ASCENDIENTE
SELECT * FROM Products ORDER BY Price ASC;

--DESCENDIENTE
SELECT * FROM Products ORDER BY Price DESC;

--AMBOS
SELECT * FROM Customers ORDER BY Country ASC, CustomerName DESC;