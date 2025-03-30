/* 

    !!!!! Fundamentos !!!!!

        Declaracion de variables.

          var     (Se puede declarar multiples veces pero suelta el ultimo valor).
          let     (Se puede declarar una sola vez. Se utiliza mas en el Codigo moderno).
          const   (Se puede declarar una sola vez. Se utiliza mas en el Codigo moderno).

        camelCase   (Es una forma de nombrar las variables que comienzan con la letra minúscula y cada nueva palabra con una letra mayúscula).
        
          let nombreCompleto;
          let edadUsuario;
          let calcularPromedio;

        TIPOS       (asi se le llaman a los booleanos, strings y numeros).
        
        Números           [Number].     let edad = 25;                              //Representa un numero.
        Cadenas de texto  [String].     let nombre = "Juan";                        //Representa valores entre "comillas".
        Booleanos         [Boolean].    let verdadero = true;  let falso = false;   //Representa un valor true o false.
        Arreglos          [Array].      let array = [0, 1, 2, 3];                   //Representa un conjunto de valores entre [] llamados arreglos.
        Objetos           [Object].     let persona = {nombre: "Ana", edad: 30};    //Representa un conjunto de valores entre {} llamados objetos.
        
        Null              [Null].       let variable = null;                        //Representa un valor nulo.
        Undefined         [Undefined].  let variable = Undefined;                   //Representa un valor indefinido.


    !!!!! Operadores !!!!!

        ===  Igualdad estricta    (Compara el valor y tipo  8 === "8" //true).
        ==   Igualdad debil       (Compara solo el valor  8 == "8" //true).
        !==  Desigualdad          (Comprueba si un valor no es igual a otro).
        !    Negación             (Convierte los valores de true o false en su opuesto).
        <    Menor que            (Representa si un valor es menor que otro).
        >    Mayor que            (Representa si un valor es mayor que otro).

        ++   Incremento           (Realiza una suma que incrementa de 1).
        --   Decremento           (Realiza una resta que decrementa de 1).
        +    Suma o Unión         (Realiza una suma entre dos valores o unión entre dos strings).
        -    Resta                (Realiza una resta entre dos valores).
        *    Multiplicación       (Realiza una multiplicación entre dos valores).
        /    Divisor              (Realiza una división entre dos valores).
        %    Módulo               (Realiza una división entre dos valores y nos da el resto).

        <=   Menor o igual que    (Realiza una comparación entre dos valores y devuelve true si el primero es menor o igual que el segundo).
        >=   Mayor o igual que    (Realiza una comparación entre dos valores y devuelve true si el primero es mayor o igual que el segundo).
        +=   Suma y asignación    (Realiza una operación de suma y luego da un resultado).
        -=   Resta y asignación   (Realiza una operación de resta y luego da un resultado).
        *=   Mul y asignación     (Realiza una operación de multiplicacion y luego da un resultado).
        /=   div y asignación     (Realiza una operación de división y luego da un resultado).
        %=   Modulo y asignación  (Realiza una operación de modulo y luego da un resultado).

        **   Potencia             (Realiza una potencia entre dos valores).
        &&   Y                    (Realiza una operación de AND entre dos valores. [FALSE]).
        ||   O                    (Realiza una operación de OR entre dos valores.  [TRUE]).
        ??  Nullish Coalescing    (se usa para devolver el lado derecho solo si el valor del lado izquierdo es null o undefined).
        ?    Condición            (Separa la condición de la expresión que se ejecutará si la condición es true).
        :    Condición            (Separa la expresión true de la expresión que se ejecutará si la condición es false).


    !!!!! Operadores logicos !!!!!

        &&(AND)      (Devolvera siempre false si una o más condiciones son false).
        ||(OR)       (Devolvera siempre true si una o más condiciones es true).


    !!!!! Booleanos !!!!! 

        True o false 


    !!!!! Strings !!!!!

        "Son caracteres entre comillas"


    !!!!! Declaracion de variables !!!!!!

        var       (Antiguo metodo para declarar variables, contiene errores).
                    example: var age = 52;
                             var age = 18;
                             console.log(age); //Resultado: 18.

        let       (Es el remplazo de var, pues en este si permite hacer cambios. Sin recibir cambios inesperados
                    Example:  let age = 19;
                              age = 99;
                              Console.log(age); //Cambia la edad a 99).

        const     (Se usa para declarar variables cuyo valor no se supone que cambie.
                    Example:  const age = 19;
                              age = 91;           
                              Console.log(age); //Suelta un error).


    !!!!! Condicionales !!!!!

        if        (La declaracion if ejecuta un código solo si una funcion cumple una condición especifica).
                                                                                              const Hola = true;
                  if (true) {                                 if (false) {                       if (hola) {
                    console.log("Hello!")                       console.log("Hello!")              console.log("Hello!")
                  };                                          };                                 };
                //El "Hello!" se mostrara en la consola     //Evita que se muestre "Hello!"    //Tambien se puede usar una constante


        else if   (si de lo contrario (si una condicion no cumple en if una alternativa a una solución puede ser else if)).

                    let score = 85;
                      if (score >= 90) {
                        console.log("Excelente");
                      } else if  (score >= 80) {
                        console.log("Buena puntuacion"); 
                      } else if  (score >= 70) {
                        console.log("Bien"); 
                      } else {
                        console.log("Necesitas mejorar");
                      }
                    //Se una condicion de el if no cumple, se ejecuta else if.


        else      (La declaración "else" ejecuta el código solo si la delcaración "if" devuelve un booleano "false").

                    let suscriptor = false;
                      if (suscriptor) {
                        console.log("Estas Suscrito");
                      } else {
                        console.log("haste suscriptor");
                      }
                    //Si el booleano esta en false ejecuta else de lo contrario ejecutaria if o else if


    !!!!! Condiciones con Switch !!!!!

          (Estas funciones solo funcionan con compraraciones de igualdad estricta (===), no es util para condiciones que involucren operadores lógicos).

        switch    (Es como la declaracion if).

                    let dia = "viernes";
                    switch (dia) {
                      case "lunes":
                      case "martes":
                      case "miércoles":
                        console.log("Es un día laboral.");
                        break;
                      case "jueves":
                      case "viernes":
                        console.log("Fin de semana")
                        break;
                      case "sábado":
                      case "domingo":
                        console.log("Es un día de descanso.");
                        break;
                      default:
                        console.log("Día no reconocido.");
                    }

        case      ((Es como la declaracion else if). En este caso esta declaracion siempre cierra con : en lugar de ;).


        break     ((Es como la declaracion return). Esta funcion hace que cada vez que se evalua un case, si no se encuentra ninguna declaracion que coincida. 
                                                    Break saldra de ahí y seguira buscando).


        default   ((Es como la declaracion else). Esta se ejecuta si ninguno de los casos "case" anteriores coincide con el valor de la expresion evaluada 
                                                    Esta opcion puede ser (opcional).
                                                      por example: Si estás seguro de que el valor de la expresión será siempre uno de los valores que estás 
                                                      manejando en los case, entonces no necesitas el default).


    !!!!! Bucles !!!!!

      ¡ADVERTENCIA!
    Procurar ejecutar los bucles en editores de google como JSbin para evitar problemas si se llegan a ejecutar.

        do        (Permite ejecutar siempre un codigo ya que no tiene una condicion estricta, es decir sin importar su valor si se puede llamar dentro de el bloque do 
                  y si cumple esa condicion ejecuta el bucle while).

                    let i = 6;
                    do {
                      console.log(`${i} - Hola Mundo`);
                      i++
                    } while (i < 5);

        while     (Permite ejecutar lineas de codigo repetidamente sin fin  (Siempre y cuando una condicion sea true)).

                    let bucle = true;
                      while (bucle) {
                      console.log("Soy un bucle");
                      bucle = false;              //detiene el bucle
                    }
                  //Si no se establece la condicion en false el bucle se ejecuta sin fin.


        for       (Permite ejecutar un bloque de codigo de manera repetida durante un número específico de veces la letra i++
                  es una forma de aumentar el valor de 1 en 1 despues de cada repetición).

                    for (let i = 0; i < 5; i++) {
                      console.log("Codigo: " + i);
                    }

                    for (let i = 10; i <= 15; i++) {
                      console.log("Codigo: " + i);
                    }

                    for (let i = 5; i >= 0; i--) {
                      console.log(i)
                    }
                  //La condición al final de "i++" o "i--" siempre debe ir para permitir aumentar o disminuir un bucle.

        for of    (Permite mostrar valores de un array, un objeto o un string(el string muestra los valores individualmente)).

                    let array = ["Tom", "Mia", "Leon"];           let array2 = "Tom";
                    for (let value of array) {                    for (let i of array2) {
                      console.log(value);                           console.log(i);
                    };  //Muestra los valores de un array.         };       //Muestra los valores de un string.
                        //Resultado: "Tom", "Mia", "Leon".                  //Resultado: "T", "o", "m".

        for in    (Es un bucle que sirve para recorrer las claves (o índices) de un objeto o un array(Lo que hace: Te dice en que posicion están las cosas, no qué contienen)).

                    let array = ["Tom", "Mia", "Leon"];           let array2 = "Tom";
                    for (let value in array) {                    for (let i in array2) {
                      console.log(value);                           console.log(i);
                      };  //Muestra los valores de un array.         };     //Muestra los valores de un string.
                         //Resultado: "0", "1", "2".                       //Resultado: "0", "1", "2".

                  (Si se usa en un objeto, muestra los nombres de las propiedades. Si se usa en un array, muestra los índices).
                  
                    let objeto = { nombre: "Tom", edad: 20 };
                    for (let key in objeto) {
                      console.log(key);         //Resultado: "nombre", "edad".
                      console.log(objeto[key]); //Resultado: "Tom", 20.
                    } 

        continue  (Permite saltar una iteración en un bucle y continuar con la siguiente (omite el resto del código en el bloque 
                  actual del bucle y salta directamente al inicio de la siguiente iteración.)).

        break     (Detiene por completo la ejecución del bucle y sale de él, sin importar si quedan iteraciones pendientes).


    !!!!! Array !!!!!

        (Los elementos dentro de [] son índices).
        (Los elementos con una variable ".push" agrega índices).
        (Los elementos con una variable ".pop" elimina índices).

        let soyUnArray = [1, 2, 3];            let toDo = ["Tom",  "Mia", "Leon"];                      let toDo = ["Tom",  "Mia", "Leon"];
          console.log(soyUnArray[0]);            toDo.push("garabato", "Gato");                           toDo.pop("garabato", "Gato");
        //Muestra el valor 1 en la consola.      console.log(toDo);                                       console.log(toDo);
                                              //Muestra: ["Tom", "Mia", "Leon", "garabato", "Gato"].   //Muestra: ["Tom", "Mia"].
      
      --------------------------------------------------------------------------------------------------------------------------------------
        
      .push(Agrega valores).                  .pop(Elimina valores).                                     .length(Muestra cuantos valores hay en numeros).

        let doTo = ["call mom",  "dishes"];    let frutras = ["manzana", "banana", "naranja"];            let task = ["dishes", 5, "windows", "pepino"];
        doTo.push("party", "Catuela");         let ultimaFruta = futras.pop();                            console.log(task.length);
        console.log(doTo);                     console.log(frutas); //Resultado ["manzana", "banana"]    //Muestra en la consola un numero 4
                                               console.log(ultimaFruta); //Resultado: "naranja"
                                      
*/

