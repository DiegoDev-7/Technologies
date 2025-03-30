/*

    !!!!!Metodos!!!!!

         typeof              (Muestra el tipo de dato de una variable).

         intanceof           (Se utiliza para verificar si un objeto es una instancia de una clase o de una función constructora específica.
                             Devuelve true si el objeto es una instancia de la clase o función constructora, y false en caso contrario).

         write()             (Se utiliza para cambiar sobreescribir contenidos dentro de ("")).

         charAt()            (Selecciona caracteres que estan dentro de una string, basado en un índice).

         startsWith()        ().

         .fill()             ().

         .arc()              ().

         .beginPath()        ().

         Object.keys() 	     (Devuelve un array con el nombre(claves) de las propiedades enumerables propias de un objeto).

         .values()           (Devuelve un array con el valor de las propiedades enumerables propias de un objeto).

         .entries()          (Devuelve un array de pares (clave-valor) de las propiedades enumerables propias de un objeto).
			                    //Nota: devuelve keys y


      !!!Strins!!!

         .toLowerCase()      (Devuelve el valor de una cadena que la convierte a minúsculas).

         .toUpperCase()      (Devuelve el valor de una cadena que la convierte a mayusculas).

         .slice()            (Elimina elementos .slice(1, 3), aqui elimina el elemento 2 y 3).
                                //Nota: Elimina y agrega elementos (se eleminan elementos con numbers y agregan con una string

         .splice()           (elimina y agrega elementos (se eleminan elementos con numbers y agregan con una string)).    

         .replace()          (Se utiliza para remplazar una parte de una cadena de texto por otra /\s+/).
                                "/" "/" Estos son los delimitadores que indican el inicio y el final de la expresión regular.
                                "\s" Este es un metacaracter que representa cualquier carácter de espacio en blanco. (\t) Tabulaciones (\n) Saltos de línea.
                                "+": Este es un cuantificador que indica "uno o más" del carácter que significa que coincidirá con uno o más espacios en blanco consecutivos.
                                "g": Este es un modificador que significa "global". Indica que la búsqueda debe realizarse en todo el string, no solo en la primera coincidencia. 
                                     Sin este modificador, solo se reemplazaría la primera ocurrencia.
                                
         .indexOf()          (Se utiliza para buscar la primera aparición de un valor en una cadena o array y devuelve el indice de esa posicion, si no se encuentra devuelve -1).

         .split()            (Se utiliza en cadenas (strings) para dividir una cadena en un array utilizando un separador).


      !!!Arrays!!!

         shift()             (Elimina el primer elemento de un array).

         unshift()           (Agrega valores a un array dentro de el primer elemento del array).
            
         join()              (Remplaza los elementos que estan con una , por algun elemento que se introduzca en join()).

         concat()            (se utiliza para fusionar dos o más matrices. Este método no modifica las matrices existentes, sino que devuelve una nueva matriz).

         toString()          (convierte los arrays en strings).

         map()               (Tiene como funcion transformar cada elemento de un arreglo en una funcion, devolviendo el nuevo arreglo con los resultados de esa trasnformacion).

         .set()              (Set, automáticamente verifica si el valor ya está presente. Si ya está presente, no lo agrega nuevamente).

         .has()              (verifica si un elemento existe en un array).

         .size()             (Es como el length pero para arrays).

         .from()             (Transforma un elemento set a un array).

         .get()              (Busca un valor y lo muestra en la consola)

         .sort()             (Ordena los elementos de un array y devuelve el array ordenado).

         .forEach()          (Ejecuta la función indicada una vez por cada elemento del array.).

         
    !!!!!Alertas!!!!!

         window              (Repesenta una ventana del navegador).

         alert               (Muestra un mensaje de alerta al usuario).

         prompt              (Muestra un mensaje de confirmación al usuario y devuelve el valor ingresado).

         confirm             (Representa un cuadro de dialogo en que contiene dos botones: "Aceptar" y "Cancelar").

         open                (Se utiliza para abrir una ventana sobre alguna direccion que querramos).

         close               (Se utiliza para cerrar una ventana que tengamos abierta con open).


    !!!!!Calcular!!!!!

         Math.floor          (Redondea un numero hacia abajo, de un numero decimal al entero mas cercano pero hacia abajo.
                                console.log(Math.floor(45.99)) //Resultado 45).


         Math.random         (Selecciona numeros aleatorios).


         Math.round()        (Si hay un numero decimal lo redondea al numero mas cercano).
                                console.log(Math.round(5.4), Math.round(5.6), Math.round(-5.95)) //Resultado: 5, 6, -6.


         sqrt()              (Devuelve la raíz cuadrada de un número).
                                console.log(Math.sqrt(64)) //Resultado: 8.

*/

