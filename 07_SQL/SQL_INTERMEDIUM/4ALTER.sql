/* ALTER TABLE */

-- ALTER TABLE Permite modificar la estructura de una tabla existente, como añadir o eliminar columnas, cambiar tipos de datos, etc.
-- ADD permite añadir una nueva columna a una tabla existente.
-- DROP permite eliminar una columna de una tabla existente.
-- MODIFY permite cambiar el tipo de dato de una columna existente.

-- ADD
ALTER TABLE table_name ADD column_name varchar(255);

-- DROP
ALTER TABLE table_name DROP column_name;

-- MODIFY
ALTER TABLE table_name MODIFY column_name datatype;