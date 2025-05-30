/* 

    -----DataBase MySql Workbench-----

    Para hacer la conexion a la base de datos es necesario crear una base de datos con una tabla y en la 
    parte que dice database escribir el nombre de la tabla que tenemos en nuestra base de datos

*/


/* import to db */
const mysql = require('mysql2');


/* Conection */
const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: 3308,
  user: 'root',
  password: '',
  database: 'twitter_db'
});

/* Error and listen to db */
connection.connect((err) => {
  if (err) {
    console.error('Error de conexión:', err);
    return;
  }
  console.log('Conexión exitosa a MySQL Workbench');
});



/* Search */
connection.query("SELECT * from twitter_db.users", function(err, results, fields) {
    if (err) {
        console.error("Error al encontrar la tabla", err)
        return
    } 
    results.map(result => {
        console.log(result)
    })
})


/* Insert */
connection.query("INSERT INTO twitter_db.users (user_handle, email_address, firts_name, last_nam) VALUES ('Diego', 'rojasborday@gmail.com', 'Diego', 'Rojas')", function(err, result) {
    if (err) {
        console.error("Error al encontrar la tabla", err)
        return
    }
    console.log("Registro agregado", result)
})

connection.end()