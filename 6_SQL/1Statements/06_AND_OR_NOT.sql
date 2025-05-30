-- NOT Se utiliza para devolver datos que no tengan un email como valeria4@gmail.com
-- OR Se utiliza para devolver todos los datos que no tengan valeria4@gmail.com o 15 años
-- AND Se utiliza para filtrar datos con mas de una condicion osea que contengan valeria4@gmail.com Y 15 años

SELECT * FROM users WHERE NOT email = "valeria4@gmail.com";

SELECT * FROM users WHERE NOT email = "valeria4@gmail.com" OR age = 15;

SELECT * FROM users WHERE NOT email = "valeria4@gmail.com" AND age = 15;