-- LIMIT se utiliza para mostrar un limite de datos por ejemplo LIMIT 3 mostrara los 3 primeros datos

SELECT * FROM users LIMIT 3;

SELECT * FROM users WHERE NOT email = "valeria@gmail.com" OR age = 15 LIMIT 2;