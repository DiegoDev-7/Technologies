/* 
    !!!!!Sincrónica!!!!!

        Es una funcion que se ejecuta de manera secuencial, es decir una linea de codigo debe completarse antes de pasar a la siguiente
        Si una  operacion tarda mucho (Example: leer un archivo grande o realizar una solicitud a internet), el programa se detiene hasta
        que se complete esa operación.


    !!!!!Asincrónica!!!!!

        Es una funcion que permite ejecutar tareas en paralelo o en segundo plano, es decir sin bloquear el programa. Mientras una se ejecuta, 
        el programa puede seguir ejecutando otras tareas.

    --------------------------------------------------------------------------------------------------------------------------


        setTimeout()        (Con esta funcion podemos definir el tiempo en el que queremos que se ejecute nuestro codigo).
                                //Nota: Mira la linea 56 el numero que definimos como 4000 representa 4000 milisegundos.


        setInterval()       (Se utiliza para ejecutar una función de manera repetida a intervalos de tiempo específicos).
        

        clearInterval       (Se utiliza para detener la ejecucion de el bucle "setInterval").


    !!!!!Promise!!!!!

        new promise         (Su funcion es crear un objeto de promesa el cual se agregan dos funciones como resolve o reject
                            donde resolve se ejecuta siempre y cuando una funcion sea verdadera y reject lo contrario.
                                                                //Nota: El valor antes de ejecutar promise es pending).
                                const promesAR = {
                                        direccion: "Miami",
                                        order: "O23215",
                                        producto: "pizza",
                                        price: 22.99 + "USD"
                                    };
                                const estados = {
                                        actividad: {
                                            activo: "Si",
                                            tiempo: "24:44:58",
                                            advertencias: 0
                                        }
                                    }
                                    function ordenPedido() {
                                        return new Promise(function (resolve, reject) {    //Se agrega la funcion new y Promise para crear un objeto promesa.
                                            if (promesAR.direccion === "Miami" && promesAR.order === "O2321" && promesAR.producto === "pizza") {
                                            resolve ("El pedido sera enviado");            //Si una promesa se cumple la funcion resolve cambia el estado de la promesa de pendiente a cumplida.
                                            } else {
                                            reject ("El pedido no podra ser enviado");    //Si la funcion no se cumple se mostrara el resultado de reject.
                                        }
                                        });
                                    }
                                    function estado() {
                                        return new Promise((resolve, reject) => {
                                            if (estados.actividad.activo !== "No" && estados.actividad.advertencias <= 0) {
                                                resolve ("Cuenta limpia y pedido confirmado");
                                            } else {
                                                reject ("Cuenta con restricciones");
                                            }
                                        });
                                    }
                                    function estadoAccount() {
                                        return estado();                //Verifica si el "estado" cumple las condiciones y pasa a la siguiente verificacion que es "estadoPedido".
                                    }
                                    function estadoPedido() {
                                        return ordenPedido();           //Si "estado" cumple las condiciones, pasa a la segunda verificacion que es "ordenPedido"
                                    }
                                    function procesoValidado(valided) {
                                        console.log(valided);           //Si todas la condiciones cumplen, ejecuta "procesoValidado".
                                    }
                                    function pedidoFallado(failureTicket) {
                                        console.log(failureTicket);     //Si algo falla en cualquier punto, ejecuta "pedidoFallado".
                                    }
                                    const verificacion = ordenPedido();
                                    verificacion
                                    .then(estadoAccount)    //Si el "estado" cumple las condiciones pasa a la siguiente función.
                                    .then(estadoPedido)     //Si el "estadoPedido" cumple las condiciones pasa a la siguiente función.
                                    .then(procesoValidado)  //Si todo esta correcto, muestra "El pedido sera enviado". Esto se muestra debido a que la ultima funcion en ejecutarse fue "estadoPedido"
                                    .catch(pedidoFallado);  //Si hay algun error en "ordenPedido" muestra el error "El pedido no podra ser enviado" 
                                                            //Si hay un error en el "estado" muestra el error "Cuenta con restricciones".


        resolve             (Es una funcion promesa que representa una promesa cumplida).


        reject              (Es una funcion promesa que representa una promesa rechazada).

        
        .then()             (Es un metodo que se utiliza para procesar el resultado de una promesa que se ha cumplido "resolve").


        .catch              (Es un metodo que se utiliza para manejar errores que ocurren en una promesa que se ha rechazado "reject").


        async               (Es una funcion que siempre devuelve una promesa, en lugar de usar ".then()" o ".catch()" se puede utilizar la funcion await).
                                async function asyncAwaitPromiseHandling() {
                                    const pickedDrink = await pickRandomBeverage();   //la funcion await se utiliza para esperar a que una promesa se resuelva antes de continuar con la ejecución.
                                    const isHotWaterReady = await checkIfHotWaterIsReady(pickedDrink);
                                    const isDrinkPrepared = await prepareDrink(isHotWaterReady);
                                    return isDrinkPrepared;
                                }
                                    asyncAwaitPromiseHandling();
                                                                //Nota: Linea 307 para aclarar.


        await               (Se utiliza para pausar la ejecución de la función hasta que una promesa se resuelva o rechace).


        try-catch           (Se utiliza para manejar errores, si el error se encuentra en el bloque try se ejecuta en el bloque catch).

        
        finally             (Se ejecuta despues de que se ejecuta el bloque try o catch, se utiliza para liberar recursos).

*/

