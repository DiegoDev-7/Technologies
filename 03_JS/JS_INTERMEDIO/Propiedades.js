/*

    ---------------Metodos---------------

        Métodos de Tipos de Datos y Objetos

            typeof                                                          (Retorna el tipo de dato de una variable).
            
            instanceof                                                      (Verifica si un objeto es instancia de una clase o función constructora).


        Métodos Avanzados para Funciones

            .bind()                                                         (Ata un this específico a una función).

            .call() / .apply()                                              (Ejecutan funciones con un this y argumentos específicos).

            setTimeout()                                                    (Ejecuta una función después de un tiempo específico en milisegundos).

            clearTimeout(temporizador)                                      (Si se ejecuta antes de que finalice el tiempo de setTimeout(), cancela su ejecución).
            
            setInterval()                                                   (Ejecuta repetidamente una función cada cierto tiempo en milisegundos).

            clearInterval()                                                 (Detiene la ejecución de un setInterval()).


    ---------------Strins---------------

        .toLowerCase()                                                      (Convierte "strings" a minúsculas).

        .toUpperCase()                                                      (Convierte "strings" a mayúsculas).


            Métodos Esenciales para Strings

                .includes()                                                 (Verifica si una cadena contiene otra cadena).

                .trim() / .trimStart() / .trimEnd()                         (Elimina espacios en blanco al inicio y/o final).

                .repeat(n)                                                  (Repite una cadena n veces).

                .padStart(longitud, valor) / .padEnd(longitud, valor)       (Rellena un string hasta cierta longitud).


            Métodos de Manipulación de Cadenas

                .slice(inicio, fin)                                         (Extrae una parte de la cadena (sin modificarla)).

                .replace(valor, nuevoValor)                                 (Reemplaza una parte de la cadena).


            Métodos de División y Transformación

                .split(separador)                                           (Divide la cadena en un array usando un separador).


    ---------------Arrays---------------

        .shift()                                                            (Elimina el primer elemento).

        .unshift()                                                          (Agrega elementos al inicio).

        .push()                                                             (Agrega elementos al final).

        .pop()                                                              (Elimina el último elemento).

        .concat()                                                           (Fusiona arrays (sin modificar los originales)).

        .join()                                                             (Convierte un array en un string con separador).

        .toString()                                                         (Convierte el array en string (con comas)).

        .sort()                                                             (Ordena los elementos del array).

        .splice()                                                           (Elimina o remplaza elementos).


            Métodos de Manipulación de Arrays

                .find()                                                     (Devuelve el primer elemento que cumple una condición).

                .some() / .every()                                          (Comprueba si algún / todos los elementos cumplen una condición).

                .flat()                                                     (Aplana un array anidado en un solo nivel).

                .filter()                                                   (Crea un nuevo array con elementos que pasan una condición).

                .reduce()                                                   (Reduce un array a un solo valor (útil para sumas, multiplicaciones, etc)).

                .fill(valor, inicio, fin)                                   (Rellena una parte de un array con un valor).


            Métodos de búsqueda

                .indexOf(valor, index)                                      (Recorre un array y devuelve la posición del index del primer elemento encontrado o -1 si no existe / (indexOf("manzana", 1)) Empieza a buscar "manzana" a partir del indice 1 y si lo necunetra revela su posicion con el index).

                .has(valor)                                                 (Verifica si un elemento está en un conjunto (Set) o (Map)).

                .get(clave)                                                 (Obtiene un valor en un Map).


            Métodos de transformación

                .map(función)                                               (Aplica una función a cada elemento y devuelve un nuevo array).

                .forEach(función)                                           (Ejecuta una función por cada elemento (sin devolver un nuevo array)).

                Array.from(valor)                                           (Convierte un Set en un Array o convierte un string en un array).


            Métodos de estructuras tipo Set y Map

                .set(valor)                                                 (Agrega elementos a un Set, evitando duplicados).

                .size                                                       (Como length, pero para Set y Map).


    ---------------Objects---------------

        Object.assign(destino, fuente)                                      (Copia propiedades de un objeto a otro).

        Object.freeze(obj)                                                  (Bloquea modificaciones en un objeto, no permitie agregar, eliminar o modificar).

        Object.seal(obj)                                                    (No permtie agregar ni eliminar propiedades pero si permite modificarlas).

        Object.fromEntries()                                                (Convierte un array de pares [clave, valor] en un objeto).

        Object.keys(obj) 	                                                (Devuelve un array con el nombre(claves) de las propiedades enumerables propias de un objeto).

        Object.values(obj)                                                  (Devuelve un array con el valor de las propiedades enumerables propias de un objeto).

        Object.entries(obj)                                                 (Devuelve un array de pares (clave-valor) de las propiedades enumerables propias de un objeto).


    ---------------Calcular---------------
    
            Métodos Más Importantes de Math

                Math.floor                                                  (Redondea un numero hacia abajo, de un numero decimal al entero mas cercano pero hacia abajo).

                Math.ceil(x)                                                (Redondea un número hacia arriba (entero más cercano))

                Math.round(x)                                               (Si hay un numero decimal lo redondea al numero mas cercano).

                Math.trunc(x)                                               (Elimina los decimales de un número (sin redondear)).

                 
            Numeros Aleatorios

                Math.random                                                 (Selecciona numeros aleatorios).


            Raíces y Potencias

                Math.sqrt(x)                                                (Devuelve la raíz cuadrada de un número).

                Math.abs(x)                                                 (Devuelve el valor absoluto de un número (sin signo)).

                Math.sign(x)                                                (Indica si un número es positivo (1), negativo (-1) o 0).


            Mínimos y Máximos

                Math.min(x, y, ...)                                         (Devuelve el número más pequeño de una lista).

                Math.max(x, y, ...)                                         (Devuelve el número más grande de una lista).


    ---------------Alertas---------------

        window                                                              (Es un objeto global que representa la ventana del navegador).

            Métodos Claves del Objeto window

                alert(mensaje)                                              (Muestra un cuadro de alerta con un mensaje).

                prompt(mensaje, valorPorDefecto)                            (Pide un valor al usuario y devuelve su respuesta).

                confirm(mensaje)                                            (Muestra una ventana de confirmación con "Aceptar" y "Cancelar").


            Métodos para Manipular Ventanas

                window.open(url, nombre, opciones)                          (Abre una nueva ventana/pestaña).

                window.close()                                              (Cierra la ventana abierta con window.open()).


            Métodos para Obtener Información de la Página

                window.location                                             (Información sobre la URL actual).

                window.location.reload()                                    (Recarga la página).

                window.location.assign(url)                                 (Redirige a otra página).


            Otros Métodos Útiles

                window.innerWidth / window.innerHeight                      (Obtiene el tamaño de la ventana).

                window.scrollTo(x, y)                                       (Desplaza la página a una posición específica).


    ---------------Console---------------

        console.log(mensaje)                                                (Imprime un mensaje en la consola).

        console.dir(mensaje)                                                (Para registrar un objeto y visualizar sus propiedades).

        console.warn(mensaje)                                               (Imprime una advertencia en la consola).

        console.error(mensaje)                                              (Imprime un mensaje de error en la consola).

        console.info(mensaje)                                               (Imprime un mensaje informativo en la consola).

        console.table(objeto)                                               (Imprime un objeto o array en forma de tabla en la consola).

        console.debug(mensaje)                                              (Imprime un mensaje de depuracion en la consola).

*/

