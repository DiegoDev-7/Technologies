-- IN funciona para monstrar los valores que esten entre los ()

/* Muestra todos los usuarios que tengan el nombre Brais y valeria */
SELECT * FROM users WHERE name IN ("Brais", "valeria")

/* Muestra todos los apellidos que contengan rojas */
SELECT * FROM users WHERE surname IN ("rojas")