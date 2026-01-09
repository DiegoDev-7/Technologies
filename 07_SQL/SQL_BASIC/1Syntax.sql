/* 

    ----- Syntaxis -----

        SELECT                  (extrae datos de una base de datos).
        
        UPDATE                  (actualiza datos en una base de datos).
        
        DELETE                  (elimina datos de una base de datos).
        
        INSERT INTO             (inserta nuevos datos en una base de datos).
        
        CREATE DATABASE         (crea una nueva base de datos).
        
        ALTER DATABASE          (modifica una base de datos).
        
        CREATE TABLE            (crea una nueva tabla).
        
        ALTER TABLE             (modifica una tabla).
        
        DROP TABLE              (elimina una tabla).
        
        CREATE INDEX            (crea un índice (clave de búsqueda)).
        
        DROP INDEX              (elimina un índice).


    ----- Operators -----

        =                       (Igual).

        >                       (Mayor que).

        <                       (Menor que).

        >=                      (Mayor o igual que).

        <=                      (Menor o igual que).

        <>                      (Puede definirse como !=).

        BETWEEN _ AND _         (Busca parametros entre ciertos rangos).

        LIKE '_%_'              (Busca un parametro segun la primera letra o la segunda despues del % (% representa el resto del texto)).

        IN ("_", "_")           (Especifica multiples valores para una FILA).

*/


----- Crea una base de datos -----
CREATE DATABASE example_db;


----- Usa una DB -----
USE example_db;


----- Crea una tabla -----
/* 
    PRIMARY KEY     (Crea una llave primaria representativa de esa tabla).
    INT             (Almacena valores numericos).
    VARCHAR         (Selecciona la cantidad de palabras que puede contener esa columna).
*/
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50)
    email VARCHAR(100)
);


----- Insertar valores -----
INSERT INTO users (username, email) VALUES ("alice", "email@example.com");


----- Selecciona una tabla -----
SELECT * FROM users;


----- Actualizar valores -----
/* 
    SET             (Asgina un valor).
    WHERE           (Especifica a que columna queremos ir).
*/
UPDATE users SET email = "alice@newemail.com" WHERE username = "alice";


----- Elimina una columna -----
DELETE FROM users WHERE username = 'alice';


----- Modifica una base de datos (ejemplo: cambia el conjunto de caracteres) -----
ALTER DATABASE example_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
-- (ejemplo: agregar una columna)
ALTER TALBE usuarios ADD COLUMN fecha_creacion DATETIME;


-- Crea un indice (clave de busqueda)
CREATE INDEX idx_nombre_usuario ON usuarios(nombre_usuario);


-- Elimina un indice
DROP iNDEX idx_nombre_usuario ON usuarios;


-- Elimina una tabla
DROP TALBE usuarios;