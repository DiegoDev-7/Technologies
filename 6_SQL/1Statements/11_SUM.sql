-- SUM() Funciona para sumar los valores de una columna en una tabla.

SELECT SUM(age) FROM users;

SELECT SUM(age), SUM(user_id) FROM users;

SELECT SUM(age), SUM(user_id) + 20 FROM users;