/* Suma */
let Sumas = "--------------Suma-------------";
console.log(Sumas);


let number = 4090;
let Number = 1000;
const suma = number + Number;
console.log(suma);
//Resultado: 5090

let firstName = "John";
firstName = firstName + " Lennon";
console.log(firstName);
//Resultado: John Lennon

let menosigual = 25;
menosigual -= 4;
console.log(menosigual);
//Resultado: 21

let masigual = 5;
masigual += 10;
console.log(masigual);
//Resultado: 15

let masmas = 5;
masmas++;
console.log(masmas);
//Resultado: 6

let menosmenos = 5;
menosmenos--;
console.log(menosmenos);
//Resultado: 4



  /* Booleano */
let BooleanO = "------------Booleanos----------";
console.log(BooleanO);


let bool = true;
let Bool = false;
const comb = bool && Bool;  //Devolvera siempre false si una o más condiciones son false.
console.log(comb);
//Resultado: false

let bool2 = false;
let Bool2 = true;
const comb2 = bool2 || Bool2; //Devolvera siempre true si una o más condiciones es true.
console.log(comb2);
//Resultado: true



  /* Desigualdad */
let DesigualdaD = "----------Desigualdad----------";
console.log(DesigualdaD);


let a = 20;
let b = 50;
const c = 20 !== 50;
console.log(c);
//Resultado: true



  /* String */