const metodos = "-------------Metodos-----------";
console.log(metodos);
console.log(typeof metodos); //Muestra el tipo de dato de la variable metodos.

//.charAt()
let selectCharacter = "Hola Mundo!";
let primerCaracter = selectCharacter.charAt(0); //Selecciona caracteres que estan dentro de una string
console.log(primerCaracter);
//Resultado: "H"

    /* Strings */
const stringS = "----Strings----";
console.log(stringS);
//.toLowerCase()
let Mayusculas = "MAYUSCULAS";
console.log(Mayusculas.toLowerCase());
//Resultado: "mayusculas"

//.toUpperCase()
let Minusculas = "minusculas";
console.log(Minusculas.toUpperCase());
//Resultado: "MINUSCULAS"

//.slice() 
let cadena1 = "Caracteres por menos dos";
let cadena2 = cadena1.slice(10, -2);      //Elimina los caracteres de izquierda a derecha, donde 10 elimina 10 Caracteres de la izquierda y -2 elimina 2 caracteres de la derecha.
console.log(cadena2);
//Resultado: por menos d

//.replace()
let cambioTexto = "Hola, mundo!";
let nuevoTexto = cambioTexto.replace("mundo", "JavaScript");  //Remplaza la string "mundo" por "JavaScript".
console.log(nuevoTexto); 
//Resultado: "Hola, JavaScript!"

//.indexOf()
let texto = "Hola, mundo!";
let indice = texto.indexOf("mundo"); // Busca la palabra "mundo"
console.log(indice); 
//Resultado: 6  //Esto se da ya que el espacio que hay para llegar a "mundo" son 6. Hola, 

//.split()
let comas = "call, mom, for, you, help";
let resultado = comas.split(", ");   //Remplaza las , y los convierte en arrays
console.log(resultado);
//Resultado: ["call", "mom", "for", "you", "help"]


    /* Arrays */
const Arrays = "-----Arrays----";
console.log(Arrays);
//.shift()
let extraccion = ["a", "b", "c"];
let eliminado = extraccion.shift();      //Extrae un elemento y lo quita del todo.
console.log(eliminado); // "a" (el primer elemento)
console.log(extraccion); // ["b", "c"] (el arreglo restante)
//Resultado: a, ["b", "c"]

//.unshift()
let agregar = [2, 3, 4];
let nuevaLongitud = agregar.unshift("a", 1); // Agrega la palabra "a" y el numero 1
console.log(agregar); // [1, 2, 3, 4]
console.log(nuevaLongitud); // 4 (longitud del arreglo)
//Resultado: ["a", 1, 2, 3, 4], 5

//.join()
let numerosUnidos = [1, 2, 3, 4];
let unir = numerosUnidos.join("-"); // Une los elementos separados por un guion
console.log(unir); // "1-2-3-4"
//Resultado: 1-2-3-4

//.concat()
const array1 = ['a', 'b', 'c'];
const array2 = ['4', '5', '6'];
const array3 = array1.concat(array2);
console.log(array3);
//Resultado: ["a", "b", "c", "4", "5", "6"]

//.toString()
let strin = [5, 10, 15, "tra"];
let resultStrin = strin.toString();
console.log(resultStrin);
//Resultado: "5,10,15,tra"



    /* Alertas */
//alert, prompt
function clicke1() {
    let name = prompt("Ingresa tu nombre!");    //Muestra un mensaje de texto y solicita al usuario que ingrese un valor.
    alert("Bienvenido de nuevo: " + name);      //Muestra un mensaje de texto.
}

//window, confirm
function clicke2() {
    sing1 = window.prompt("Ingresa tu nombre!");    //window representa una ventana del navegador.
    sing2 = alert("Bienvenido de nuevo " + sing1);
    sing3 = alert(sing1 + "! Te vez muy bien hoy");
    sing4 = window.confirm("¿Deseas continuar?");   //confirm representa un cuadro de dialogo en que contiene dos botones: "Aceptar" y "Cancelar"
}

//write
function newContent() {
    document.write(     //Cambia el contenido por lo que esta dentro de la string.
        "<h1>Quita el contenido viejo - Agrega el contenido nuevo!</h1>"
    )
}

//open, close
function clicke() {  
    let nuevaVentana = window.open("https://developer.mozilla.org/es/docs/Web/API/Document/write", "_blank", "width=800,height=600");   //Abre una ventana.
    setTimeout(() => {
        nuevaVentana.close();   //Cierra la ventana después de 10 segundos.
    }, 10000);
}