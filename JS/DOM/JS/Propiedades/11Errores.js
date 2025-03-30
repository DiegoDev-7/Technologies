/* 

    !!!!!Captura de errores!!!!!

        try                 (Se utiliza para atrapar errores en un bloque de codigo).


        catch               (Se ejecuta si se produce un error en el bloque try, se utiliza para manejar o mostrar un mensaje de el error).


        finally             (Se ejecuta despues de que se ejecuta el bloque try o catch, se utiliza para liberar recursos (siempre se ejecuta)).


        trow                (se usa para lanzar un error o una excepción. Cuando se lanza algo con throw, el programa se detiene inmediatamente y 
                            busca un manejador (try-catch) para ese error.).


        TypeError()         (Se utiliza para personalizar un error en la consola).


        throw new Error()   (Se utiliza para lanzar un error personalizado, con un mensaje específico que puedes definir tú mismo. 
                            Crea un objeto de tipo error con un mensaje especifico y lo lanza (Puede que el codigo no tenga ningun error, pues este
                            permite lanzar un error sin que lo haya)).

        .error              (Se utiliza para mostrar un mensaje de error en la consola).


    !!!!!Consola!!!!!
        
        console                 (Se utiliza para mostrar mensajes en la consola del navegador).


        .log                    (Se utiliza para mostrar un mensaje en la consola).


        .error                  (Se utiliza para mostrar un mensaje de error en la consola).


        .warn                   (Se utiliza para mostrar un mensaje de advertencia en la consola).


        .info                   (Se utiliza para mostrar un mensaje de información en la consola).

        
    !!!Tablas, grupos y tiempos!!!

        .table                  (Funciona para crear una tabla en la consola).

        
        .group                  (Funciona para crear un grupo en la consola).


        .groupEnd               (Funciona para cerrar el grupo creado en la consola).


        .time                   (Sirve para establecer un tiempo en la consola. (Si se establece un mensaje tiene que ser igual a el mensaje que vayamos a poner en timeEnd())).


        .timeEnd                (Sirve para finalizar el tiempo establecido en la consola. (Si se establece un mensaje tiene que ser igual a el mensaje que establecimos en time())).


        .assert                 (Se utiliza para mostrar un mensaje en la consola si se cumple una condición, como una funcion if).


        .count                  (Se utiliza para contar cuantas veces se ha ejecutado una linea de codigo).


        .countReset             (Se utiliza para reiniciar el contador de .count()).


        .trace                  (Se utiliza para mostrar la pila de llamadas a funciones que llevaron a la ejecución de la línea de código actual).


        .clear                  (Se utiliza para limpiar la consola).

*/

    /* Errores */
let errores = "-------------error-------------";
console.log(errores);

// try-catch para poder capturar el error. finally se ejecuta siempre
try {
    error();
    console.log("Finaliza la ejecución");
} catch (error) {
    console.log("Se ha producido un error", error.message);
} finally {
    console.log("Esto se ejecuta siempre");
}

// Lanzar un error
function verificarNumero(numero) {
    if (numero !== 10) {
        throw "El número no es 10"; //Permite lanzar una excepción que puede ser capturada y manejada con un bloque catch
    }
    console.log("El número es 10");
}
// try-catch para poder capturar el error
try {
    verificarNumero(9);
} catch (error) {
    console.log("Se ha producido un error:", error); // Output: Se ha producido un error: El número no es 10
}

//throw new Error: Lanza un error personalizado
function dividir(a, b) {
    if (b === 0) {
      throw new Error("No se puede dividir entre cero");
    }
    return a / b;
}
try {
dividir(4, 0);
} catch (e) {
console.error(e.message); // "No se puede dividir entre cero"
}

//TypeError: Personaliza errores en la consola
function verificarTipo(valor) {
    if (typeof valor !== "string") {
      throw new TypeError("El valor debe ser una cadena de texto. HIJUEPUTA");
    }
    return valor.toUpperCase();
  }
verificarTipo("10");
try {
    verificarTipo("10");
} catch (e) {
    console.error(e.message); // "El valor debe ser una cadena de texto"
}



    /* Consola */
let consola = "------------Consola------------";
console.log(consola);
//log
console.log("¡Muesta un mensaje en la consola!");

//error
console.error("¡Muestra un mensaje de error en la consola!");

//warn
console.warn("¡Muestra un mensaje de advertencia en la consola!");

//info
console.info("¡Muestra un mensaje de información en la consola!");

//Tabla
let data = [
    { id: 1, name: "John" },    
    { id: 2, name: "Jane" },    
    { id: 3, name: "Peter" }
];
console.table(data);    //Muestra una tabla en la consola con los datos de la variable data.

//Group
console.group("Información del usuario");
console.log("Nombre: John");
console.log("Apellido: Doe");
console.log("Edad: 30");
console.groupEnd();     //Cierra el grupo y muestra un separador en la consola.

//Time
console.time("Tiempo de ejecución");
for (let i = 0; i < 1000; i++) {}
console.timeEnd("Tiempo de ejecución");     //El mensaje que va dentro de timeEnd() tiene que ser el mismo que el que se puso en time().

//Assert
let age = 17;
console.assert(age >= 18, "Eres menor de edad");    //Si la condición es falsa, se muestra el mensaje en la consola.

//Count
console.count("Iteraciones");
console.count("Iteraciones");
console.count("Iteraciones");   //Muestra el número de veces que se ha llamado a console.count() con el argumento "Iteraciones" en la consola.
console.countReset("Iteraciones");   //Reinicia el contador de console.count() con el argumento "Iteraciones" en la consola.
console.count("Iteraciones");

//Trace
function funcion1() {
    funcion2();
}
function funcion2() {
    funcion3();
}
function funcion3() {
    console.trace();    //Muestra la pila de llamadas a funciones que llevaron a la ejecución de la línea de código actual.
}
funcion1();     //Muestra la pila de llamadas a funciones que llevaron a la ejecución de la línea de código actual.

//Clear
//console.clear();    //Limpia la consola.