let StrinG = "------------String-------------";
console.log(StrinG);


let stri = "Soy una string,";
let Stri = " Soy otra string.";
const Str = stri + Stri;
console.log(Str);
//Resultado: Soy una string, Soy otra string.



  /* Operadores */
let OperadoreS = "----------Operadores-----------";
console.log(OperadoreS);


let yy = 50;
let YY = 77;
const opera = (yy === 98) && (YY === 77);  //Devolvera siempre false si una o más condiciones son false.
console.log(opera);
//Resultado: false

let xx = 50;
let XX = 77;
const oper = (xx === 100) || (XX === 77); //Devolvera siempre true si una o más condiciones es true.
console.log(oper);
//Resultado: true



  /* Condicionales */
let CondicionaleS = "---------Condicionales---------";
console.log(CondicionaleS);


let suscriptor = true;  //dependera si esta en true o false
if (suscriptor) {
    console.log("Estas Suscrito");
} else {
    console.log("No eres suscriptor");
}
//Resultado: Estas Suscrito

let compra = 10000;
let verificado = false;
  if (compra >= 10000) {
    verificado = true;
    console.log("Articulo adquirido!")
  } else {
    console.log("Saldo insuficiente!")
  }
//Resultado: Articulo adquirido!

let score = 100
  if (score >= 100) {
    console.log("Puntuacion Maxima");
  } else if  (score >= 90) {
    console.log("Excelente"); 
  } else if  (score >= 70) {
    console.log("Buena puntuacion"); 
  } else if (score >= 60) {
    console.log("Bien");
  } else {
    console.log("Necesitas mejorar");
  }