console.log("---------------Metodos---------------")

console.log("--typeof--")
const nume = 1
const strinG = "Soy una string"
const arraYz = [1, 2, "3"]
const objecT = { nombre: "Prada", edad: "55" }
const booleaN = true

console.log(typeof nume)
console.log(typeof strinG)
console.log(typeof arraYz)
console.log(typeof booleaN)
console.log(typeof objecT)


console.log("--instanceof--")
class Vehiculo {}
class Coche extends Vehiculo {}
const miCoche = new Coche()

console.log(miCoche instanceof Coche)
console.log(miCoche instanceof Vehiculo)



console.log("---Métodos Avanzados para Funciones---")
/* bind */
console.log("--bind--")
const persona = {
    nombre: "Juan",
    saludo: function() {
        console.log(`Hola, soy ${this.nombre}`)
    }
}
const activeFunction = persona.saludo.bind(persona)
activeFunction()

/* call - apply */
console.log("--call--")
console.log("--apply--")
function presentarse(age, city) {
    console.log(`Hola, soy ${this.nombre}, tengo ${age} años y vivo en ${city}`)
}
const persona2 = { nombre: "Ana" };
presentarse.call(persona2, 25, "Madrid")
presentarse.apply(persona2, [30, "Barcelona"])


/* setTimeout */
console.log("--setTimeout--")
const temp3sec = setTimeout(() => {
    console.log("Esto se ejecuta despues de 3 segundos")
}, 3000);

