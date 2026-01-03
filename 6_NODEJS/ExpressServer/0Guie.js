/*

    -----Dependencias/Librerias-----

        npm install express         (Express es un framework que se utiliza en NodeJs, este agrega una carpeta llamada node_modules que permite alamacenar todos los paquetes y modulos
                                    que un proyecto necesita para funcionar).

        node (nombre del archivo)   (Para arrancar nuestro servidor tendremos que tener nuestro archivo dentro de la carpeta donde se encuentre node_modules).

        npm uninstall name          (Funciona para desisntalar packetes no desados)

        
    -----Consola-----

        npm init                    (Crea un archivo package.json con valores que pedirian como el nombre del proyecto, version, dependencias y scripts).

        npm init -y                 (Crea un archivo package.json con valroes predeterminados, Este archivo contiene el nombre del proyecto, version, dependencias y scripts).


    -----Codigos de estado-----

        200                         (Significa que la solicitud fue exitosa).

        201                         (La solicitud ha tenido exito y se ha creado un nuevo recurso como resutado).

        202                         (La solicitud ha sido aceptada para procesamiento. Pero el procesamiento no ha sido completado).

        204                         (La solicitud ha tenido exito, peor hay contenido que enviar en la respuesta).

        300                         (Indica que hay varias opciones para el recurso, por ejemplo n recurso que esta disponible en diferentes formatos (JSON, XML, etc..)).

        301                         (Indica que el recurso solicitado se ha movido de forma permanente a una nueva URL).

        302                         (Indica que el el recurso solicitado se encuentra temporalmente en una URL diferente, la solicitud es temporal durante el proceso del mantenimiento del sitio).

        304                         (Indica que el recurso no ha cambiado desde la ultima vez que el cliente lo solicito).

        400                         (Significa que el servidor no pudo entender nuestra solicitud debido a una sintaxis invalida. Como un error tipografico en nuestra URL).

        401                         (Aparece cuando el cliente solicita un recurso que no esta disponible sin iniciar sesion).

        403                         (Indica que el cliente no tiene permiso para acceder al recurso, incluso si esta autenticado).

        404                         (Significa que el servidor no pudo encontrar los datos que el cliente solicito).

        500                         (Significa que son errores del servidor).

        503                         (Indica que el servidor no esta disponible temporalmente, posiblemente debido a sobrecarga o mantenimiento).

            _______________________   ___________________________    _____________________   _________________________________
            |   Codigo de estado |   |     Codigos de estado    |   | Errores de cliente |   |       Errores del server      |
            |       200-299      |   |         300-399          |   |       400-499      |   | 500-599 Internal Server Error |
            |       200 OK       |   |   300 Multiple Choices   |   |   400 Bad Request  |   |   500 Internal Server Error   |
            |     201 Created    |   |  301 Moved Permananently |   |   401 Unauthorized |   |    503 Service Unavaliable    |
            |     202 Accepted   |   |        302 Found         |   |   403 Forbidden    |   |_______________________________|
            |    204 No Content  |   |      303 See other       |   |   404 Not Found    |
            |____________________|   |     304 Not Modified     |   |____________________|
                                     |__________________________|


    -----Atributos-----

        res                         (permite mostrar un mensaje si nos encontramos en la pagina que contenga "/menu" ejemplo:

                                    app.get("/menu", (req, res) => {
                                        res.send(`New request made: ${req.method} and the hostname is ${req.hostname} with the id: ${req.params.id}`);          (No se muestra un id pq menu no tiene un :id).
                                    });
                                        .get                (Se utiliza para definir una ruta que responde a las solicitudes HTTP).
                                        .send               (Envia una respuesta a el cliente que hizo la solicitud).
                                        res(response)       (Representa la respuesta HTTP que el servidor enviara al cliente).
                                        /menu/:id           (Cuando llamamos a una ruta con un parametro como /menu/dinner el :id en /menu/:id captura el valor dinner).

                                    ---Metodos---

                                        req.method                  (El parametro .method contiene informacion sobre que tipo de solicitud HTTP se envio).

                                        req.hostname                (Muesta el norme del host en este caso "localhost").

                                        req.params.NOMBRE           (con req.params. podemos acceder a el parametro que tenga nuestro parametro de ruta por ejemplo: "/menu/:NOMBRE").

        req                         (Representa la solicitud HTTP que contiene informacion sobre la solicitud realizada por el cliente).

                                        app.get("/menu", (req, res) => {
                                            console.log(`New request made: ${req.method}`);

                                            res.status(200).send("Successful request");   -----> (Es una buena practica establecer explicitamente el codigo de estado a 200 para indicar una solicitud exitosa).

                                            res.send("<p>Welcome to..</p>");  -----------------> (Tambien se puede optar por responder con HTML).

                                            res.json({    -------------------------------------> (res.json convierte automaticamente el formato JSON adecuado antes de enviarlo al cliente
                                                items: [                                            otra forma de tambien hacerlo es: res.status(200).json
                                                    { name: "Pancakes", proce: 5.99 },
                                                    { name: "Omelette", price: 6.99 }
                                                ]
                                            });
                                        });


    -----Parametros-----

        Rutas                       (Las rutas apuntan a directorios. Por ejemplo, la ruta / dirige a los usuarios al directorio raiz).

                                        app.get('/', (req, res) => {
                                            res.send('Hello from the root directory!');
                                        });
                                    ____________________________________________________________

                                    (Esta ruta dirige a los usuarios al directorio movies).

                                        app.get('/movies', (req, res) => {
                                            res.send('Hello from the movies directory');
                                        });

                                    ____________________________________________________________

                                    (Esta ruta es una ruta con parametros dinamicos).

                                        app.get('/movies/:id', (req, res) => {
                                            res.send('Hello there. I am a route with a parameter called id');
                                        });

                                    (Los parametros dinamicos tambien pueden ser desestructurados).

                                        app.get('/movies/:id/:name', (req, res) => {
                                            const { id, name } = req.params

                                            res.send(`Hello. I am the movie with the id ${id} and the name ${name} in the movies directory`)
                                        })


    -----Parametros de consulta/EndPoints-----

        localhost:3000/greet?name=Diego                     (Un parametro de consulta se considera uno que va despues de un "?" que proporcionan informacion adicional).

        localhost:3000/info?name=Diego&age=20               (Cuando una URL tiene multiples parametros de consulta estos se separan con un simbolo "&" a estos se pueden
                                                            acceder individualmente usando req.query).

*/
