"use strict";
/*

    npm i -g typescript                                 (Instalar globalmente TypeScript).
    
    npm init -y                                         (Crea el archivo package.json con valores por defecto).

    npx tsc --init                                      (Crea el archivo tsconfig.json para definir como compilar el codigo de TypeScript).

    tsc -w                                              (Corre el compilador en modo watch cada vez que se guarda lo recarga nuevamente).
    

*/
Object.defineProperty(exports, "__esModule", { value: true });
// Combinations
const number7 = ["ola", 54];
// APIS
const apis1 = 11;
const apis2 = { db: "Datos de la db" };
// STRINGS
const string1 = "Ola";
let string2 = 'Ola';
const string3 = `Ola`;
const string4 = ["Ola1", "Ola2"];
// NUMBERS
const number1 = 50;
let number2 = 50.5;
const number3 = 1.5e-2;
const number4 = 0xA;
const number5 = [1, 2, 3, 4, 5];
// BOOLEANS
const booleans1 = true;
let booleans2 = false;
const booleans3 = [true, false, true];
// UNDEFINED - NULL
const variableU1 = undefined;
let variableU2 = undefined;
const variableN1 = null;
let variableN2 = null;
// ANY
let disney;
disney = "Starwards";
disney = 54;
disney = true;
// OBJECT
const developer = {
    nombre: "Diego",
    gamer: true,
    lenguajes: 2,
    habilidades: ["HTML", "CSS", "JAVASCRIPT", "REACT"],
    TravelToEurope: undefined,
    travelToEEUU: null
};
// FUNCTIONS
function add(a, b) {
    return a + b;
}
const splitt = (a, b) => a / b;
// El "?" significa que una variable no es obligatoria para mandar un dato
function greet(name, age) {
    if (age !== undefined) {
        return `Hola, mi nombre es ${name} y tengo ${age} años`;
    }
    else {
        return `Hola, mi nombre es ${name}.`;
    }
}
function greet2(name, age = 20) {
    return `Hola, mi nombre es ${name} y tengo ${age} años.`;
}
// CLASS
class Persona {
    nombre;
    lenguajes;
    favoriteFood;
    constructor(nombre, lenguajes, favoriteFood) {
        this.nombre = nombre;
        this.lenguajes = lenguajes;
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}. Y conozco estos lenguajes: ${this.lenguajes} y mi comida favorita es ${this.favoriteFood}`);
    }
}
const people1 = new Persona("Diego", ["Js", "React"], "Pizza");
people1.saludar();
class Sorteo {
    nombre;
    ticket;
    reward;
    constructor(nombre) {
        this.nombre = nombre;
    }
    setTicket(ticket) {
        this.ticket = ticket;
    }
    setReward(reward) {
        this.reward = reward;
    }
    getTickect() {
        return this.ticket;
    }
    sortear() {
        return `Para ${this.nombre} el ticket es ${this.ticket}`;
    }
}
let sort = new Sorteo("Diego");
sort.setTicket(7);
sort.setReward("Laptop");
console.log(sort.sortear());
// ENUM
var DiasSemana;
(function (DiasSemana) {
    DiasSemana[DiasSemana["Monday"] = 0] = "Monday";
    DiasSemana[DiasSemana["Tuesday"] = 1] = "Tuesday";
    DiasSemana[DiasSemana["Wednesday"] = 2] = "Wednesday";
    DiasSemana[DiasSemana["Thursday"] = 3] = "Thursday";
    DiasSemana[DiasSemana["Friday"] = 4] = "Friday";
    DiasSemana[DiasSemana["Saturday"] = 5] = "Saturday";
    DiasSemana[DiasSemana["Sunday"] = 6] = "Sunday";
})(DiasSemana || (DiasSemana = {}));
// Values of string and number
var Colores;
(function (Colores) {
    Colores["Rojo"] = "rojo";
    Colores["Verde"] = "verde";
    Colores["Azul"] = "azul";
})(Colores || (Colores = {}));
(function (Colores) {
    Colores[Colores["Num1"] = 1] = "Num1";
    Colores[Colores["Num2"] = 2] = "Num2";
    Colores[Colores["Num3"] = 3] = "Num3";
})(Colores || (Colores = {}));
//# sourceMappingURL=basic.js.map