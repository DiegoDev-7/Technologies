/* 

    -----DataBase MySql Workbench-----

    Para hacer la conexion a la base de datos es necesario crear una base de datos con una tabla y en la 
    parte que dice database escribir el nombre de la tabla que tenemos en nuestra base de datos

*/


/* Import */
let mysql = require("mysql2")
let express = require("express")

let app = express()
let port = 3000

let ruts = express.Router()
app.use("/api/table/seguimiento", ruts)

app.use(express.json())

//Conection to the data base
let conection = mysql.createConnection({
  host: 'localhost',
  port: 3308,
  user: 'root',
  password: '',
  database: 'twitter_db'
})

conection.connect((err) => {
    if (err) {
      throw err
    }
  console.log('Conexión exitosa a MySQL Workbench')
})


//Users in database
ruts.get("/", (req, res) => {
  conection.query("SELECT * FROM twitter_db.users", (err, row) => {
    if (err) {
      throw err
    }
      res.send(row)
  })
})


//Get only one user
//GET
ruts.get("/:id", (req, res) => {
  conection.query("SELECT * FROM twitter_db.users WHERE id = ?", [req.params.id], (err, row) => {
    if (err) {
      throw err
    }
    res.send(row)
  })
})


//Add new users
//POST
ruts.post("/", (req, res) => {
  let data = {
    user_handle: req.body.user_handle, 
    email_address: req.body.email_address, 
    firts_name: req.body.firts_name, 
    last_name: req.body.last_name, 
    phonenumber: req.body.phonenumber
  }

  let sql = "INSERT INTO twitter_db.users SET ?"

  conection.query(sql, data, function(err, results){
    if (err) {
      throw err
    }
    res.send(results)
  })
})


//Update users
//PUT
ruts.put("/:id", (req, res) => {
  let id = req.params.id
  let user_handle = req.body.user_handle
  let email_address = req.body.email_address
  let firts_name = req.body.firts_name
  let last_name = req.body.last_name
  let phonenumber = req.body.phonenumber
  
  let sql = "UPDATE twitter_db.users SET user_handle = ?, email_address = ?, firts_name = ?, last_name = ?, phonenumber = ? WHERE id = ?"

  conection.query(sql, [user_handle, email_address, firts_name, last_name, phonenumber, id], function(err, results) {
    if (err) {
      throw err
    } 
    console.log(results)
  })
})


//Delete users
//DELETE
ruts.delete("/:id", (req, res) => {
  conection.query("DELETE FROM twitter_db.users WHERE id = ?", [req.params.id], function (err, row) {
    if (err) {
      throw err
    }
    res.send(row)
  })
})


app.listen(port, () => {
  console.log("Server running in http://localhost:3000")
})