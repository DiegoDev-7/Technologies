/* 

    ---------------document---------------

        -----Select Nodes-----

            document.getElementById("id")                   (Devuelve el elemento con el ID especificado. Solo uno).

            document.querySelector("#id")                   (Devuelve el primer elemento que coincida con el selector CSS indicado).

            document.querySelectorAll(".class")             (Devuelve todos los elementos que coincidan con el selector CSS, en una NodeList(estatica)).

            document.getElementsByClassName("class")        (Devuelve una coleccion HTML en vivo con todos los elementos que tienen esa clase).

            document.getElementsByTagName("tag")            (Devuelve todos los elementos con esa etiqueta en una coleccion HTML).

            document.body                                   (Devuelve el elemento <body> del documento).


        -----Create Nodes-----

            document.createElement("tag")                   (Crea un nuevo elemento HTML con la etiqueta indicada).

            document.createTextNode("text")                 (Crea un nodo de texto (sin etiquetas HTML)).

            document.importNode(node, deep)                 (Clona un nodo de otro documento si deep es true, tambien copia los hijos).

            .cloneNode(deep)                                (Clona el nodo, si deep es true clona tambien los hijos).

            .appendChild(node)                              (Agrega un nodo hijo al final de otro nodo).

            .insertBefore(newNode, referenceNode)           (Inserta un nuevo nodo antes del nodo de referencia).

            .append(newNode)                                (Inserta uno o mas nodos al final (puede aceptar nodos o texto directamente)).

            .prepend(newNode)                               (Inserta uno o mas nodos al inicio del elemento).

            .after(newNode)                                 (Inserta el nuevo nodo despues del nodo actual).

            .before(newNode)                                (Inserta el nuevo nodo antes del nodo actual).

            .replaceWith(newNode)                           (Reemplaza el nodo actual por otro nodo o texto).

            .remove()                                       (Elimina el nodo actual del DOM).


        -----Atributes and properties-----

            element.getAttribute("attribute")               (Obtiene el valor de un atributo HTML en forma de string).

            element.setAttribute("attribute", "value")      (Establece o actualiaz el valor de un atributo HTML).

            element.removeAttribute("attribute")            (Elimina un atributo del elemento).

            element.hasAttribute("attribute")               (Devuelve true si el atributo existe en el elemento).

            .toggleAttribute("attribute")                   (Añade el atributo si no existe, o lo elimina si ya está).

            HTMLElement.dataset("data")                     (Accede a los atributos personalizados que empiezan con data. Example: Si el HTML tiene data-id="123").

            .className                                      (Devuelve o establece el nombre completo de clases como un solo string).

            .value                                          (Devuelve o establece el valor de un input, select o textarea).

            .type                                           (Devuelve o establece el tipo de un <input>).

            .innerHTML                                      (Devuelve o establece el contenido HTML del elemento (puede incluir etiquetas)).

            .innerText                                      (Devuelve o establece solo el texto visible del elemento (sin etiquetas HTML)).


        -----classList-----

            element.style.property = "value"                (Modifica directamente una propiedad de estilo en línea del eleemnto).

            element.classList.add("class")                  (Añade una clase CSS al elemento).

            element.classList.remove("class")               (Quita una clase CSS del elemento).

            element.classList.toggle("class")               (Añade la clase si no existe o la quita si ya esta).

            element.classList.contains("class")             (Devuelve true si el elemento tiene la clase).

            element.classList.replace("oldC", "newClass")   (Reemplaza una clase por otra).

        
        -----Scroll and Position-----

            element.getBoundingClientRect()                 (Devuelve las coordenadas y tamaño del elemento respecto a la ventana).

            offsetWidth, offsetHeight                       (Ancho y alto del elemento incluyendo bordes y padding).

            clientWidth, clientHeight                       (Ancho y alto sin bordes, pero con padding).

            scrollWidth, scrollHeight                       (Tamaño completo del contenido, incluso lo que no está visible por scroll).

            scrollTop, scrollLeft                           (Cantidad de scroll hecho en el eje vertical u horizontal).


        -----Event Listeners-----

            element.addEventListener(type, function)        (Asocia un evento al elemento).

            element.removeEventListener(type, function)     (Elimina un evento previamente asignado).

            -----mouse-----

                onclick                                     (1 Click).

                ondblclick                                  (2 clicks).

                onmousedown                                 (Se presiona boton del mouse).

                onmouseup                                   (Se suelta el botón).

                onmousemove                                 (El mouse se mueve sobre el elemento).

                onmouseenter                                (El mouse entra al area del elemento).

                onmouseleave                                (El mouse sale del área).

                onmouseover                                 (El mouse pasa sobre el elemento o hijos).

                onwheel                                     (Se usa la rueda del mouse).

            -----keyboard-----

                onkeydown                                   (Se presiona una tecla).

                onkeyup                                     (Se suelta la tecla).

            -----Form-----

                oninput                                     (Se escribe en un input).

                onchange                                    (Cambia el valor del input y pierde el foco).

                onsubmit                                    (Se envía el formulario).

                onreset                                     (Se reinicia el formulario).

                onfocus                                     (El input gana el foco).

                onblur                                      (El input pierde el foco).

                oninvalid                                   (El input es inválido).

                onselect                                    (Se selecciona texto en un input).


        -----Navigate Nodes-----

            parentNode                                      (Devuelve el nodo padre del eleemnto actual).

            childNodes                                      (Devuelve una NodeList con todos los nodos hijos, incluidos texto, comentarios, etc).

            firstChild                                      (Devuelve el primer hijo (puede ser texto, comentario o elemento)).

            lastChild                                       (Devuelve el último hijo (también puede ser nodo de texto)).

            nextSibling                                     (Devuelve el nodo hermano siguiente (puede ser nodo de texto)).

            previousSibling                                 (Devuelve el nodo hermano anterior (puede ser nodo de texto)).

            children                                        (Devuelve una HTMLCollection de los elementos hijos (no incluye ndoos de texto o comentarios)).

            firstElementChild                               (Devuelve el primer hijo que sea un elemento HTML).

            lastElementChild                                (Devuelve el ultimo hijo que sea un elemento HTML).

            previousElementSibling                          (Devuelve el hermano anterior que sea un elemento).

            nextElementSibling                              (Devuelve el hemrano siguiente que sea un elemento).

*/

