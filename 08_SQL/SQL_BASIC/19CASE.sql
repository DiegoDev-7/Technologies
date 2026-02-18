/* CASE */

-- CASE Funciona para evaluar una condición y devolver un valor basado en esa condición.
-- WHEN Funciona como un IF.
-- THEN Funciona devolviendo un valor si la condición es verdadera.
-- ELSE Funciona devolviendo un valor si la condición es falsa.
-- END Funciona para finalizar la sentencia.
-- AS Funciona para renombrar la columna resultante.

SELECT OrderID, Quantity,
CASE
    WHEN Quantity > 30 THEN 'The quantity is greater than 30'
    WHEN Quantity = 30 THEN 'The quantity is 30'
    ELSE 'The quantity is under 30'
END AS QuantityText
FROM OrderDetails;