-- IS NULL      Selecciona casillas con valor NULL
-- IS NOT NULL  Selecciona casillas con valor diferente a NULL
-- IFNULL       Si el valor es NULL, se le asigna un valor por defecto     

SELECT * FROM users WHERE email IS NULL;

SELECT * FROM users WHERE email IS NOT NULL;

SELECT * FROM users WHERE email IS NOT NULL AND age = 15;

SELECT name, surname, IFNULL(age, 0) AS age FROM users;