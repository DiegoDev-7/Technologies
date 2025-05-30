-- 1:1
-- El campo user_id de la tabla "dni" es una clave foránea de la clave primaria user_id de la tabla "users"
CREATE TABLE dni (
	dni_id INT AUTO_INCREMENT PRIMARY KEY,
    dni_number INT NOT NULL,
    user_id INT,
    UNIQUE(dni_id),
    FOREIGN KEY(user_id) REFERENCES users(user_id)
);


-- 1:N
-- Indica que un registro de la tabla A puede tener varios registros de la tabla B, pero un registro de la tabla B se relaciona con un solo registro de la tabla A
CREATE TABLE companies(
	company_id int AUTO_INCREMENT PRIMARY KEY,
    name varchar(100) NOT NULL
);
-- El campo company_id de la tabla "users" es una clave foránea de la clave primaria company_id de la tabla "companies"
-- (Un empleado (usuario) sólo puede tener una empresa, pero una empresa puede tener muchos empleados (usuarios))
ALTER TABLE users 
ADD CONSTRAINT fk_companies
FOREIGN KEY(company_id) REFERENCES companies(company_id)


-- N-N
-- Indica que un registro de la tabla A puede tener varios registros de la tabla B, y un registro de la tabla B puede tener varios registros de la tabla A
REATE TABLE languages(
	language_id INT AUTO_INCREMENT PRIMARY KEY,
    name varchar(100) NOT NULL
);
-- La tabla "users_languages" es una tabla intermedia que relaciona la tabla "users" con la tabla "languages"
-- En este caso, un usuario puede tener varios lenguajes y un lenguaje puede ser hablado por varios usuarios
CREATE TABLE users_languages(
	users_language_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    language_id INT,
    FOREIGN KEY(user_id) REFERENCES users(user_id),
    FOREIGN KEY(language_id) REFERENCES languages(language_id),
    UNIQUE (user_id, language_id)
);


-- 1:1
-- "dni"
INSERT INTO dni (dni_number, user_id) VALUES (11111111, 1);
INSERT INTO dni (dni_number, user_id) VALUES (22222222, 2);
INSERT INTO dni (dni_number, user_id) VALUES (33333333, 3);
INSERT INTO dni (dni_number) VALUES (44444444);

UPDATE users SET company_id = 1 WHERE user_id = 1;
UPDATE users SET company_id = 2 WHERE user_id = 3;
UPDATE users SET company_id = 3 WHERE user_id = 4;
UPDATE users SET company_id = 1 WHERE user_id = 7;


-- N:N
INSERT INTO languages (name) VALUES ("Swift");
INSERT INTO languages (name) VALUES ("Kotlin");
INSERT INTO languages (name) VALUES ("JavaScript");
INSERT INTO languages (name) VALUES ("Java");
INSERT INTO languages (name) VALUES ("Python");
INSERT INTO languages (name) VALUES ("C#");
INSERT INTO languages (name) VALUES ("COBOL");

INSERT INTO users_languages (user_id, language_id) VALUES (1, 1);
INSERT INTO users_languages (user_id, language_id) VALUES (1, 2);
INSERT INTO users_languages (user_id, language_id) VALUES (1, 5);
INSERT INTO users_languages (user_id, language_id) VALUES (2, 1);
INSERT INTO users_languages (user_id, language_id) VALUES (2, 2);