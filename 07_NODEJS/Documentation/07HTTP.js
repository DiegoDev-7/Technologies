/* 

    node:http                               (Funciona para crear servidores HTTP(Hypertext Transfer Protocol) y realizar solicitudes HTTP como cliente. Podemos manejar la comunicacion entre clientes y servidores).


    ---------------Propiedades---------------

        ------Crear un servidor------

            createServer()                  (Crea un servidor http).

            
        ------Solicitudes------

            get()                           (Realiza una solicitud HTTP GET como cliente).

            request()                       (Realiza una solicitud HTTP de la solicitud(GET, POST, etc...)).


        ------Propiedades de req------

            method                          (Devuelve el metodo HTTP de la solicitud(GET, POST, etc...)).

            url                             (Devuelve la URL de la solicitud).

            headers                         (Devuelve los encabezados de la solicitud).


        ------Propiedades de res------

            res.statusCode                  (Establece el codigo de estado HTTP de la respuesta).

            res.setHeader()                 (Establece un encabezado HTTP en la respuesta).

            res.write()                     (Escribe datos en el cuerpo de la respuesta).

            end()                           (Finaliza la respuesta).

*/

const http = require("node:http")

const server = http.createServer((req, res) => {

    if (req.url === "/" && req.method === "GET") {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/plain")
        res.end("Hello, World!")
    } else if (req.url === "/about" && req.method === "GET") {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/plain")
        res.end("acerca de nosotros")
    } else {
        res.statusCode = 400
        res.setHeader("Content-Type", "text/plain")
        res.write("¡Hola!")
        res.end("Pagina no encontrada error 404")
    }

    console.log("Metodo HTTP: ", req.method)
    console.log("URL: ", req.url)
    console.log("Header: ", req.headers)
})

server.listen(3000, () => {
    console.log("Server runing in http://localhost:3000")
})