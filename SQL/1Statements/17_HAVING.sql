-- HAVING Se usa para filtrar los resultados de una consulta que contiene una función de agregación.

SELECT COUNT(age) FROM users HAVING COUNT(age) > 3