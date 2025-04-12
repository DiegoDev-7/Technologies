/* 

    node:events                             (Funciona para manejar eventos que permite crear y manejar emisores de eventos(event emitters). Es decir permite emitir eventos y escuchar eventos especificos con funciones asociadas a listeners).


    ---------------Propiedades---------------

        on(event, listener)                 (Registra un listener para el evento especificado).

        once(event, listener)               (Igual que on pero esto permite solo ejecutarse una sola vez).

        emit(event, [...args])              (Emite el evento especificado, ejecutando todos los listeners asociados segun el nombre asignado en los on).

        removeListener(event, listener)     (Remueve un listener).

        removeAllListeners([event])         (Remueve todos los listeners registrados los cuales tengan el mismo nombre).

        listeners(event)                    (Devuelve un array con los listeners registrados para un evento).

        setMaxListeners(n)                  (Permite  establece el numero maximo de listeners que pueden ser registrados para ccualquier evento. Por defecto son 10).

        getMaxListeners()                   (Devuelve el numero maximo de listeners permitidos).

        eventNames()                        (Devuelve un array con los nombres de todos los eventos en los que se este registrado el mismo nombre).

        listenerCount()                     (Devuelve la cantidad de lsiteners registrados para un evento especifico).

*/

const EventEmitter = require("node:events")
const emitter = new EventEmitter()

// on
console.log("---------------on---------------")
emitter.on("saludo", () => {
    console.log(`Bienvenido por multiples veces`)
})
emitter.emit("saludo")
emitter.emit("saludo")

// once
console.log("--------------once--------------")
emitter.once('EstoSiempreIgual', (user) => {
    console.log(`Enviando correo de bienvenida a ${user.email}`)
})

emitter.once('EstoSiempreIgual', (user) => {
    console.log(`Registrando actividad del usuario ${user.name} en los logs.`)
})

emitter.once('EstoSiempreIgual', (user) => {
    console.log(`Notificando al administrador sobre el registro de ${user.name}.`)
})

emitter.once("EstoSiempreIgual", (user) => {
    console.log(`ID del registro: ${user.id}`)
})

// emit
console.log("--------------emit--------------")
const random = Math.floor(Math.random(10000) * 10000)
const newUser = { id: random, name: 'Juan Pérez', email: 'juan.perez@example.com' }
emitter.emit('EstoSiempreIgual', newUser)
emitter.emit('EstoSiempreIgual', newUser)

// removeListener
console.log("---------removeListener---------")
const listener = () => console.log('Este listener no se ejecutara por lo tanto no se mostrara en la consola')
emitter.on('evento', listener)
emitter.removeListener('evento', listener)
emitter.emit('evento')

// removeAllListeners
console.log("-------removeAllListeners-------")
emitter.on('evento', () => console.log('Listener 1'));
emitter.on('evento', () => console.log('Listener 2'));

emitter.removeAllListeners('evento');
emitter.emit('evento');

// listeners
console.log("------------listeners-----------")
const listener1 = () => console.log('Listener 1');
const listener2 = () => console.log('Listener 2');
emitter.on('evento', listener1);
emitter.on('evento', listener2);

console.log(emitter.listeners('evento'));

// setMaxListeners(n)
console.log("-------setMaxListeners(n)-------")
emitter.setMaxListeners(20)
console.log("Asignados: ", 20)

// getMaxListeners()
console.log("-------getMaxListeners()--------")
console.log(emitter.getMaxListeners())

// eventNames()
console.log("----------eventNames()----------")
emitter.on('llamada1', () => {})
emitter.on('llamada2', () => {})
emitter.on('llamada3', () => {})
console.log(emitter.eventNames())

// listenerCount
console.log("----------listenerCount---------")
console.log(emitter.listenerCount('evento'))