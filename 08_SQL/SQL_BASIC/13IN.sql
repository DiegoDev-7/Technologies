/* IN */

-- Funciona para poder buscar multiples valores específicos en una columna.

SELECT * FROM Customers WHERE Country IN ('Germany', 'France', 'UK');

-- Funciona para no buscar los valores específicos en una columna.

SELECT * FROM Customers WHERE Country NOT IN ('Germany', 'France', 'UK');