const setTimeoutc = "----------setTimeout---------";
console.log(setTimeoutc);


const suma = [2, 4, 6, 8];
const conjunto = suma;
const numbe = 4, letras = 6;
let contar = conjunto * 2;
let conjugar = numbe
function nombre(contar, conjugar) {
    let sumas = `lo que estamos estableciendo en este contador es que definimos ${contar} sobre una velocidad de ${conjugar * 200}mls para que se ejecute despues de este tiempo`;
    return sumas;
}
setTimeout(() => {
    console.log(nombre(20, 20));
console.log(suma, numbe, letras);   //Se muestra en la cuarta linea, ya que establecemos un tiempo de 4000 milisegundos.
}, 400);
setTimeout(() => {
    console.log("Ejecucion despues de 1000mls");  //Se muestra en la segunda linea, ya que establecemos un tiempo de 1000 milisegundos para que se muestre.
}, 100);
console.log("tercera ejecucion");  //Se muestra en la primera linea.
setTimeout(conjunto[0], 400);



//setInterval
const setIntervalc = "---------setInterval--------";
setTimeout(() => {
    console.log(setIntervalc);
}, 400);

let luz = false;
let blinkerInterval =
setInterval(() => {
    if (luz) {
        console.log("Blinker Off");
        luz = false;
    }
    else {
        console.log("Blinker On");
        luz = true;
    }
    }, 400);
    setTimeout(() => {
        clearInterval(blinkerInterval); //Para detener el setInterval para que deje de ejecutarse indefinidamente Se utiliza clearInterval
        console.log("¡Deje la luz quieta!");
    }, 3000);
//Resultado: Se mostrara repetidamente Blinker Off y Blinker On cada 500 milisegundos.
//Resultado: Despues de 3000 milisegundos se detendra el bucle y mostrara "¡Deje la luz quieta!"



    /* Promise */
let promse =
setInterval(() => {
    const promisa = "-----------Promise----------";
    console.log(promisa);
    //Promesa
    const direccionP = {
        direccion: "Calle 1 # 2-3",
        ciudad: "Bogota",
        pais: "Colombia",
    };
    function validar() {
        return new Promise(function (resolve, reject) {
            if (direccionP.pais = "Colombia") {
                resolve ("La direccion es correcta");
            } else {
                reject("La direccion no es correcta");
            }
        })
    }
    const praa = validar();
    console.log(praa);
//-------------------------------------------------------------------
    setTimeout(() => {
        clearInterval(promse);
    }, 400);
}, 3000);



