/* 

    !!!!! Funciones !!!!!
        
        function    (Se utiliza principalmente para agrupar bloques de codigo es decir que tengan caracteristicas diferentes a las de otros bloques).
        
            Example:
            (por ejemplo si se quitara la function cada let seria un valor libre, pero gracias a la variable establecida "frutaVege" conforma
            un bloque de codigo con diferentes funciones).
        
            function frutaVege() {                                                  function sumar(a, b) {
                let Frutipipa = ["Apple", " Banana", " Pear", " Peach"];                let sumaA = a + 5;
                let Vegetipipa = ["Radish", " Carrot", " Lettuce", " Spinach"];         let sumaB = b + 10;
                console.log("Frutas: " + Frutipipa);                                    const total = sumaA + sumaB;
                console.log("Vegetales: " + Vegetipipa);                                return total;   //Se utiliza para devolver un valor
            }                                                                       }
            console.log(resultado); // Muestra 85
            frutaVege(); //Necesario para devolver el valor                         let resultado = sumar(20, 50);
                                                                                    
                                                                                    La diferencia de un objeto y una function
                                                                                    Es que la funcion esta diseñada para hacer un calculo. El objeto esta diseñado para guardar informacion.
        
        funciones de flecha    (Las funciones de flecha permiten dar un resultado en una misma linea sin utilizar varios let o const y definir su 
                                resultado sin tener que usar return).

            const sumAr = (a, b) => a + b;
            sumAr(20, 40);  //Resultado 60

                            (En el caso de abajo si es necesario usar la funcion return ya que estamos almacenando la variable en un bloque de codigo).

            const multiplicar = (a, b) => {
                const resultado = a * b;   // Aquí calculamos el resultado
                return resultado;           // Devolvemos el resultado
            };
            console.log(multiplicar(5, 6)); // Devuelve 30

        
        Objeto      (El objeto se utiliza principalmente para refererise a una variable con diferentes velores).

            const myCereal = {
                namE: "ckocopick",
                calories: 32,
                cereal: function() {
                    this.namE = 32;
                    console.log(this.calories); //Ayuda a acceder a propiedades o métodos del contexto actual.
                }
            }
            myCereal.cereal();


        JSON        (JavaScript Object Notation. Esta diseñado para almacenar y transportar datos de manera estructurada, su funcion principal es facilitar
                    la transferencia de datos entre un servidor y una aplicacion web).

                    console.log(JSON.parse())       (Convierte una cadena JSON a un objeto).

                    console.log(JSON.stringify())   (Convierte un objeto en una cadena).

*/

    /* Funciones */
let Funcion = "-----------Funciones-----------";
console.log(Funcion);


function lampStatus(params) {
    console.log("On: " + params); 
}
lampStatus("Active");
//Resultado: Active

function mix(firts, secound, thrid) {
    console.log(firts, secound, thrid);
}
const result = mix("1", "2", "3", "4");
//Resultado: 1, 2, 3

function frutaVege() {
    let Frutipipa = ["Apple", " Banana", " Pear", " Peach"];
    let Vegetipipa = ["Radish", " Carrot", " Lettuce", " Spinach"];
    console.log("Frutas: " + Frutipipa);
    console.log("Vegetales: " + Vegetipipa);
}
frutaVege();  //Se utiliza para mostrar el resultado de los console.log().
//Resultado: Frutas: Apple, Banana, Pear, Peach    |  //Resultado: Vegetales: Radish, Carrot, Lettuce, Spinach

function sumar(a, b) {
    let sumaA = a + 5;
    let sumaB = b + 10;
    const total = sumaA + sumaB;
    return total;   //return se utiliza para devolver un valor.
}
let resultado = sumar(20, 50);
console.log(resultado);
//Resultado: 85

function isEqual(numbero) { //Las  funciones que devuelven valores booleanos comienzan con un "is".
    return numbero === 10;
}
const valora = 10;
console.log(isEqual(valora));
console.log(isEqual(32));
//Resultado: true  |   //Resultado: false