console.log("-clearTimeout-")
const temporizador = setTimeout(() => {
    console.log("Esto se detiene con el clearTimeout")
}, 1000);
clearTimeout(temporizador)


/* setInterval */
console.log("--setInterval--")

const intervalO = setInterval(() => {
    console.log("Inicia un intervalo")
}, 3000);

clearInterval(intervalO)



console.log("---------------Strings---------------")

const textString = "     mundo     "

/* .toLowerCase */
console.log("--toLowerCase--")
console.log(textString.toLowerCase())

/* .toUpperCase */
console.log("--toUpperCase--")
console.log(textString.toUpperCase())

/* .includes */
console.log("--includes--")
console.log(textString.includes("mundo"))
console.log(textString.includes("String"))

/* .trim */
console.log("--trim--")
console.log(textString.trim())
console.log(textString.trimStart())
console.log(textString.trimEnd())

/* .repeat */
console.log("--repeat--")
console.log(textString.repeat(5))

/* .padStart */
console.log("--padStart--")
const textString2 = "Texto"
console.log(textString2.padStart(15, "Principio "))
console.log(textString2.padEnd(8, " Fin"))

/* .slice */
console.log("--slice--")
const cadenaText = "Esta es una cadena de texto"
console.log(cadenaText.slice(0, 11))
console.log(cadenaText.slice(-15))

/* .replace */
console.log("--replace--")
console.log(cadenaText.replace("Esta", "This"))
console.log(cadenaText.replace("Esta es una cadena de texto", "This is a caden of text"))

/* .split */
console.log("--split--")
const cadenaText3 = "Esta es una cadena de texto"
const cadenaText4 = "Esta,es,una,cadena,de,texto"
console.log(cadenaText3.split(" "))
console.log(cadenaText4.split(","))



console.log("---------------Arrays----------------")

const array = ["1", "2", "3", "4", "5"]

/* shift */
console.log("--shift--")
const deleteFirts = array.shift();
console.log(array)
console.log(deleteFirts)

/* unshift */
console.log("--unshift--")
array.unshift("-2", "-1", "0");
console.log(array)

/* push */
console.log("--push--")
array.push("10", "11", "12")
console.log(array)

/* pop */
console.log("--pop--")
const delteEnd = array.pop()
console.log(array)
console.log(delteEnd)

/* concat */
console.log("--concat--")
const vegetables = ["Tomate", "Pepino", "Lechuga"]
const frutas = ["Manzana", "Naranja", "Piña", "Banano", "Uva"]
const arrayAlimentos = vegetables.concat(frutas)
console.log(arrayAlimentos)

/* join */
console.log("--join--")
console.log(arrayAlimentos.join(" / "))

/* toString */
console.log("--toString--")
console.log(array.toString())
console.log(arrayAlimentos.toString())

/* sort */
console.log("--sort--")
const numeros = [40, 10, 100, 30]
numeros.sort()
console.log(numeros)

numeros.sort((a, b) => a - b)
console.log(numeros)

/* splice */
console.log("--splice--")
numeros.splice(1, 2)
console.log(numeros)

numeros.splice(1, 0, "kiwi", "mango")
console.log(numeros)