//.then //.catch
let thenCatch =
setInterval(() => {
//Promesa
    const promesAR = {
        direccion: "Miami",
        order: "O23215",
        producto: ["pizza", "Hot Dog", "Burguer"],
        price: 22.99 + "USD"
    };
    const estados = {
        actividad: {
            activo: "Si",
            tiempo: "24:44:58",
            advertencias: 0
        }
    }
    function ordenPedido() {
        return new Promise(function (resolve, reject) {    //Se agrega la funcion new y Promise para crear un objeto promesa.
        if (promesAR.direccion === "Miami" && promesAR.order === "O23215" && promesAR.producto[0]) {
            resolve ("El pedido sera enviado");            //Si una promesa se cumple la funcion resolve cambia el estado de la promesa de pendiente a cumplida.
        } else {
            reject ("El pedido no podra ser enviado");     //Si la funcion no se cumple se mostrara el resultado de reject.
        }
        });
    }
    function estado() {
        return new Promise((resolve, reject) => {
            if (estados.actividad.activo !== "No" && estados.actividad.advertencias <= 0) {
                resolve ("Cuenta limpia y pedido confirmado");
            } else {
                reject ("Cuenta con restricciones");
            }
        });
    }
    function estadoAccount() {
        return estado();                //Verifica si el "estado" cumple las condiciones y pasa a la siguiente verificacion que es "estadoPedido".
    }
    function estadoPedido() {
        return ordenPedido();           //Si "estado" cumple las condiciones, pasa a la segunda verificacion que es "ordenPedido".
    }
    function procesoValidado(valided) {
        console.log(valided);           //Si todas la condiciones cumplen, ejecuta "procesoValidado".
    }
    function pedidoFallado(failureTicket) {
        console.log(failureTicket);     //Si algo falla en cualquier punto, ejecuta "pedidoFallado".
    }
    const verificacion = ordenPedido();
    verificacion
    .then(estadoAccount)    //Si el "estado" cumple las condiciones pasa a la siguiente función.
    .then(estadoPedido)     //Si el "estadoPedido" cumple las condiciones pasa a la siguiente función.
    .then(procesoValidado)  //Si todo esta correcto, muestra "El pedido sera enviado". Esto se muestra debido a que la ultima funcion en ejecutarse fue "estadoPedido"
    .catch(pedidoFallado);  //Si hay algun error en "ordenPedido" muestra el error "El pedido no podra ser enviado" 
                            //Si hay un error en el "estado" muestra el error "Cuenta con restricciones".

//-------------------------------------------------------------------
    setTimeout(() => {
        clearInterval(thenCatch)
    }, 400);
}, 3000);




//async, await
let Guns = ["M4A1", "H416", "MK14", "MPX", "M2", "FAL", "AEK", "AN94", "AUG-A3", "M110"];
//Primera ejecución.
function pickRandomBeverage() {
    return new Promise(function (resolve, reject) {
        let randomGuns = Math.floor(Math.random() * Guns.length);
        let selectedGuns = Guns[randomGuns];
        setTimeout(function() {
            console.log(`Buscando el arma ${selectedGuns}`);
            resolve(selectedGuns);
        }, 3000)
    })
}
//Segunda ejecución.
function checkIfHotWaterIsReady(isGunsSelected) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (isGunsSelected) {
      console.log("Equipando...");
        resolve(isGunsSelected);
      } else {
        reject("No gun has been picked up") 
    }
    }, 2000);
  });
}
//Tercera ejecución.
function prepareDrink(selectedGuns) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (selectedGuns) {
        console.log(`${selectedGuns}! Equipada`);
        resolve(true);
      } else {
        reject("Gun not ready yet...")
      }
    }, 1000)
  });
}
//Se utilza async para que las funciones await puedan ejecutar la funcion anterior sin errores.
async function asyncAwaitPromiseHandling() {
  const pickedDrink = await pickRandomBeverage();   //la funcion await se utiliza para esperar a que una promesa se resuelva antes de continuar con la ejecución.
  const isHotWaterReady = await checkIfHotWaterIsReady(pickedDrink);
  const isDrinkPrepared = await prepareDrink(isHotWaterReady);
  return isDrinkPrepared;
}
asyncAwaitPromiseHandling();



//try-catch
const stock = {
    sunglasses: {
        quantity: 0,
        price: 29.99},
    bags: {
        quantity: 2,
        price: 109.99}
};
const purchasePromise = new Promise(function (resolve, reject) { setInterval(() => {
    if (stock.sunglasses.quantity > 0) {
        resolve("Sunglasses are available. Proceeding with order now");
    } else {
        reject("Sunglasses are out of stock. Canceling Order.")
    }
}, 6500);
});
async function orderSunglasses() {
    try {
        let result = await purchasePromise; //Busca el error y si lo encuentra lo ejecuta en el bloque catch, mostrando el bloque "reject"
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
orderSunglasses();



    /* DOM */
const range = document.getElementById("range");
const rangeView = document.getElementById("rangeView");
function changeRange() {
rangeView.innerText = range.value;
}
range.oninput = changeRange;


const inputa = document.getElementById("inputa");
const parra = document.getElementById("parra");
function contard() {
    parra.innerText = inputa.value.length;
}
inputa.oninput = contard;


const inputButton = document.getElementById("inputButton");
const inputP = document.getElementById("inputP");
let clickC = 0
function textam() {
clickC++;
inputP.innerText = clickC * 2;
}
inputButton.addEventListener("click", textam);