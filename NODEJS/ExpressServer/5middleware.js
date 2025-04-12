/* 

        app.use()                   (Se utiliza para montar middlewares en una app, los middlewares son funciones que se ejecutan antes de que una solicitud llegue a las rutas especificadas).

        express.json()

        express.urlencoded()

*/


const express = require('express')
const app = express()

//use
app.use(express.urlencoded())

//1.
app.post("/", express.json(), (req, res) => {
    const body = req.body
    console.log(body)
})
//2.
app.post("/", (req, res) => {
    const body = req.body
    console.log(body)
})


/* ---------------middleware personalizado--------------- */

const customMiddleware = (req, res, next) => {
    console.log("Middleware personalizado")
    console.log(`Request type: ${req.method}`)
    next()
}
//1.
app.use(customMiddleware)
//2.
app.get("/", customMiddleware, (req, res) => {
    res.send("Hola mundo")
})
//3.
app.get("/", express.json(), customMiddleware, (req, res) => {
    res.send("Hola mundo")
})
//4.
app.get("/", [express.json(), customMiddleware], (req, res) => {
    res.send("Hola mundo")
})
//5. Principal
const middlewares = [express.json(), customMiddleware]

app.get("/", middlewares, (req, res) => {
    res.send("Hola mundo")
})