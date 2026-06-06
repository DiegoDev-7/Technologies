/*  */

-- UPDATE Se utiliza para modificar los registros existentes de una tabla.
-- SET Indica que columnas se quieren modificar.
-- WHERE especifica en cuantos datos se actualizaran es decir todos los que tengan el pais mexicano.

UPDATE table_name SET ContactName="Juan" WHERE Country="Mexico";

UPDATE table_name SET ContactName="Juan", City="New York" WHERE CustomerID = 1;