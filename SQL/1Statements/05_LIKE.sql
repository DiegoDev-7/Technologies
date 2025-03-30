-- LIKE Se utiliza en una WHERE para buscar un patron especifico en una columna
-- % Cubre los datos faltantes es decir: (%"y algo mas")

SELECT * FROM users WHERE email LIKE "%gmail.com";

SELECT * FROM users WHERE email LIKE "valeria%";

SELECT * FROM users WHERE email LIKE "%@%";