/* 

    Las funciones que hacen parte de new [] son en realidad constructores de objetos especializados y funcionan bajo principio de la POO

    ---------------New---------------

        new                                     (Crea una instancia de un objeto).

        Object                                  (Permite crear un objeto generico).

        Array                                   (Permite crear un array generico).

        Date                                    (Permite crear la fecha y hora actuales).
        
            -----Metodos getDate-----

                getDate()                       (Obtiene el día del mes (1-31)).

                getDay()                        (Obtiene el día de la semana (0-6, donde 0 es domingo)).

                getMonth()                      (Obtiene el mes (0-11)).

                getFullYear()                   (Obtiene el año).

                getHours()                      (Obtiene la hora (0-23)).

                getMinutes()                    (OBtiene los minutos (0-59)).

                getSeconds()                    (Obtiene los segundos (0-59)).

                getMilliseconds()               (Obtiene los milisegundos (0-999)).

                getTime()                       (Obtiene el tiempo transcurrido en milisegundos desde el 1 de enero de 1970 (Epoch time)).

            -----Metodos setDate-----

                setDate(value)                  (Establece diferentes componentes de fecha).

                setFullYear(value)              (Establece diferentes componentes del año).

                setHours(value)                 (Establece diferentes componentes de la hora).

                setTime(value)                  (Establece el tiempo en milisegundos desde Epoch).

            -----Metodos toLocaleDate-----

                toLocaleDateString()            (Devuelve una cadena con la fecha en formato local).

                toLocaleTimeString()            (Devuelve una cadena con la hora en formato local).

                toLocaleString()                (Devuelve una cadena con la fecha y hora en formato local).

                toString()                      (Devuelve una cadena con el nombre del dia, mes, dia, año y la hora en formato 24H local).

                toISOString()                   (Devuelve una cadena con la fecha y la hora en formato local).

                toUTCString()                   (Devuelve una cadena en formato UTC representando fecha, y hora).

                -----options-----

                hour: '2-digit'                 (Formato de 2 digitos para la hora).

                minute: '2-digit'               (Formato de 2 digitos para los minutos).

                second: '2-digit'               (Formato de 2 digitos para los segundos).

                hour12: false                   (Formato de 24 horas).

                timeZone: 'America/Bogota'      (Zona horaria especifica).

                timeZoneName: 'short', "long"   (Nombre de la zona horaria).


        Set                                     (Crea una coleccion de valores unicos).

        Map                                     (Crea una coleccion de pares clave-valor).

        WeakSet                                 (Como Set, pero solo acepta objetos y no es iterable).

        WeakMap                                 (Como Map, pero solo acepta objetos como claves).

        RegExp                                  (Expresiones regulares para búsqueda de patrones).

        Error                                   (Representa errores en tiempo de ejecución).

        TypeError                               (Representa errores de tipo).

        Promise((resolve, reject))              (Crea una promesa y funciona para controlar operaciones asincronicas se resuelve con (resolve) y falla con (reject)).

*/

// Object
console.log("---------------Object---------------")

const obj1 = new Object()
obj1.nombre = "Ana"
console.log(obj1)

const obj2 = { edad: 30 }
console.log(obj2)
console.log(obj2.hasOwnProperty("edad"))



console.log("---------------Array---------------")

const arr1 = new Array(2)
console.log(arr1)

const arr2 = new Array(1, 2, 3)
console.log(arr2)

arr1.push(4, 5, 6)
console.log(arr1)



console.log("---------------DATE----------------")

const fecha = new Date("2023-01-01")
const dato = [fecha.getFullYear(), fecha.getMonth(), fecha.getDate()]
console.log(dato.join("/"))

const now = new Date()

console.log("-----getDate-----")
console.log(now.getDate())

console.log("Day: ", now.getDay())

console.log("Month: ", now.getMonth())

console.log("Year: ", now.getFullYear())

console.log("Hour: ", now.getHours())

console.log("Minutes: ", now.getMinutes())

console.log("Secounds: ", now.getSeconds())

console.log("Milisecounds: ", now.getMilliseconds())

console.log("Fulltime: ", now.getTime())

/* 
console.log("-----setDate-----")
now.setDate(15)
console.log("SetDate: ", now.getDate())

now.setFullYear(2025)
console.log("SetFullYear: ", now.getFullYear())

now.setHours(10)
console.log("SetHours: ", now.getHours())

now.setTime(0)
console.log("SetTime: ", now.getTime())
*/

console.log("-----toLocaleDate-----")
console.log("LocaleDate: ", now.toLocaleDateString())

console.log("LocaleTime: ", now.toLocaleTimeString())

console.log("LocaleString: ", now.toLocaleString())

console.log("String: ", now.toString())

console.log("ISOString: ", now.toISOString())

console.log("UTCString: ", now.toUTCString())



console.log("----------------SET----------------")

const set1 = new Set([1, 2, 2, 3])
console.log(set1)

set1.add(4)
console.log(set1)
console.log(set1.has(2))
console.log(set1.size)



console.log("----------------MAP----------------")

const map1 = new Map()
map1.set("nombre", "Carlos")
map1.set("edad", 35)

console.log(map1.get("nombre"))
console.log(map1.has("edad"))
console.log(map1.size)



console.log("---------------WeakSet--------------")

const ws = new WeakSet()
const objeto1 = {}
ws.add(objeto1)
console.log(ws.has(objeto1))



console.log("---------------WeakMap--------------")

const wm = new WeakMap()
const clave1 = {}
wm.set(clave1, "valor secreto")
console.log(wm.get(clave1))



console.log("---------------RegExp--------------")

const regex1 = new RegExp("a+b")
console.log(regex1.test("aaab"))

const regex2 = /[0-9]+/
console.log(regex2.test("123abc"))
console.log("hola123".match(regex2))



console.log("---------------Error---------------")

const err1 = new Error("Algo salió mal")
const err2 = new TypeError("Tipo inválido")

console.log("Muestra el nombre despues de new: ", err1.name)
console.log("Muestra el mensaje: ", err1.message)
console.log("Muestra el nombre despues de new: ", err2.name)
console.log("Muestra el mensaje: ", err2.message)



console.log("---------------Promise--------------")

const promesa = new Promise((resolve, reject) => {
    const exito = true
    if (exito) {
        resolve("Operación exitosa")
    } else {
        reject("Operación fallida")
    }
}
)