console.log("---------------Select Nodes-------------------")

console.log("--getElementById--")
const title = document.getElementById("title")

console.log("--querySelector--")
const btn = document.querySelector(".btn")

console.log("--querySelectorAll--")
const items = document.querySelectorAll("li")

console.log("--getElementsByClassName--")
const boxes = document.getElementsByClassName("box")

console.log("--getElementsByTagName--")
const allDivs = document.getElementsByTagName("div")

console.log("--body--")
const body = document.body
console.log(body)



console.log("---------------Create Nodes-------------------")

console.log("--createElement--")
const div = document.createElement("div")

console.log("--createTextNode--")
const text = document.createTextNode("Hola mundo")

console.log("--importNode--")
const clone = document.importNode(div, true)

console.log("--cloneNode--")
const copy = original.cloneNode(true)

console.log("--appendChild--")
div.appendChild(text)

console.log("--insertBefore--")
parent.insertBefore(newNode, referenceNode)

console.log("--append--")
div.append("Texto plano", anotherDiv)

console.log("--prepend--")
div.prepend(header)

console.log("--after--")
div.after(p)

console.log("--before--")
div.before(h2)

console.log("--replaceWith--")
oldParagraph.replaceWith(newParagraph)

console.log("--remove--")
btn.remove()



console.log("---------------Atributes and properties-------------------")

console.log("--getAttribute--")
const src = img.getAtribute("src")

console.log("--setAttribute--")
img.setAttribute("src", "newImage.png")

console.log("--removeAttribute--")
img.removeAttribute("src")

console.log("--hasAttribute--")
img.hasAttribute("src")

console.log("--toggleAttribute--")
img.toggleAttribute("src")

console.log("--dataset--")
const id = card.dataset.id

console.log("--className--")
div.className = "container"

