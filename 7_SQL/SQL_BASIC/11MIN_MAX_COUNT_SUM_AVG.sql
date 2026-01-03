/* 

    MIN()       (Devuelve el valor mas pequeño dentro de la columna seleccionada).

    MAX()       (Devuelve el valor mas grande dentro de la columna seleccionada).

    COUNT()     (Devuelve el numero total de una fila).

    SUM()       (Devuelve el numero total de una columna seleccionada).

    AVG()       (Devuelve el valor promedio de una columna seleccionada).

*/


/* MIN */

-- Devuelve el valor mas pequeño de la columna seleccionada.

SELECT MIN(Price) FROM Products;



/* MAX */

-- Devuelve el valor mas grande de la columna seleccionada.

SELECT MAX(Price) FROM Products;



/* COUNT */

-- Se utiliza para contar la cantidad de filas que cumplen una codncion en una consulta.

SELECT COUNT(*) FROM Products;

-- Se utiliza para contar el numero de productos mayo a 20.

SELECT COUNT(*) FROM Products WHERE Price > 20;



/* SUM */

-- Devuelve la suma total de una FILA.

SELECT SUM(Quantity) FROM OrderDetails;

SELECT SUM(Quantity * 7) FROM OrderDetails WHERE ProductId = 7;



/* AVG */

-- Devuelve el valor promedio de una columna.

SELECT AVG(Price) FROM Products;

SELECT AVG(Price) FROM Products WHERE CategoryID = 1;

-- Devuelve todos los productos con un precio superior al precio medio

SELECT * FROM Products WHERE price > (SELECT AVG(price) FROM Products);