/* JOIN */

-- Se utiliza para combinar filas de dos o mas tablas, segun una columna relacionada entre ellas.

SELECT Customers.CustomerID, Customers.CustomerName, Orders.OrderID FROM Customers JOIN Orders ON Customers.CustomerID = Orders.CustomerID;



/* INNER JOIN */

-- Selecciona registros que tienen valores coincidentes en ambas tablas.

SELECT Customers.CustomerID, Customers.CustomerName, Orders.OrderID FROM Products INNER JOIN Categories ON Products.CategoryID = Categories.CategoryID;



/* LEFT JOIN */

-- Funciona para mostrar todos los registros de la tabla de la izquierda (Customers) y los registros coincidentes de la tabla de la derecha (Orders). 
-- Si no hay coincidencia, se muestran NULL en las columnas de la tabla de la derecha.

SELECT Customers.CustomerName, Orders.OrderID FROM Customers LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID ORDER BY Customers.CustomerName;


/* RIGHT JOIN */

-- Funciona para mostrar todos los registros de la tabla de la derecha (Employees) y los registros coincidentes de la tabla de la izquierda (Orders).
-- Si no hay coincidencia, se muestran NULL en las columnas de la tabla de la izquierda.

SELECT Orders.OrderID, Employees.LastName, Employees.FirstName FROM Orders RIGHT JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID ORDER BY Orders.OrderID;



/* FULL OUTER JOIN */

-- Funciona para combinar registros de ambas tablas, mostrando todos los registros de ambas tablas,
-- Independientemente de si hay coincidencias o no. Si no hay coincidencia, se muestran NULL en las columnas de la tabla que no tiene coincidencia.

SELECT Customers.CustomerName, Orders.OrderID FROM Customers FULL OUTER JOIN Orders ON Customers.CustomerID=Orders.CustomerID ORDER BY Customers.CustomerName;