/* 

    !!!!!Editar el DOM!!!!!

        .body     .head             (hace referencia al elemento <body> y <head> del documento).


        firstElementChild           (Devuelve el primer elemento hijo del nodo).


        .nextElementSibling         (Devuelve el siguiente elemento hermano del nodo).

        
        .createElement              (Crea un nuevo elemento HTML especifico por su etiqueta).


        .removeChild                (Elimina un hijo del DOM).


        .appendChild                (Se utiliza para agregar un nuevo nodo hijo a un elemento del DOM existente).

*/

    /* Editor del DOM */
//Accede al primer elemento
let week = document.body.firstElementChild;
week.innerHTML = "Week 13";
//Tambien se puede acceder al primer elemento del hijo de body de esta manera:
/* 
let Firts = document.body.children[0];          let Firts = document.body;
Firts.innerHTML = "Week 13";                    Firts.firstElementChild.innerHTML = "Week 13";
*/

//Accede al segundo elemento
let heading = document.querySelector("h1"); //Se selecciona el h1 para identificar cual es el siguiente elemento
let siblingElement = heading.nextElementSibling;
siblingElement.innerHTML = "segundo elemento";

//Accede al tercer elemento
let three = document.body.children[2];
three.innerHTML = "Tercero";

//Crea un nuevo elemento "p" y le asigna un texto "nuevo"
let paragraph = document.createElement("p");
paragraph.innerHTML = "Crea un nuevo p";
document.body.appendChild(paragraph);

//Crea un elemento con el button
const parrafo = document.createElement("p");
parrafo.innerHTML = "Mag: Movie later?";
function showMessages() {
    let bodyElement = document.getElementById("parent");
    bodyElement.appendChild(parrafo);
}
//Crea multiples etiquetas "p"
function showMessages2() {
    const parrafa = document.createElement("p");
    parrafa.innerHTML = "Mag: Movie later?";
    let bodyE = document.getElementById("pariente");
    bodyE.appendChild(parrafa);
}

//Elimina el "h4"
const obdyElement = document.getElementById("patente");
const parR = document.getElementById("child");
obdyElement.removeChild(parR);
