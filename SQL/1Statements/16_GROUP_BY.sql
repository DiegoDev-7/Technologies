-- COUNT()  Se utiliza para contar el número de filas que coinciden con un criterio específico.
-- GROUP BY Se utiliza para agrupar filas que tienen el mismo valor en una o más columnas.
-- ORDER BY Se utiliza para ordenar los resultados en orden ascendente o descendente.

/* Cuenta el número de registros de la tabla users */
SELECT COUNT(age) FROM users GROUP BY age;

SELECT COUNT(age), age FROM users GROUP BY age;

/* Ordena los resultados */
SELECT COUNT(age), age FROM users GROUP BY age ORDER BY age ASC;

SELECT COUNT(age), age FROM users GROUP BY age ORDER BY age DESC;

/* Ordena los resultados mayores a 15 */
SELECT COUNT(age), age FROM users WHERE age > 15 GROUP BY age ORDER BY age ASC;

SELECT COUNT(age), age FROM users WHERE age > 15 GROUP BY age ORDER BY age DESC;