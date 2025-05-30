/* 

    !!!!!Cambio del CSS!!!!!

        setAttribute()            (Se utiliza para modificar atributos de un elemento HTML (Se pueden cambiar varios atributos como:
                                    clases, id, src, alt, href, width, height. Entre otros)).
                                                                                            //Nota: Ejemplo linea 38

        classList()               (Permite manipular clases de un elemento, se pueden añadir, quitar o alternar clases con (.remove, .add, .toggle)).


        .style()                  (Permite acceder y modificar los estilos del CSS).


        .remove()                 (Elimina clases de un elemento).


        .add()                    (Agrega clases a un elemento).
        

        .toggle()                 (Añade o elimina una clase si ya existe (Activa/Desactiva)).

*/

    /* Cambiar CSS */   
//Firts three buttons
function turnBold() {
    const el = document.querySelector("p");
    el.setAttribute("class", "bold");
}
function turnItalic() {
    const el = document.querySelector("p");
    el.setAttribute("class", "italic");
}
//Estilos
function Estilos() {
    const pe = document.querySelector("p");
    pe.style.color = "red";
    pe.style.fontSize = "x-large";
    pe.style.display = "flex";
    pe.style.alignItems = "center";
    pe.style.justifyContent = "center";
}



    /* Cambiar atributos del HTML */
//Image, cambia los atributos de la imagen de china por la bandera de brasil junto con su tamaño
const img = document.querySelector("img");
img.setAttribute("src", "/JS/IMG/Brasil.png");
img.setAttribute("alt", "Bandera de brasil");
img.setAttribute("width", "300px");
img.setAttribute("height", "200px");



    /* gregar clases add, remove, toggle */
//add, remove
const imag = document.getElementsByClassName("banderaBrasil");
img.classList.add("Bandera", "China");

const p = document.getElementById("parrafoBandera");
p.classList.add("destacado", "importante"); //Agrega clases.
p.classList.remove("importante");   //Elimina clases.

//Toggle
function inpuT() {
    const ra = document.getElementById("inpuTo")
    ra.classList.toggle("contorno");    //Desactiva y Activa el css
};