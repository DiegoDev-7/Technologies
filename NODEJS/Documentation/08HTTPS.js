/* 

    node:https                          (Funciona para manejar solicitudes y servidores HTTPS(Hypertext Transfer Protocol Secure). HTTPS utiliza un SSL/TLS para cifrar la comunicacion entre el cliente y el servidor proporcionando mayor seguridad).

    SSL/TLS                             (Son protocolos que permiten proporcionar seguridad entre la comunicacion entre un cliente y un servidor. TLS es la version mas moderna y segura de SSL).

    ---------------Crear Certificados SSL---------------

        -----Git bash-----
        
            openssl genrsa -out key.pem 2048

            openssl req -new -key key.pem -out cert.csr

            openssl x509 -req -in cert.csr -signkey key.pem -out cert.pem

*/

const https = require("node:https")
const fs = require("node:fs")
const path = require("node:path")

const options = {
    key: fs.readFileSync(path.join(__dirname, "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "cert.pem"))
}

https.createServer(options, (req, res) => {
    res.writeHead(200)
    res.end("Servidor HTTPS en windows funcionando")
}).listen(1000, () => {
    console.log("Servidor corriendo en https://localhost:1000")
})