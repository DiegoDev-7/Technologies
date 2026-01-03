/* 

    -----Methods-----

        res.send()                      (Envia una respuesta al cliente donde se puede enviar texto HTML, JSON o un buffer).

        res.json()                      (Envia una respuesta en formato JSON al cliente, Es equivalente a res.send() pero asegura que el contenido sea en formato JSON).

        res.status()                    (Establece el codigo de estado HTTP de la respuesta. Se puede encadenar con otro metodos como res.send()).

        res.redirect()                  (Redirige al cliente a otra URL).

        res.sendFile()                  (Envia un archivo al cliente como respuesta).

        res.end()                       (Finaliza la respuesta sin enviar ningun dato adicional).

        res.type()                      (Establece el tipo de contenido (Content-Type) de la respuesta).

        res.cookie()                    (Establece una cookie en la respuesta HTTP).

*/


/* ---------------SEND--------------- */

//send
app.get("/", (req, res) => {
    console.log(`New request made: ${req.method}`)
    res.send("Welcome!")
})

//send with html
app.get("/", (req, res) => {
    console.log(`New request made: ${req.method}`)
    res.send("<p>Welcome!</p>")
})

//send with html and css
app.get("/", (req, res) => {
    console.log(`New request made: ${req.method}`)
    res.send(`
        <html>
            <head>
                <style>
                    body {
                        background-color: #f0f0f0;
                        font-family: Arial, sans-serif;
                    }
                    h1 {
                        color: #333;
                    }
                </style>
            </head>
            <body>
                <h1>Welcome!</h1>
                <p>This is a website in express</p>
            </body>
        </html>
    `)
})


/* ---------------JSON--------------- */

//json
app.get("/", (req, res) => {
    console.log(`New request made: ${req.method}`)
    res.json({
        items: [
            {
                name: "M4A1", price: 100.000
            },
            {
                name: "H4A1", price: 150.000
            }
        ]
    })
})

//json with status
app.get("/", (req, res) => {
    console.log(`New request made: ${req.method}`)
    res.status(200).json({
        items: [
            {
                name: "M4A1", price: 100.000
            },
            {
                name: "H4A1", price: 150.000
            }
        ]
    })
})


/* ---------------STATUS--------------- */

//status
app.get("/", (req, res) => {
    console.log(`New request made: ${req.method}`)
    res.status(200).send("Successful Request")
})


/* ---------------REDIRECT--------------- */

//redirect
app.get("/", (req, res) => {
    res.redirect("https://www.google.com")
})

//redirect with status
app.get("/", (req, res) => {
    res.status(301).redirect("https://www.google.com")
})


/* ---------------SEND FILE--------------- */

//send file
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

//send file with status
app.get("/", (req, res) => {
    res.status(200).sendFile(__dirname + "/index.html")
})

//send file with status and json
app.get("/", (req, res) => {
    res.status(200).sendFile(__dirname + "/index.html", {
        items: [
            {
                name: "M4A1", price: 100.000
            },
            {
                name: "H4A1", price: 150.000
            }
        ]
    })
})

//send file with status and json and redirect
app.get("/", (req, res) => {
    res.status(200).sendFile(__dirname + "/index.html", {
        items: [
            {
                name: "M4A1", price: 100.000
            },
            {
                name: "H4A1", price: 150.000
            }
        ]
    }).redirect("https://www.google.com")
})


/* ---------------END--------------- */

//end
app.get("/", (req, res) => {
    res.end("End of the request")
})

//end with status
app.get("/", (req, res) => {
    res.status(200).end("End of the request")
})


/* ---------------TYPE--------------- */

//type
app.get("/", (req, res) => {
    res.type("html").send("<p>Welcome!</p>")
})

//type with status
app.get("/", (req, res) => {
    res.status(200).type("html").send("<p>Welcome!</p>")
})

//type with status and json
app.get("/", (req, res) => {
    res.status(200).type("html").json({
        items: [
            {
                name: "M4A1", price: 100.000
            },
            {
                name: "H4A1", price: 150.000
            }
        ]
    })
})


/* ---------------COOKIE--------------- */

//cookie
app.get("/", (req, res) => {
    res.cookie("name", "value").send("Cookie set")
})

//cookie with status
app.get("/", (req, res) => {
    res.status(200).cookie("name", "value").send("Cookie set")
})
