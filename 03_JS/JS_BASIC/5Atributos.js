/* 

    !!!!!Atributos!!!!!

        .value                    (Se utiliza para establecer un valor en el campo de entrada como un <input>, <textarea> o <select>).
                                    Esta propiedad se utiliza en campos interactivos donde los usuarios ingresan datos.
        

        .type                     (culaquier atributo se le puede cambiar el valor por ejemplo .type)
                                    function pan() {
                                        const recibir = document.getElementById("recibir").value;
                                        const nuevo = document.getElementById("nuevo");
                                        nuevo.type = recibir;   //(.type) Aqui puede ir cualquier atributo.
                                    }                         //Nota: Linea 48 lo explica.

*/

    /* .value */
function register() {
    const showMessage = document.querySelector("p");
    const entrada = document.getElementById("usernameInput").value;

    if (entrada.length < 5) {
        console.log("Nombre demasiado corto!");
        showMessage.innerText = "Nombre demasiado corto!";
    }
    else if (entrada.length <= 15) {
        console.log("Nombre adecuado");
        showMessage.innerText = entrada + ", Nombre adecuado";
    }
    else {
        showMessage.innerText = entrada + " Escribe tu nombre";
    };
};

    /* Atributos */
function colombia() {
    const colombia = document.querySelector("img");
    colombia.src = "/JS/IMG/China.png";
};

function pan() {
    const recibir = document.getElementById("recibir").value;
    const nuevo = document.getElementById("nuevo");
    nuevo.type = recibir;   //Permite ingresar cualquier palabra siempre y cuando sea valida con el atributo .type
};

function CambioImagen() {
    const Change = document.getElementById("pas");
    Change.href = "/JS/DOM/CSS/3Decoraciones.css";   //Permite ingresar cualquier cosa, hasta un link de una hoja de estilo de css.
};