numeros.splice(2, 1, "piña")
console.log(numeros)


console.log("--Manipulacion de arrays---")

/* find */
console.log("--find--")
let marray = [10, 25, 60, 5, 30]
const maxArra = marray.find(num => num > 50)
console.log(maxArra)

/* some */
console.log("--some--")
const edades = [15, 12, 22, 17]
const hayMayorDeEdad = edades.some(edad => edad >= 18)
console.log(hayMayorDeEdad)

/* every */
console.log("--every--")
const notas = [80, 90, 75, 85, 70, 60, 65]
const todasAprobadas = notas.every(nota => nota >= 70)
console.log(todasAprobadas)

/* flat */
const aplarray = [1, [2, 3], [4, [5, 6]]]
console.log(aplarray.flat(1))
console.log(aplarray.flat(2))

/* reduce */
const numeR = [10, 20, 30, 40, 100, 500, 300]
const suma = numeR.reduce((acumulador, valor) => acumulador + valor, 0)
console.log(suma)

/* fill */
const rellen = [0, 0, 0, 0, 0, 0, 0]
const re = rellen.fill("fill", 1, 4)
console.log(re)

/* filter */
console.log("--filter--")
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const pares = numeros2.filter(num => num % 2 === 0)
console.log(pares)

console.log("--Metodo de busca---")

/* indexOf */
console.log("--indexOf--")
const indValue = [1, 2, "busca este", 4, 5]
const va = indValue.indexOf("busca este", 1)
console.log(va)

/* has */
console.log("--has--")
const conjunto = new Set([1, 2, 3])
console.log(conjunto.has(2), "Este si esta")
console.log(conjunto.has(4), "Este no esta")

const mapa = new Map();
mapa.set("nombre", "Carlos");
console.log(mapa.has("nombre"));
console.log(mapa.has("edad"));

/* get */
console.log("--get--")
const mapeal = new Map()
mapeal.set("primero", "segundo")
mapeal.set("edad", 30)

console.log(mapeal.get("primero"))
console.log(mapeal.get("edad"))
console.log(mapeal.get("apellido"))


console.log("--Metodo de transformacion---")

/* map */
console.log("--Map--")
const conj = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const dupplicados = conj.map(num => num * 2)
console.log(dupplicados)

/* forEach */
console.log("--forEach--")
const frutipipa = ["salpichicha", "sandihuana", "piñahuana", "manguana"]
//1
frutipipa.forEach(frtA => console.log(frtA))
//2
frutipipa.forEach(frtA2 => {
    console.log(frtA2)
})
//3
for (let e of frutipipa) {
    console.log(e);
}

/* from */
console.log("--from--")
const palabrEo = "Palabra Separada"
const deletreo = Array.from(palabrEo)
console.log(deletreo)


console.log("--Métodos de estructuras tipo Set y Map--")

/* set */
console.log("--set--")
const maap = new Map()
maap.set("nombre", "Diego")
maap.set("age", 20)
console.log(maap)

/* size */
console.log("--size--")

console.log(`tamaño con map: ${maap.size}`)

const tamañOSizE = new Set([1, 2, 3])
console.log(`tamaño con set: ${tamañOSizE.size}`)



console.log("---------------OBJECTS---------------")

/* assign */
console.log("--assign--")
const primero = { a: 1 }
const segundo = { b: 2, c: 3 }
const combinacion = Object.assign(primero, segundo)

console.log(combinacion)

/* freeze */
console.log("--freeze--")
const people = { nombre: "Ana", edad: 20 }
Object.freeze(people)

people.nombre = "Luis"  // No cambia
people.edad = 30        // No cambia

console.log(people)

/* seal */
console.log("--seal--")
const user1 = { nombre: "Luis" }
Object.seal(user1)

user1.nombre = "Pedro"
user1.edad = 25

console.log(user1)

/* fromEntries */
console.log("--fromEntries--")
const cambioArray = [["a", 1], ["b", 2], ["c", 3]]
console.log(Object.fromEntries(cambioArray))