console.log("--value--")
input.value = "Texto de ejemplo"

console.log("--type--")
input.type = "email"

console.log("--innerHTML--")
div.innerHTML = "<h1>Hola</h1>"

console.log("--innerText--")
div.innerText = "Hola mundo"



console.log("---------------classList-------------------")

console.log("--style--")
div.style.color = "red"

console.log("--classList.add--")
div.classList.add("active")

console.log("--classList.remove--")
div.classList.remove("active")

console.log("--classList.toggle--")
div.classList.toggle("active")

console.log("--classList.contains--")
div.classList.contains("active")

console.log("--classList.replace--")
div.classList.replace("oldClass", "newClass")



console.log("---------------Scroll and Position-------------------")

console.log("--getBoundingClientRect--")
const position = div.getBoundingClientRect()

console.log("--offsetWidth--", "offsetHeight")
console.log(div.offsetWidth, div.offsetHeight)

console.log("--clientWidth--", "clientHeight")
console.log(div.clientWidth, div.clientHeight)

console.log("--scrollWidth--", "scrollHeight")
console.log(div.scrollWidth, div.scrollHeight)

console.log("--scrollTop--", "scrollLeft")
console.log(div.scrollTop, div.scrollLeft)



console.log("---------------Event Listeners-------------------")

console.log("--addEventListener--")
btn.addEventListener("click", () => { alert("Click!") })

console.log("--removeEventListener--")
btn.removeEventListener("click", () => { alert("Adios!") })

console.log("---------------mouse-------------------")

console.log("--onclick--")
btn.onclick = () => { alert("Click!") }

console.log("--ondblclick--")
btn.ondblclick = () => { alert("Doble click!") }

console.log("--onmousedown--")
btn.onmousedown = () => { alert("Presionado!") }

console.log("--onmouseup--")
btn.onmouseup = () => { alert("Soltado!") }

console.log("--onmousemove--")
btn.onmousemove = () => { alert("Movido!") }

console.log("--onmouseenter--")
btn.onmouseenter = () => { alert("Entrado!") }

console.log("--onmouseleave--")
btn.onmouseleave = () => { alert("Salido!") }

console.log("--onmouseover--")
btn.onmouseover = () => { alert("Sobre!") }

console.log("--onwheel--")
btn.onwheel = () => { alert("Rueda!") }

console.log("---------------keyboard-------------------")

console.log("--onkeydown--")
btn.onkeydown = () => { alert("Tecla presionada!") }

console.log("--onkeyup--")
btn.onkeyup = () => { alert("Tecla soltada!") }

console.log("---------------Form-------------------")

console.log("--oninput--")
input.oninput = () => { alert("Escribiendo!") }

console.log("--onchange--")
input.onchange = () => { alert("Cambiado!") }

console.log("--onsubmit--")
form.onsubmit = (e) => { e.preventDefault(); alert("Enviado!") }

console.log("--onreset--")
form.onreset = () => { alert("Reiniciado!") }

console.log("--onfocus--")
input.onfocus = () => { alert("Foco!") }

console.log("--onblur--")
input.onblur = () => { alert("Perdido foco!") }

console.log("--oninvalid--")
input.oninvalid = () => { alert("Invalido!") }

console.log("--onselect--")
input.onselect = () => { alert("Seleccionado!") }



console.log("---------------Navigate Nodes-------------------")

console.log("--parentNode--")
console.log(element.parentNode)

console.log("--childNodes--")
console.log(element.childNodes)

console.log("--firstChild--")
console.log(element.firstChild)

console.log("--lastChild--")
console.log(element.lastChild)

console.log("--nextSibling--")
console.log(element.nextSibling)

console.log("--previousSibling--")
console.log(element.previousSibling)

console.log("--children--")
console.log(element.children)

console.log("--firstElementChild--")
console.log(element.firstElementChild)

console.log("--lastElementChild--")
console.log(element.lastElementChild)

console.log("--previousElementSibling--")
console.log(element.previousElementSibling)

console.log("--nextElementSibling--")
console.log(element.nextElementSibling)