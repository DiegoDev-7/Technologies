/* 

    node:process                            (Funciona para proporcionar informacion sobre el proceso de ejecucion).


    ---------------Propiedades---------------

            argv                            (Devuelve un array con los argumentos pasados al proceso cuando se ejecuta el script).

            env                             (Muestra las variables de entorno del sistema, tambien se pueden acceder a ellas utilizando su nombre, osea: process.env.APPDATA o PATH etc..).

            cwd()                           (Muestra el directorio de trabajo actual desde donde se ejecuto el proceo).

            pid                             (Crea un ID del proceso de ejecucion es decir cuando ejecutamos el codigo crea un ID de la ejecucion).

            uptime()                        (Muestra el tiempo en el que el codigo se ha estado ejecutando).

            memoryUsage()                   (Devuelve un objeto con infomacion sobre el uso de la memoria del proceso).

            on(event, listener)             (Permite escuchar eventos relacionados con el proceso como errores o señales del sistema).

            platform                        (Muestra el tipo de plataforma en la que se identifica el SO).

            hrtime()                        (Devuelve el tiempo en segundos y nanosegundos el que se tardo en ejecutar el codigo).

*/

const process = require('node:process');

// argv
console.log(process.argv)

// env
console.log(process.env)
console.log(process.env.PATH)
console.log(process.env.USERNAME)

// cwd()
console.log(process.cwd())

// pid
console.log("ID: ", process.pid)

// uptime()
console.log(process.uptime())

// memoryUsage()
console.log(process.memoryUsage())

// on(event, listener)
//1.
process.on('exit', (code) => {
    console.log('El proceso del codigo termino:', code)
})

//2.
/* process.on("uncaughtException", (err) => {
    console.log("Error no manejado: ", err)
})
throw new Error("Esto es un error no manejado") */

// platform
console.log(process.platform)

// hrtime()
const start = process.hrtime();
setTimeout(() => {
  const end = process.hrtime(start);
  console.log(`Tiempo transcurrido: ${end[0]}s ${end[1] / 1e6}ms`);
}, 1000);
