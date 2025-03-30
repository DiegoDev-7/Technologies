-- AS   Se utiliza para renombrar columnas
-- CONCAT()  Se utiliza para concatenar cadenas de texto

SELECT name, init_date AS "Fecha de inicio en programacion" FROM users WHERE name = "Brais";

SELECT CONCAT("Nombre: ", name, " Apellidos: ", surname) AS "Nombre completo" FROM users;