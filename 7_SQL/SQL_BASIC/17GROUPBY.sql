/* GROUP BY */

-- Funciona para agrupar filas que tienen los mismos valores en columnas específicas en conjuntos de resultados resumidos.

SELECT COUNT(CustomerID), Country FROM Customers GROUP BY Country;