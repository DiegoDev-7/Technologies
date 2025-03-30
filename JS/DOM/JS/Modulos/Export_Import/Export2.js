const Nombre = "Skido";

function query(character1, character2, character3) {
    const define = `Valor: ${character1} Calidad: ${character2} Rango: ${character3}`;
    return define
}
console.log(query);

export {Nombre as Name, query as Characters}; //Cambia el nombre de la constante y la funcion con as.