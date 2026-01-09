/* IS NULL */

-- Devuelve las filas donde el campo no tiene valor asignado, es decir (Muestra valores que no tienen datos registrados)

SELECT column_names FROM table_name WHERE column_name IS NULL;


/* IS NOT NULL */

-- Devuelve las filas donde el campo si tiene un valor asignado (No muestra ningun campo que no tenga un valor asignado)

SELECT CustomerName, ContactName, direction FROM Customers WHERE direction IS NOT NULL;