/* keys */
console.log("--keys--")
const car = { marca: "Nissan", modelo: "GTR R34"}
console.log(Object.keys(car))

/* values */
console.log("--values--")
console.log(Object.values(car))

/* entries */
console.log("--entries--")
console.log(Object.entries(car))



console.log("---------------CALCULAR---------------")

/* Math.floor */
console.log("--Math.floor--")
console.log(Math.floor(45.99)) // 45

/* Math.ceil(x) */
console.log("--Math.ceil(x)--")
console.log(Math.ceil(45.01)) // 46

/* Math.round(x) */
console.log("--Math.round(x)--")
console.log(Math.round(45.49)) // 45

/* Math.trunc(x) */
console.log("--Math.trunc(x)--")
console.log(Math.trunc(4.9)) // 4

/* Math.random */
console.log("--Math.random--")
console.log(Math.random() * 10)

/* Math.sqrt(x) */
console.log("--Math.sqrt(x)--")
console.log(Math.sqrt(16)) // 4
console.log(Math.sqrt(25)) // 5

/* Math.abs(x) */
console.log("--Math.abs(x)--")
console.log(Math.abs(-10)) // 10
console.log(Math.abs(10)) // 10
console.log(Math.abs(-0.5)) // 0.5

/* Math.sign(x) */
console.log("--Math.sign(x)--")
console.log(Math.sign(-5)) // -1
console.log(Math.sign(0)) // 0
console.log(Math.sign(5)) // 1

/* Math.min(x, y, ...) */
console.log("--Math.min(x, y, ...)--")
console.log(Math.min(1, 20, 30, 40, 5, 11, 0.1)) // 0.1
console.log(Math.min(1, 20, 30, 40, -5, 11)) // -5
console.log(Math.min(1, 20, 30, 40, -5, 11, -100)) // -100

/* Math.max(x, y, ...) */
console.log("--Math.max(x, y, ...)--")
console.log(Math.max(100, 200, 300, 400, 555, 110, 1)) // 40



console.log("---------------ALERTAS---------------")

/* alert */
console.log("--alert--")
// alert("Hola, soy un alert")

/* prompt */
console.log("--prompt--")
// const nombre = prompt("¿Cuál es tu nombre?")
// console.log(`Hola ${nombre}`)

/* confirm */
console.log("--confirm--")
// const respuesta = confirm("¿Quieres continuar?")
// console.log(respuesta ? "Continuar" : "Cancelar")
// if (respuesta) {
//     console.log("Continuar")
// } else {
//     console.log("Cancelar")
// }

/* open */
console.log("--open--")
// window.open("https://www.google.com", "_blank", "width=800,height=600")

/* close */
console.log("--close--")
// window.close()
// window.open("https://www.google.com", "_blank", "width=800,height=600")
// window.close()

/* location */
console.log("--location--")
// console.log(window.location) // URL actual
// console.log(window.location.reload()) // Recargar la página actual
// console.log(window.location.assign("https://www.google.com")) // Redirigir a otra página

/* innerWidth */
console.log("--innerWidth--")
// console.log(window.innerWidth) // Ancho de la ventana

/* innerHeight */
console.log("--innerHeight--")
// console.log(window.innerHeight) // Alto de la ventana

/* scrollTo */
console.log("--scrollTo--")
// window.scrollTo(0, 500) // Desplazar a una posición específica (x, y)



console.log("---------------CONSOLE---------------")

/* dir */
console.log("--dir--")
console.dir({ nombre: "Carlos", edad: 30 })

/* warn */
console.log("--warn--")
console.warn("Esto es una advertencia")

/* error */
console.log("--error--")
console.error("Esto es un error")

/* info */
console.log("--info--")
console.info("Esto es un mensaje informativo")

/* table */
console.log("--table--")
const data = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 30 },
    { nombre: "Pedro", edad: 35 }
]
console.table(data)

/* debug */
console.log("--debug--")
console.debug("Esto es un mensaje de depuración")
console.debug("Esto es otro mensaje de depuración")
console.debug("Esto es un tercer mensaje de depuración")