/* 

    node:os                         (Funciona principal mente para obtener informacion sobre el entorno en el que se ejecuta la aplicacion mostrando todos los datos como la CPU, memoria, SO etc...).


    ---------------Propiedades---------------

        ------------------System-----------------

            hostname()                      (Muestra el nombre del equipo).

            type()                          (Muestra el tipo de SO).

            version()                       (Muestra la version del SO).

            arch()                          (Muestra la arquitectura del sistema operativo).

            marchine()                      (Muestra el tipo de arquitectura del sistema operativo).

            cpus()                          (Muestra las caracteristicas del CPU).

            avaliableParallelism()          (Muestra los tipos de procesos simultaneos que puede hacer la PC).

            uptime()                        (Muestra el tiempo total de actividad en el sistema).


        ---------------Size System---------------

            totalmem()                      (Muestra la cantidad total de la memoria).

            freemem()                       (Muestra la cantidad de memoria libre del sistema).


        -------------------RED-------------------

            networkInterfaces()             (Muestra las caracteristicas de la RED).

            platform()                      (Muestra la arquitectura de Node.js).


        -----------------FILES-------------------

            homedir()                       (Muestra el directorio principal).

            tmpdir()                        (Muestra el directorio temporal).

*/


const os = require("node:os")

console.log("---------------SYSTEM---------------")
console.log("Host name of the operating system: ", os.hostname())
console.log("Type operating system: ", os.type())
console.log("Version Windows: ", os.version())
console.log("Architecture of system: ", os.arch())
console.log("Machine type: ", os.machine())
console.log("Cpus of system: ", os.cpus())
console.log("Parallelism: ", os.availableParallelism(), " note: Is an estimate of how many computations a program can perform simultaneously")
console.log("System uptime: ", os.uptime() / 24 / 24 / 24)

console.log("---------------SIZE SYSTEM---------------")
console.log("System memory: ", os.totalmem() / 1024 / 1024 / 1024)
console.log("Freemem system: ", os.freemem() / 1024 / 1024 / 1024)

console.log("---------------RED---------------")
console.log("Network Interfaces: ", os.networkInterfaces())
console.log("Machine type of Node.js: ", os.platform())

console.log("---------------FILES---------------")
console.log("Homedir: ", os.homedir())
console.log("tmpdir: ", os.tmpdir())
