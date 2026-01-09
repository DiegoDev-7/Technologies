/* 

        node:url                        (Funciona para manipular las URLs(Uniform Resource Locators). Permite analizar, construir y manipular URLs de manera sencilla).


        ---------------Propiedades---------------

                href                    (Devuelve la url completa).

                origin                  (Devuelve el origen de la URL (protocolo + host)).

                protocol                (Devuelve el protocolo de la URL).

                host                    (Devuelve el host (dominio + puerto, si existe)).

                hostname                (Devuelve solo el nombre del dominio (sin el puerto)).

                port                    (Devuelve el puerto de la URL).

                pathname                (Devuelve la ruta de la URL).

                search                  (Devuelve la cadena de consulta (?query=123)).

                searchParams            (Devuelve el objeto URLSearchParams que permite manipular los parametros de consulta).

                hash                    (Devuelve el fragmento de la URL (#hash)).


        ---------------Parametros de consulta---------------

                URLSearchParams         (Permite agregar, eliminar y manipular parametros de consulta).

                append()                (Agrga un nuevo par clave-valor al objeto (.append("key", value))).

                get()                   (Obtiene el valor de una clave especfica).

                has()                   (Verifica si una clave existe en el objeto).

                delete()                (Elimina un par clave-valor del objeto).

        
___________________________________________________________________________________________________________________________________
                ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
                │                                              href                                              │
                ├──────────┬──┬─────────────────────┬────────────────────────┬───────────────────────────┬───────┤
                │ protocol │  │        auth         │          host          │           path            │ hash  │
                │          │  │                     ├─────────────────┬──────┼──────────┬────────────────┤       │
                │          │  │                     │    hostname     │ port │ pathname │     search     │       │
                │          │  │                     │                 │      │          ├─┬──────────────┤       │
                │          │  │                     │                 │      │          │ │    query     │       │
                "  https:   //    user   :   pass   @ sub.example.com : 8080   /p/a/t/h  ?  query=string   #hash "
                │          │  │          │          │    hostname     │ port │          │                │       │
                │          │  │          │          ├─────────────────┴──────┤          │                │       │
                │ protocol │  │ username │ password │          host          │          │                │       │
                ├──────────┴──┼──────────┴──────────┼────────────────────────┤          │                │       │
                │   origin    │                     │         origin         │ pathname │     search     │ hash  │
                ├─────────────┴─────────────────────┴────────────────────────┴──────────┴────────────────┴───────┤
                │                                              href                                              │
                └────────────────────────────────────────────────────────────────────────────────────────────────┘

*/

const { URL } = require("node:url")

// Crear la URL
const myURL = new URL('https://Diego:24@example.com:8080/path?query=123#hash');
console.log(myURL);

// href
console.log("URL: ", myURL.href)

// origin
console.log("URL + HOST: ", myURL.origin)

// protocol
console.log("PROTOCOLO: ", myURL.protocol)

// host
console.log("Name host: ", myURL.host)

// port
console.log("Port host: ", myURL.port)

// pathname
console.log("Ruta URL: ", myURL.pathname)

// search
console.log("Consulta query: ", myURL.search)

// searchParams
console.log("Parametros query: ", myURL.searchParams)

// hash
console.log("Fragmento URL: ", myURL.hash)


console.log("")


// Agregar un nuevo parametro
myURL.searchParams.append("newParam", "456")
console.log(myURL.searchParams.get("query"))

// Obtener el valor de un parametro
console.log(myURL.searchParams.get("query"))

// Verificar si un parametro existe
console.log(myURL.searchParams.has("query"))

// Eliminar un parametro
myURL.searchParams.delete("query")
console.log(myURL.href)