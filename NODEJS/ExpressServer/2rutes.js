/* 

    -----Ruta Raiz-----

        "/"                                 (Es la ruta principal de un servidor se utiliza para manejar las solicitudes).

        "*"                                 (Especifica para manejar todas las rutas no definidas).


    -----Rutas especificas-----

        "/name"                             (Especificamos un nombre del parametro al que queremos hacerla solicitud).

        "/about"                            (Ruta para una pagina /about).


    -----Rutas dinamicas/parametros-----

        "/name/:id"                         (Esta es una ruta con un parametro /:id).

        "/post/:postId/comment/:commentId"  (Esta es una ruta dinamica con multiples parametros).

*/

// "/"
app.get("/", (req, res) => {
    console.log(`New request made: ${req.params}`)
})

// "*"
app.get("*", (req, res) => {
    console.log(`New request made: ${req.query}`)
})

// "/name"
app.get("/name", (req, res) => {
    console.log(`New request made: ${req.body}`)
})

// "/about"
app.get("/about", (req, res) => {
    console.log(`New request made: ${req.headers}`)
})

// "/name/:id"
app.get("/", (req, res) => {
    console.log(`New request made: ${req.method}`)
})

// "/name/:nameId/comment/:commentId"
app.get("/", (req, res) => {
    console.log(`New request made: ${req.url}`)
})

// "/name/:petName"
app.get("/menu/:petName", (req, res) => {
    console.log(`New request made: ${req.params.petName}`)
})