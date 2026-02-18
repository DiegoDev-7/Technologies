/* 

    redirect                     (es una función de Express que permite redirigir a los usuarios a una nueva URL).

*/

const express = require('express');
const app = express();

//1.
app.get('/old-route', function(req, res) {
    res.redirect("/new-route")
})

//2.
app.get("ruta2", function(req, res) {
    res.redirect("/nuevaruta")
})

app.get("nuevaruta", function(req, res) {
    res.status(200).send("You found me!")
})

//3.
app.get("/:version", function(req, res) {
    if (req.params.version == "1.0") {
        res.send("Version 1.0")
    } else {
        res.redirect("/1.0")
    }
})



app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000/old-route')
    console.log('Server is running on port http://localhost:3000/ruta2')
    console.log('Server is running on port http://localhost:3000/:version')
})