"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let arreglo1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arreglo2 = ["HTML", "CSS", "JS"];
console.log(arreglo1.push(11), arreglo2.push("C++"));
let programador = {
    nombre: "Diego",
    tecnolgoias: ["react", "js"],
    tomaAgua: false
};
programador = {
    nombre: "Deigo",
    tecnolgoias: ["C++"],
    tomaAgua: false
};
console.log(programador);
let programador2 = {
    nombre: "federico",
    tecnolgias: ["1", "2"],
    tomaAgua: false
};
let dev = {
    nombre: "Diego",
    tecnologias: ["1", "2"],
    tomaAgua: false
};
let dev2 = {
    nombre: "Sergio",
    tecnologias: ["HTML", "COBOL"],
    lastName: "Alfonoso"
};
function sendEmail(programador) {
    console.log("Este curriculum es de: ", programador.nombre);
}
sendEmail(dev);
//# sourceMappingURL=puzzles.js.map