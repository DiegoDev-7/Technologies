/* 

    !!!!!Manipular El DOM!!!!!

        document                            (Es un objeto que representa el documento HTML o XML cargado en el navegador).


    !!!!!Propiedades!!!!!

        document.title                      (Obtiene o establece el título del documento).

        document.head                       (Obtiene el elemento <head> del documento).

        document.body                       (Obtiene el elemento <body> del documento).

        document.URL                        (Obtiene la URL del documento actual).


    !!!!!METODOS!!!!!

        document.querySelector()            (Selecciona todas las especificaciones "tag", ".class", "#id").

        document.querySelectorAll()         (Selecciona todos los elementos del DOM que coinciden con los selectores especificados).

        document.getElementsByTagName()     (Selecciona todos los elementos con el nombre de la etiqueta especificada).

        document.getElementsByClassName()   (Selecciona todos los elementos con la clase especificada).

        document.getElementById()           (Selecciona el elemento con el id especificado).

        document.createElement()            (Crea un nuevo elemento con el nombre de la etiqueta especificada).

        document.createTextNode()           (Crea un nuevo nodo de texto con el contenido especificado).


        .setAttribute()                     (Se utiliza para agregar un nuevo atributo a un elemento HTML o para cambiar el valor).                 //Ejemplo: let parrafo = document.getElementById("mi-id");  parrafo.setAttribute("class", "mi-clase");

        .getAttribute()                     (Se utiliza para obtener el valor de un atributo especificado de un elemento HTML).

        .removeAttribute()                  (Se utiliza para eliminar un atributo especificado de un elemento HTML).                                //Ejemplo: let parrafo = document.getElementById("mi-id");  parrafo.removeAttribute("class");
        
        
    !!!!!MetodosManipularHijos!!!!!

        .appendChild()                      (Agrega un nodo al final de la lista de los hijos de un nodo padre).

        .removeChild()                      (Elimina un nodo hio de un nodo padre).

        .replaceChild()                     (Remplaza un nodo hijo por otro nodo).

        .insertBefore()                     (Inserta un nodo antes de un nodo hijo especifico).


        firstElementChild                   ().

        nextElementSibling                  ().


        .childNodes()                       (Devuelve una coleccion de los nodos hijos de un nodo).

        .firtsChild()                       (Devuelve el primero nodo hijo).

        .lastChild()                        (Devuelve el ultimo nodo hijo).

        .children()                         (Devuelve una coleccion de los elementos hijos de un nodo).

        .parentNode()                       (Devuelve el nodo padre de un nodo).


    !!!!!CSS!!!!!

        setAttribute()                      ().

        classList()                         ().

        .style()                            ().

        .remove()                           ().

        .add()                              ().

        .toggle()                           ().


    !!!!!Eventos!!!!!

        .AddEventListener                   ().

        RemoveEventListener                 ().


        "onclick"                           ().

        "ondblclick"                        ().

        "onscroll"                          ().

        "onchange"                          ().

        "oninput"                           ().


        "touchstart"                        ().

        "touchmove"                         ().

        "touchend"                          ().

        "touchcancel"                       ().


    !!!!!Atributos!!!!!

        .innerHTML()                        ().

        .innerText()                        ().

        .textContent                        ().


        .value()                            ().

        .type()                             ().

        .body()                             ().

        .head()                             ().

*/

const input = document.getElementById("input");
const button = document.getElementById("nuevo-button");
const Ul = document.querySelector("ul");

button.addEventListener("click", () => {
    const texto = input.value;
    const nuevoLi = document.createElement("li");
    nuevoLi.innerText = texto;
    
    const nuevoButton = document.createElement("button");
    nuevoButton.textContent = "Delete";

    nuevoButton.addEventListener("click", () => {
        Ul.removeChild(nuevoLi);
        Ul.removeChild(nuevoButton)
    })

    Ul.appendChild(nuevoButton)
    Ul.appendChild(nuevoLi);
})