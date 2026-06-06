/* 

  ----- Syntaxis -----

    --- CREATE ---

      CREATE TABLE name_t                               (Crea una tabla y podemos asignar atributos como:
                                                          PRIMARY KEY   Clave primaria para la tabla
                                                          SERIAL        Crea columnas con autoincremento
                                                          TEXT          Casilla disponible para solo string
                                                          UNIQUE        Valor unico
                                                          INT           Casilla disponible solo para numeros
                                                          VARCHAT(5)    Permite asigar un texto q no sea mayor a 5
                                                        ).


    --- INSERT ---

      INSERT INTO name_t (col1, col2, col3) VALUES      (Permite insertar valores a una tabla en la columna que elijamos)
      (val1, val2, val3),
      (val1, val2, val3),
      (val1, val2, val3)


    --- SELECT ---
    
      SELECT name, email FROM users                     (Selecciona el name y email de la tabla users y la muestra).

      SELECT u.name, u.email FROM users u               (Se utiliza para asignar un alias para dar claridad a la hora de seleccionar columnas).

      SELECT age WHERE age > 25                         (Se utiliza para dar una condicion a una tabla).


      SELECT * FROM users WHERE age IS NULL             (Selecciona valores los cuales tengan el valor null).

      SELECT * FROM users WHERE age IS NOT NULL         (Selecciona valores los cuales no sean null).


      IN
      SELECT * FROM users                               (Selecciona usuarios que tienen transacciones donde el type sea bank_to_user).
      WHERE user_id IN (
        SELECT user_id 
        FROM transactions
        WHERE type = 'bank_to_user'
      )

      NOT IN
      SELECT * FROM users                               (Selecciona usuarios que tienen transacciones donde el type no sea bank_to_user).
      WHERE user_id NOT IN (
        SELECT user_id FROM transactions
        WHERE type = 'bank_to_user'
      )

      EXISTS
      SELECT * FROM users u                             (Permite traer usuarios que tienen al menos una transaccion type bank_to_user).
      WHERE EXISTS (
        SELECT 1
        FROM transactions t
        WHERE t.type = 'bank_to_user'
      )

      NOT EXISTS
      SELECT * FROM users u                             (Permite traer usuarios que no tienen transacciones type bank_to_user).
      WHERE NOT EXISTS (
        SELECT 1
        FROM transactions t
        WHERE t.type = 'bank_to_user'
      )


    --- ORDER BY ---
      
      ORDER BY age                                      (Permite seleccionar valores los cuales esten en orden ascendiente o descendiente: ASC, DESC).

      LIMIT 1                                           (Permite mostrar cuantas columnas mostrar).


    --- UPDATE ---

      UPDATE users                                      (Permite actualizar valores en una tabla con o sin una condición).
      SET age = 26 | SET age = age + 1
      WHERE name = 'Ana'


    --- DELETE ---

      DELETE FROM users                                 (Borra todo el contenido de la tabla).

      DELETE FROM users WHERE name = 'Carlos2'          (Borra el usuario con el nombre Carlos2).


    --- CONDITIONS ---

      SELECT COUNT(*) FROM users                        (Cuenta cuantas columnas hay en la tabla).

      SELECT COUNT(*) FROM users WHERE age > 25         (Con la condicion cuenta los usuarios que son mayores a 25).


      SELECT SUM(age) FROM users                        (Suma los valores de una fila).

      SELECT AVG(age) FROM users                        (Saca el valor promedio de la fila).

      SELECT MIN(age) FROM users                        (Selecciona el valor minimo de una fila).

      SELECT MAX(age) FROM users                        (Selecciona el valor maximo de una fila).

      SUM - AVG - MIN - MAX



  ----- Operators -----

    =                                                   (Selecciona un valor que sea igual a).

    >                                                   (Selecciona un valor mayor a).

    <                                                   (Selecciona un valor menor a).

    >=                                                  (Selecciona un valor mayor o igual a).

    <=                                                  (Selecciona un valor menor o igual a).

    <>                                                  (Selecciona un valor que no sea igual a).

*/