/* LIKE */


-- Funciona para buscar un valor completo que tenga el valor de "Spain".

SELECT * FROM Customers WHERE Country LIKE 'Spain';

-- Funciona para buscar valores que coincidan con un patrón específico. (Busca todos los valores que empiecen con "a" y el % significa (y algo mas)).

SELECT * FROM Products WHERRE CustomerName LIKE "a%"

-- Busca todos los valores que contengan la letra "L" en cualquier parte del texto.

SELECT * FROM Customers WHERE CustomerName LIKE '%L%';

-- Significa que puede buscar todos los valores que empiecen con "a" y "b".

SELECT * FROM Customers WHERE CustomerName LIKE 'a%' OR CustomerName LIKE 'b%';

-- Significa que puede buscar todos los valores que empiecen con "b" y terminen con "s".

SELECT * FROM Customers WHERE CustomerName LIKE 'b%s';