//Resultado: Puntuacion Maxima.

/* Condiciones con Switch */
let dia = "viernes";
switch (dia) {
  case "lunes":
  case "martes":
  case "miércoles":
    console.log("Es un día laboral.");
    break;
  case "jueves":
  case "viernes":
    console.log("Fin de semana")
    break;
  case "sábado":
  case "domingo":
    console.log("Es un día de descanso.");
    break;
  default:
    console.log("Día no reconocido.");
}
//Resultado: Fin de semana.


/* Expresion ternaria */
const puntaje = 4818;
const mensaje = puntaje >= 2000 ? "Puntaje alto: " + puntaje : "Puntaje bajo: " + puntaje;
console.log(mensaje);
//Resultado: Puntaje alto: 4818.

/*
let valor1 = null;
let valor2 = "Hola, mundo!";
let resultado = valor1 ?? valor2;   //Devuelve unicamente el valor del lado derecho solo si el operando del lado izquierdo no es "null" ni "undefined".
console.log(resultado); 
//Resultado: "Hola, mundo!"
*/

const diferenciaE = 18;
const mensajeE = (diferenciaE >= 18) ? "Eres mayor de edad" : "Eres menor de edad"; // ? Se usa para devolver el lado Izquierdo solo si la condición es true
console.log(mensajeE);
// Resultado: "Eres mayor de edad".

const diferenciaX = 17;
const mensajeX = (diferenciaX >= 18) ? "Eres mayor de edad" : "Eres menor de edad"; // : Si la condicion es false, ejecutara el lado Derecho.
console.log(mensajeX);
// Resultado: "Eres menor de edad".



/* Bucle */
let buc = "-------------Bucles------------";
console.log(buc);


let counter1 = 0;
while (counter1 < 5) {
  console.log("***************--------------------");
  counter1++;
}
let counter2 = 0;
while (counter2 < 4) {
  console.log("-----------------------------------");
  counter2++;
}
/* Resultado:  
***************--------------------
***************--------------------
***************--------------------
***************--------------------
***************--------------------
-----------------------------------
-----------------------------------
-----------------------------------
-----------------------------------
*/

for (let i = 0; i < 5; i++) {   //Cuenta sin el 5
  console.log(i);
}
//Resultado: 1 2 3 4 5

for (let i = 0; i <= 5; i++) {  //Cuenta con el 0 por que utiliza el operador >=
  console.log("-" + i);
}
//Resultado: 0 1 2 3 4 5

//Hacia atras
for (let i = 5; i > 0; i--) { 
  console.log(i)
}
//Resultado: 5 4 3 2 1

for (let i = 5; i >= 0; i--) {
  console.log("-" + i)
}
//Resultado: 5 4 3 2 1 0



  /* Array */
let Arr = "-------------Array-------------"
console.log(Arr);


let soyUnArray = [1, 2, 3];
console.log(soyUnArray[0]);
//Resultado: 1

let toDo = ["Tom",  "Mia", "Leon"]; 
console.log(toDo);
//Resultado: ["Tom", "Mia", "Leon"]

let doTo = ["call mom",  "dishes"];
doTo.push("party", "Catuela");  //.push: Agrega multiples valores.
console.log(doTo);
//Resultado: ["call mom", "dishes", "party", "Catuela"]

let frutas = ["manzana", "banana", "naranja"];
let ultimaFruta = frutas.pop(); //.pop: Elimina todos los valores exceptuando el ultimo.
console.log(ultimaFruta);
//Resultado: naranja

let task = ["dishes", 5, "windows", "pepino"];
console.log(task.length); //.length: Cuenta los elementos y valores
//Resultado: 4