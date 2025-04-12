/* 

    express                     (Funciona la creacion de aplicaciones web y APIs. Es un framework).

*/

const express = require("express")  //Importamos o llamamos a la libreria de express
const app = express(); // Es necesaria para poder utilizar express, ya que llamamos al servidor de express
const port = 3001;  //Especificamos el puerto (es una buena practica)


/* maneras de llamar a un port */
//1.
app.listen(3000, () => {
    console.log('Server is running...')
})

//2.
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
