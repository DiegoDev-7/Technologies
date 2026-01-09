/* 

    !!!!!Clases!!!!!

                onclick                     (para que los elementos funcionen con un boton es necesario ingresar el atributo onclick)
                                                            

        document.getElementsByTagName()     (Selecciona todos los elementos que coincidan con el nombre de una etiqueta HTML.).
                                                document.getElementsByTagName("p");     
                                                                                        Nota: Todas las etiquetas "p"       (No acepta multiples selectores).


        document.getElementsByClassName()   (Selecciona todos los elementos con la clase "mi-clase").
                                                document.getElementsByClassName("mi-clase");  
                                                                                        Nota: Todos las clases "mi-clase"   (No acepta multiples selectores).
                                                                                    

        document.getElementById()           (Selecciona un único elemento que coincida con el atributo id proporcionado).
                                                document.getElementById("mi-id");   
                                                                                        Nota: Un solo elemento con esa id   (No acepta multiples selectores).
        

        document.querySelector()            (Selecciona cualquier tipo de ".clase", "#id", "tag").  Nota: Selecciona solo el primer elemento que coincide con el selector.
                                                document.querySelector("div.mi-clase #pancracio");
                                                                                        Nota: Se pueden seleccionar multiples selectores   


        document.querySelectorAll()         (Selecciona todos los elementos del DOM).   Nota: Este metodo si puede seleccionar


        document.createElement()            (Crea un elemento en el DOM).


            .innerHTML                      (Permite editar o acceder al contenido de un elemento en el DOM. Sin este elemento no se permiten realizar cambios dentro de HTML).

            
            .innerText                      (Permite modificar los elementos del contenido del texto que los usuarios ven en la pagina. Solo manipula el texto plano que los usuarios ven.).


            .value                          (Se utiliza para establecer un valor en el campo de entrada como un <input>, <textarea> o <select>).
                                            Esta propiedad se utiliza en campos interactivos donde los usuarios ingresan datos.

*/

    /* Elementos con Onclick */
function show() {
    document.getElementById("secret").innerText = "Not telling you.";
}
//Resultado: onclick="show()" permite cambiar la frase ******* a: Not telling you.

function cambio() {
    const lap = document.querySelector("p");
    lap.innerText = "¡This website!"
}
//Resultado: onclick="cambio()" permite cambiar la frase ******* a: Este sitio web!

function defecto() {
    document.getElementById("secret").innerHTML = "*********";
}
//Resultado: onclick="defecto()" Devuelve el texto a como estaba: *********

    //Para cambiar la frase sin onclick
const element = document.getElementById("message");
element.innerHTML = "No Messages."
//Resultado: Cambia ¡New Message! a: No Messages.



    /* Elementos nombres de etiquetas y clases */
function enrriquecer() {
    const enrr = document.querySelector("#mensages2");
    enrr.innerHTML = "Pronombre subido al 100%"
}
//Resultado: permite cambiar Pronombres 22% a: Pronombre subido al 100%


    /* Clases */
function jugar() {
    const jug = document.querySelector(".Mensages3");
    jug.innerHTML = "¡Vamos a jugar!"
}
//Resultado: Cambia juega por ¡Vamos a jugar!

function dsiplay() {
    const claseSelect = document.getElementsByClassName("Mensages5");
    const pa = document.querySelector("h3");
    pa.innerHTML =  " Hay " + claseSelect.length + " Chocolates " + "Derretidos";
}
//Resultado: Hay 3 Chocolates Derretidos

function dsiplay2() {
    const claseSelect2 = document.getElementsByClassName("pt2");
    const pa2 = document.querySelector("h4");
    pa2.innerText = claseSelect2[1].innerHTML;  //Para acceder a los elementos de una lista tambien se puede usar un array [0]
}
//Resultado: Soy un Chocolate


    /* Multiples clases */
function ñuscame() {
    const esca = document.querySelectorAll("p.neww");
    const pr = document.querySelector("h5");
    pr.innerText = esca.length + " Clases de neww";
}
//Resultado: 2 Clases de neww

function ñuscame2() {
    const par = document.querySelector(".inyect1");
    const bl = document.querySelectorAll("p.neww2")
    par.innerHTML = bl.length + " Clases de neww2";
}
//Resultado: 2 Clases de neww2

function ñuscame3() {
    const para = document.querySelector(".inyect2");
    const bla = document.querySelectorAll("p.neww5")
    para.innerHTML = bla.length + " Clases de neww5";
}
//Resultado: 4 Clases de neww5

function multiple() {
    const variasClass = document.querySelector(".Mensages4");
    variasClass.innerHTML = "Drastic change";
}
function multiple() {
    const variasClass = document.querySelector(".Mensages4.sobre");
    variasClass.innerHTML = "Fickind";
}
function multiple() {
    const variasClass = document.querySelector(".Mensages4.sobre.entre");
    variasClass.innerHTML = "Expaind";
}
function multiple() {
    const variasClass = document.querySelector(".Mensages4.sobre.entre.todo");
    variasClass.innerHTML = "Around";
}
//Nota: Para que cada elemento funcione debes eliminar el ultimo.

function gruñeme() {
    const poli = document.getElementsByTagName("h2");
    const des = document.querySelector("header");
    des.innerText = poli.length + " Etiquetas h2";
}