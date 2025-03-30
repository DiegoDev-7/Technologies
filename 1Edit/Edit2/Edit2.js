/* import os from "/Windows/System32" */
function verificarNumero() {
    let numeroIngresado = parseInt(document.getElementById("numeroInput").value);
    const random = Math.floor(Math.random() * 5) + 1;
    const createElement = document.createElement("p")

    if (numeroIngresado === random) {
        document.getElementById("resultado").textContent = "Te salvaste";
    } else {
        document.getElementById("resultado").textContent = "Perdiste";
        console.log(random)
    }
}