-- CASE Es una funcion de SQL que permite realizar evaluaciones condicionales en una consulta SQL
-- WHEN Es como un IF
-- THEN Es como agregar un comentario diciendo que hacer si se cumple la condicion
-- ELSE Es comentar una accion si no se cumple la condicion
-- END Es el fin de la evaluacion
-- AS Es para darle un nombre a la columna que se esta creando

SELECT age,
CASE
	WHEN age > 17 THEN "Es mayor de edad"
    ELSE "Es menor de edad"
END AS agetext
FROM users;

SELECT age,
CASE
	WHEN age > 17 THEN True
    ELSE False
END AS "¿Es mayor de edad?"
FROM users;

SELECT age,
CASE
	WHEN age > 18 THEN "Es mayor de edad"
    WHEN age = 18 THEN "Acaba de cumplir la mayoria de edad"
    ELSE "Es menor de edad"
END AS "¿Es mayor de edad?"
FROM users;