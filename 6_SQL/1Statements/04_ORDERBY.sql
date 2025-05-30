-- ORDER BY Se utiliza para ordenar los datos
-- ASC Es para ordenarlos ASCENDENTEMENTE
-- DESC Es para ordenarlos DESCENDENTEMENTE

SELECT * FROM users ORDER BY age;

SELECT * FROM users ORDER BY age ASC;

SELECT * FROM users ORDER BY age DESC;

SELECT * FROM users WHERE email="valeria4@gmail.com" ORDER BY age DESC;

SELECT name FROM users WHERE email="valeria4@gmail.com" ORDER BY age DESC;