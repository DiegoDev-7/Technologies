/* 

    npm i -g typescript                                 (Instalar globalmente TypeScript).
    
    npm init -y                                         (Crea el archivo package.json con valores por defecto).

    npx tsc --init                                      (Crea el archivo tsconfig.json para definir como compilar el codigo de TypeScript).

    tsc -w                                              (Corre el compilador en modo watch cada vez que se guarda lo recarga nuevamente).
    
*/

// Combinations
const number7: (number | string | boolean | null | undefined)[] = ["ola", 54] 

// APIS
const apis1: number | string | null | undefined = 11
const apis2: { db: string } = { db: "Datos de la db" }



// STRINGS
const string1: string = "Ola"
let string2: string = 'Ola'
const string3: string = `Ola`
const string4: string[] = ["Ola1", "Ola2"]



// NUMBERS
const number1: number = 50
let number2: number = 50.5
const number3: number = 1.5e-2
const number4: number = 0xA
const number5: number[] = [1, 2, 3, 4, 5]



// BOOLEANS
const booleans1: boolean = true
let booleans2: boolean = false
const booleans3: boolean[] = [true, false, true]



// UNDEFINED - NULL
const variableU1: undefined = undefined
let variableU2: undefined = undefined
const variableN1: null = null
let variableN2: null = null



// ANY
let disney: any;
disney = "Starwards"
disney = 54
disney = true



// OBJECT
const developer = {
    nombre: "Diego",
    gamer: true,
    lenguajes: 2,
    habilidades: ["HTML", "CSS", "JAVASCRIPT", "REACT"],
    TravelToEurope: undefined,
    travelToEEUU: null
}



// FUNCTIONS
function add(a: number, b: number): number {
    return a + b
}

const splitt = (a: number, b: number) => a / b

    // El "?" significa que una variable no es obligatoria para mandar un dato
function greet(name: string, age?: number): string {
    if (age !== undefined) {
        return `Hola, mi nombre es ${name} y tengo ${age} años`
    } else {
        return `Hola, mi nombre es ${name}.`
    }
}

function greet2(name: string, age: number = 20): string {
    return `Hola, mi nombre es ${name} y tengo ${age} años.`
}



// CLASS
class Persona {
    nombre?: string
    lenguajes?: string[]
    favoriteFood?: string

    constructor(nombre: string, lenguajes: string[], favoriteFood: string) {
        this.nombre = nombre
        this.lenguajes = lenguajes
        this.favoriteFood = favoriteFood
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}. Y conozco estos lenguajes: ${this.lenguajes} y mi comida favorita es ${this.favoriteFood}`)
    }
}
const people1 = new Persona("Diego", ["Js", "React"], "Pizza")
people1.saludar()

class Sorteo<T, U> {

    private ticket?: T
    private reward?: U
    
    constructor(
        private nombre: string
    ) { }

    setTicket(ticket: T) {
        this.ticket = ticket
    }
    setReward(reward: U) {
        this.reward = reward
    }

    getTickect() {
        return this.ticket
    }

    sortear(): string {
        return `Para ${this.nombre} el ticket es ${this.ticket}`
    }
}
let sort = new Sorteo<number, string>("Diego")
sort.setTicket(7)
sort.setReward("Laptop")
console.log(sort.sortear())



// ENUM
enum DiasSemana {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
    // Values of string and number
enum Colores {
    Rojo = "rojo",
    Verde = "verde",
    Azul = "azul"
}
enum Colores {
    Num1 = 1,
    Num2 = 2,
    Num3 = 3
}



// INTERFACE
interface Persona {
    name: string
    edad: number
}
interface Producto {
    nombre: string
    precio: number
    descripcion?: string
}
interface Comparador {
    (a: number, b: number): boolean
}
interface Personas {
    nombre: string
    edad: number
    saludar(): void
}



// TYPE
type nmbr = number

type People1 = {
    nombre: string
    edad: number
}

type name = string | null

type Producto1 = {
    nombre: string
    precio: number
    description?: string
}

type Comparador1 = {
    (a: number, b: number): boolean
}

type Persona2 = {
    nombre: string
    edad: number
    saludar(): void
}
