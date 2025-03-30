const express = require("express");
const app = express();
const port = 3000;

//1.
    /* Parametro principal */
app.get("/", (req, res) => {
    res.send(`New request made: ${req.method} and the hostname is ${req.hostname} ${req.params.type}`);
});

//2.
    /* Acceder a el parametro /about y mostrar un mensaje */
app.get("/about", (req, res) => {
    res.send("Genera una nueva solicitud para el parametro /about")
})

//3.
    /* Acceder a los parametros dinamicos osea :brand/:color */
app.get("/about/:brand/:color", (req, res) => {
    res.send(
        `Phone's brand: ${req.params.brand}
        - Phone's color: ${req.params.color}`
    )
})
    /* Parametros con desestructuracion */
app.get("/about/:make/:color", (req, res) => {
    const { make, color } = req.params;
    res.send(`Car's make: ${make} - Car's color: ${color}`)
})

//4.
    /* Parametro de consulta */
app.get("/greet", (req, res) => {
    let name = req.query.name || "Guest";   /* se puede utilizar ?? pero la diferencia es que "" o 0 no activara el valor predeterminado */
    res.send(`Hello, ${name}!`)
})

//5.
    /*  */
app.use(express.json())

app.get("/user", (req, res) => {
    const requestData = req.body
    console.log(requestData)
})


app.listen(port, () => {
    console.log(`Servidor escuchando en el port http://localhost:${port}`);
})


/* Mostar los datos del servidor en la consola */
console.log(fetch("http://localhost:3000").then((response) => {
    console.log(response, "¡Estos son los datos del servidor!");
}))
