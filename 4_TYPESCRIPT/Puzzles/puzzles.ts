let arreglo1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arreglo2: string[] = ["HTML", "CSS", "JS"]
console.log(arreglo1.push(11), arreglo2.push("C++"))



let programador = {
    nombre: "Diego",
    tecnolgoias: ["react", "js"],
    tomaAgua: false
}
programador = {
    nombre: "Deigo",
    tecnolgoias: ["C++"],
    tomaAgua: false
}
console.log(programador)



type Programador = {
    nombre: string,
    tecnolgias: string[],
    tomaAgua: boolean
}
let programador2: Programador = {
    nombre: "federico",
    tecnolgias: ["1", "2"],
    tomaAgua: false
}



interface Developer {
    nombre: string,
    tecnologias: string[],
    tomaAgua?: boolean
}
let dev: Developer = {
    nombre: "Diego",
    tecnologias: ["1", "2"],
    tomaAgua: false
}
let dev2 = {
    nombre: "Sergio",
    tecnologias: ["HTML", "COBOL"],
    lastName: "Alfonoso"
}
function sendEmail(programador: Developer) {
    console.log("Este curriculum es de: ", programador.nombre)
}
sendEmail(dev)