/* 

         (A)           (B)
    _____________________________
    | users     |   orders      |
    | ------    |   --------    |
    | 1 Ana     |   1 user_id=1 |
    | 2 Luis    |   2 user_id=1 |
    | 3 Carlos  |   3 user_id=2 |
    | 4 Maria   |   (sin orden) |
    |___________________________|


  --- INNER JOIN ---

    SELECT u.name, o.total
    FROM users u
    INNER JOIN orders o ON u.id = o.user_id       (Combina filas de dos o mas tablas basandose en una columna relacionada 
                                                  (los id "u.id | o.user_id" tienen q tener coincidencias en ambas talbas)).

    ON                                            (Permite definir la relación).

  --- LEFT JOIN ---

    SELECT u.name, o.total
    FROM users u
    LEFT JOIN orders o ON u.id = o.user_id        (Devuelve todas las filas de la tabla izquierda y las coincidencias de la tabla derecha, 
                                                  si no hay coincidencias se motrara null).


  --- RIGHT JOIN ---

    SELECT u.name, o.total
    FROM users u
    RIGHT JOIN orders o ON u.id = o.user_id       (Devuelve todas las filas de la tabla derecha junto con los registros coincidentes de la tabla izquierda
                                                  si no hay coincidencias se motrara null).

 */