/* 

    -----Promesas-----

        Promise                     (Es un constructor para crear una nueva promesa, representa una operación asincrónica).

        resolve                     (Funcion que se utiliza para cumplir (resolver) la promesa).

        reject                      (Funcion que se utiliza para rechazar la promesa si ocurre un error).

        .then                       (Se utiliza para ejecutar cuando la promesa se resuelve correctamente).

        .catch                      (Método que se ejecuta cunado la promesa ses rechazada (error)).

        .finally                    (Método que se ejecuta siempre al final, sin importar si la promesa fue resuelta o rechazada).

    -----Async/Await-----

        async                       (Es una palabra clave que convierte una funcion en asincronica haciendo que devuelva una promesa automaticamente).

        await                       (Se utiliza dentro de funciones async para esperar a que una promesa se resuelva antes de continuar).

        fetch                       (Es una funcion que se utiliza para hacer peticiones HTTP, devuelve una promesa).

        .json                       (Es un metodo que se utiliza para convertir la respuesta de una peticion HTTP en formato JSON).

        try                         (Se utiliza para envolver el código que puede generar un error).

        catch                       (Se utiliza para manejar el error si ocurre dentro del bloque try).
        
        finally                     (Se utiliza para ejecutar un bloque de código al final, sin importar si hubo un error o no).

*/

console.log("--Promise-resolve-reject--")
const promese = new Promise((resolve, reject) => {
    const todoBien = false
    if (todoBien) {
        resolve("Datos recibidos")
    } else {
        reject("Algo salió mal")
    }
})

console.log("--then-catch-finally--")
promese.then((resultado) => {
    console.log(resultado)
}).catch((error) => {
    console.error(error)
}).finally(() => {
    console.log("La promesa se ha completado")
})



console.log("---------------Async/Await---------------")

console.log("--async--")
async function obtenerDatos() {
    return "Datos listos"
}

console.log("--await-fethc-json--")
async function ejecutar() {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts")
    const datos = await respuesta.json()
    console.log(datos)
}

console.log("--try-catch-finally--")
async function ejecutarConError() {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts")
        const datos = await respuesta.json()
        console.log(datos)
    } catch (error) {
        console.error("Error:", error)
    } finally {
        console.log("La petición se ha completado")
    }
}
ejecutarConError()
