/*

    -----Methods-----

        app.get()                   (Se utiliza para obetener datos de una solicitud http).

        app.post()                  (Se utilzia para enviar datos al servidor).

        app.put()                   (Se utilzia para actualizar recursos existentes en el servidor).

        app.delete()                (Se utilzia para eliminar datos en el servidor).

        app.listen()                (Se utilzia para iniicar el servidor y hacer que escuche las solicitudes en un puerto especifico).
    

    -----Request-----

        req.params                  (Define parametros dinamicos que se definen en una url).

        req.query                   (Contiene parametros de consulta enviados en la url despues del signo: http://localhost:3000/search?q=express).

        req.body                    (Contiene datos enviados en el cuerpo de la solicitud. Normalmente utilizadas en: POST, PUT o PATCH).

        req.headers                 (Contiene encabezados HTTP enviados por el cliente).

        req.method                  (Devuelve el metodo HTTP de la solicitud como GET, POST, PUT o DELETE).

        req.url                     (Devuelve la URL completa de la solicitud (sin incluir el dominio)).

*/

const express = require("express")
const app = express()


/* ---------------Methods--------------- */

//get
app.get("/hello", (req, res) => {
    res.send("¡Hello, world!")
})

//post
app.post("/users", (req, res) => {
    res.send("Usuario creado")
})

//put
app.put("/users/:id", (req, res) => {
    res.send(`Usuario con ID ${req.params.id} actualizado`)
})

//delete
app.delete("/users/:id", (req, res) => {
    res.send(`Usuario con ID ${req.params.id} Eliminado`)
})

//patch
app.patch("/users/:id", (req, res) => {
    res.send(`Usuario con ID ${req.params.id} Actualizado parcialmente`)
})


/* ---------------request--------------- */

//params
app.get("/users/:id", (req, res) => {
    res.send(`Usuario con ID ${req.params.id}`)
})

app.get("/movies/:id/:name", (req, res) => {
    const { id, name } = req.params
    res.send(`Hello. I am the movie the id ${id} and the name ${name} in the movies directory!`)
})

app.get("/local/:brand/:color", (req, res) => {
    console.log(`New request made: ${req.method}`)
    res.send(`
        Phone's brand: ${req.params.brand}
        Phone's color ${req.params.color}
    `)
})

//query
app.get("/users", (req, res) => {
    res.send(`Usuario con nombre ${req.params.query}`)
})

//body
app.post("/users", (req, res) => {
    res.send(`Usuario con nombre ${req.body.name}`)
})

//headers
app.get("/users", (req, res) => {
    res.send(`Usuario con nombre ${req.headers.name}`)
})

//Method
app.get("/users", (req, res) => {
    res.send(`Usuario con nombre ${req.method}`)
})

//url
app.use((req, res, next) => {
    console.log(`URL solicitada: ${req.url}`);
    next(); // Pasa al siguiente middleware o ruta
});

//name
app.get("/users/:name", (req, res) => {
    res.send(`Usuario con nombre ${req.params.name}`)
})



app.listen(3000, () => {
    console.log("Port: http://localhost:3000")
})