function parametros(descuento) {
    if (descuento >= 30) {
        console.log(descuento + "% El descuento es aplicado.");
    }
    else {
        console.log(descuento + "% El descuento no es aplicado.");
    }
}
parametros(29);
//Resultado: 29% El descuento no es aplicado.

function verificarTemperatura(temp) {
    if (temp < 0) {
      return "Hace mucho frío.";
    } else if (temp < 15) {
      return "Hace frío.";
    } else if (temp < 25) {
      return "El clima es templado.";
    } else if (temp < 35) {
      return "Hace calor.";
    } else {
      return "Hace mucho calor.";
    }
  }
console.log(verificarTemperatura(-5));  //Hace mucho frio.
console.log(verificarTemperatura(24));  //El clima es templado.
console.log(verificarTemperatura(36));  //Hace mucho calor.


const prices = [99, 129, 149];
const discount = 0.1;   //Es equivalente a 10%

function applyPrices(prices, discount) {
  for (let i = 0; i < prices.length; i++) {
    console.log(prices[i] * discount + " " + "USD");  //El selector [i] es necesario para seleccionar el let del bucle for.
  }
}
applyPrices(prices, discount);
//Resultado: 9.9USD - 12.9USD - 14.9USD

const valorado = [99, 129, 149];
const discounts = [0.1, 0.2, 0.25];

function getDescounts(valorado, discounts) {
  const values = [];    //Se utiliza para poder almacenar los valores. Valorado y discounts para que se puedan multiplicar por el numero dentro del array.
    for (let i = 0; i < valorado.length; i++) {
        values[i] = valorado[i] * discounts[i]; //Es necesario usar [i] para identificar el bucle y que los numeros se puedan multiplicar por la variable discounts.
    }
    console.log(values);
}
getDescounts(valorado, discounts);
//Resultado: [9.9, 12.9, 14.9]



/* Funcion flecha */
const flechas = "-----------Flechas------------";
console.log(flechas);


const flecha = () => {
    let h = 50;
    let j = 50;
    const juntos = h + j;
    console.log(juntos);
};
flecha();
//Resultado: 100

const conjugar2 = (nom, pad) => {
    return nom / pad;
};
console.log(conjugar2(100, 2));
//Resultado: 50

const conjugar = intNumber => intNumber * 10;
console.log(conjugar(44));
//Resultado: 440



    /* Object */
let object = "------------Object------------";
console.log(object);


const objetos = {
    brand:  "Xioami",
    number: "555-555-5555",
    fun: function() {
        console.log(this.number); //Ayuda a acceder a propiedades o métodos del contexto actual.
    }
};
objetos.fun();
//Resultado: 555-555-5555

const myCereal = {
    namE: "ckocopick",
    calories: 32,
    cereal: function() {
        this.namE = 32;
        console.log(this.calories); //Se puede utilizar para referirse a un metodo dentro de las propiedades o métodos del mismo objeto.
    }
}
myCereal.cereal();
//Resultado: 32

const objectos = {
    name: "Garfield",
    age: 25,
    favoritefood: "lasagna",
    sound: function() {
        console.log("Miau Miau!");
    }
}
objectos.sound();
//Resultado: Miau Miau!



    /* JSON */
const jeison = "-------------JSON-------------"
console.log(jeison);

const jei = '{"name":"Rocko","age":3}'
console.log(JSON.parse(jei));   //El metodo parse convierte una cadena JSON a un objeto.
/* Resultado: 
[object Object] {
  age: 3,
  name: "Rocko"
}
*/ 

const jeis = {
    nombre: "Slicko", 
    tipo: "tienda de zapatos", 
    productos: ["zapatos deportivos", "botas", "sandalias"]
}
console.log(JSON.stringify(jeis));  //El metodo stringify convierte un objeto en una cadena.
//Resultado: {"nombre":"Slicko","tipo":"tienda de zapatos","productos":["zapatos deportivos","botas","sandalias"]}
