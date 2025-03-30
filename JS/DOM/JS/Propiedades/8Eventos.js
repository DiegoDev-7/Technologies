/* 

    !!!!!Eventos!!!!!

        onclick                     (Se activa cuando se hace clic en un elemento (utiliza mejor addEventListener)).


        ondblclick                  (Se activa cuando se hace doble clic en un elemento).


        onscroll                    (Se activa cuando se desplaza el contenido de un elemento).


        onchange                    (Se activa cuando el valor de un elemento cambia se utiliza por ejemplo con un <input>, <select> o <textarea> 
                                    que son elementos de entrada).


        oninput                     (Se utiliza especialmente para los elemento de entrada de un <input> y <textarea> para que cada vez 
                                    que cambie algo se actualice al instante).


        AddEventListener            (Agrega un evento a un elemento, permitiendo múltiples eventos del mismo tipo en el mismo elemento).


        RemoveEventListener         (Elimina un evento previamente agregado con addEventListener).


    !!!!!Controles tactiles!!!!!

        touchstart                  (Control tactil para cuando se oprime con el dedo).


        touchmove                   (Control tactil para cuando se desliza con el dedo).


        touchend                    (Control tactil para cuando se termina de qutiar el dedo).


        touchcancel                 (Control tactil para cuando se deliza por afuera de un elemento el dedo y cancela la opcion).

*/

    /* Eventos */
//onclick
const firts = document.getElementById("firts");
firts.onclick = function () {
    firts.style.border = "solid, black";
    firts.style.color = "white";
    firts.style.backgroundColor = "blue";
}

//ondblclick
const secound = document.getElementById("secound");
secound.ondblclick = function () {
    secound.style.border = "solid, black";
    secound.style.color = "white";
    secound.style.backgroundColor = "green";
}

//onscroll
const thirth = document.getElementById("thirth");
thirth.onscroll = function () {
    thirth.style.backgroundColor = "gray";
    thirth.style.color = "white";
    thirth.style.borderColor = "white"
}

//onchange
const rangePut = document.getElementById("range");
const log = document.getElementById("rangeP");
function updatevalue() {
    log.innerText = rangePut.value;
}
rangePut.onchange = updatevalue;

//oninput
const input = document.getElementById("inputo");
const elementoP = document.getElementById("texto");
function mostrarText() {
    elementoP.innerText = input.value.length;
}
input.oninput = mostrarText;

//addEventListener
const fourth = document.getElementById("fourth");
function changeColorFourth() {
    fourth.classList.toggle("dark3thBox");
}
fourth.addEventListener("click", changeColorFourth);   //Se agrega "cLick" ya que cuando se utiliza "addEventListener" se necesita especificar que tipo de dato llamar.

//removeEventListener
const fift = document.getElementById("fift");
function changeColorFift() {
    fift.classList.toggle("blue4thBox");
    fift.removeEventListener("click", changeColorFift);
}
fift.addEventListener("click", changeColorFift);


const item = document.getElementById("container5");
const heightWidth = document.getElementById("heightWidth");
const width1 = document.getElementById("width");
const height1 = document.getElementById("height");
function changeWidth() {
    item.classList.toggle("width");
}
function changeHeight() {
    item.classList.toggle("height");
}
heightWidth.addEventListener("click", () => {
    changeHeight();
    changeWidth();
});
width1.addEventListener("click", changeWidth);
height1.addEventListener("click", changeHeight);



    /* Controles Tactiles */
//touchstart
function displayTouchStart() {
    document.getElementById("message1").innerHTML = "Colombia!!";
}
document.getElementById("bandera").addEventListener("touchstart", displayTouchStart);

//touchmove
function displayTouchMove() {
    document.getElementById("message2").innerHTML = "Brasil!!";
}
document.getElementById("Bbrasil").addEventListener("touchmove", displayTouchMove);

//touchend
function displayTouchEnd() {
    document.getElementById("message3").innerHTML = "China!!";
}
document.getElementById("Cchina").addEventListener("touchend", displayTouchEnd);

//touchcancel
function displayMessageTouchCancel() {
    document.getElementById("message4").innerHTML = "Haz Tocado afuera de la pantalla!";
}
document.getElementById("tocame").addEventListener("touchcancel", displayMessageTouchCancel);
/* Adicional */
function displayTouchCancel() {
    document.getElementById("message4").innerHTML = "haz tocado adentro de la pantalla!";
}
document.getElementById("tocame").addEventListener("touchstart", displayTouchCancel);