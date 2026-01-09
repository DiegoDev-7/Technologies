/* 
    !!!!! Array !!!!!

        (Los elementos dentro de [] son índices).
        (Los elementos con una variable ".push" agrega índices).
        (Los elementos con una variable ".pop" elimina índices).

            let soyUnArray = [1, 2, 3];            let toDo = ["Tom",  "Mia", "Leon"];                      let toDo = ["Tom",  "Mia", "Leon"];
            console.log(soyUnArray[0]);            toDo.push("garabato", "Gato");                           toDo.pop("garabato", "Gato");
            //Muestra el valor 1 en la consola.      console.log(toDo);                                       console.log(toDo);
                                                    //Muestra: ["Tom", "Mia", "Leon", "garabato", "Gato"].   //Muestra: ["Tom", "Mia"].
        
                                              
        Destructuracion     (La desestructuración permite extraer elementos de un arreglo u objeto directamente en una sola línea de código, en lugar de hacerlo de forma manual).

                                const numeros = [10, 20, 30, 40];          const numeros = [10, 20, 30, 40];          const numeros = [10, 20, 30, 40];
                                const [primero, segundo] = numeros;        const [, segundo, , cuarto] = numeros;     const [primero, ...resto] = numeros;     //Se utilizan ... para agrupar los elementos restantes y , para ignorarlos.

                                console.log(primero); // 10                console.log(segundo); // 20                console.log(primero); // 10
                                console.log(segundo); // 20                console.log(cuarto);  // 40                console.log(resto);   // [20, 30, 40]


        .map()              (Tiene como funcion transformar cada elemento de un arreglo en una funcion, devolviendo el nuevo arreglo con los resultados de esa trasnformacion).
                                const numeros = [1, 2, 3, 4, 5];
                                const cuadrados = numeros.map(num => num * 2);      //Multiplica los elementos del array * 2
                                console.log(cuadrados); // [2, 4, 6, 8, 10]


        .filter()           (Esta funcion no transforma los elemenetos, sirve para crear elementos con una condicion especifica, para determinar si un elemento debe ser incluido o no).
                                const numeros = [3, 8, 1, 6, 7, 2];
                                const mayoresA5 = numeros.filter(numero => numero > 5);     //Permite llamar a los elementos del array que sean mayores q 5
                                console.log(mayoresA5); // [8, 6, 7]


    !!!!! Template Literals !!!!!

        (Es una forma mas moderna y legible de combinar y sumar strings).

        const diferencia = "Mira el console.log";
        console.log("--> " + diferencia);
        console.log(`--> ${diferencia}!`);

        const e = 5, r = 3;
        console.log(`La suma de ${e} + ${r} es igual a: ${e + r}.`);    //Para los template literals es importante incluir `` y llamar a las variables con ${}

*/

const destructuracion = "-------DESTRUCTURACION--------"
console.log(destructuracion);


/* DESTRUCTURACION */
const [option1, option2, option3, option4] = [
"Pizza,", 
"Hamburger,", 
"Hot Dog,", 
"Sausage with potatoes."
];
console.log(option1, option2, option3, option4);  //Para llamar a las funciones es necesario llamarlos por las options.
//Resultado: Pizza, Hamburger, Hot Dog, Sausage with potatoes.

const materialsHouse = ["Televisor", "Silla", "Mesa", "Sofa", "Cocina", "Sala"];
function getMaterials([firts, secound, third, fourth, Fifth, sixth]) {  //En este caso se agrega una funtion junto con ([]) para llamarlos. Y se utiliza ${} para llamar a cada valor
    console.log(`Para los materiales dentro de una casa se necesita de una ${secound}, un ${fourth} y una ${third} 
    dentro de una ${sixth} y sobre la mesa se puede poner un ${firts} tambien una casa puede contar con una ${Fifth}.`);
}
getMaterials(materialsHouse);
//Resultado: Muestra lo de la consola.

const informacionUsuario = {  //En este caso podemos usar {} para definir cada valor.
firstName: "Carl",
lastName: "Johnson",
age: 26
};
function llamarUsuario({  //Al llamarlos con la funcion se utilzia ({})
    firstName, 
    lastName}) {
    console.log(`Hi mi name is ${firstName} ${lastName}.`)
}
llamarUsuario(informacionUsuario);
//Resultado: Hi mi name is Carl Johnson.

const {   //Se pueden definir diferentes variables y asignarles un valor
    naMe,
    phone,
    address,
    website = "www.slicko/zapateria/en/linea.com"
} = {   //O se le pueden asignar sus valores de esta manera
    naMe: "Gustavo",
    phone: "312-20042352",
    address: "Miami",
}
console.log(naMe);
console.log(phone);
console.log(address);
console.log(website);
//Resultado: Gustavo 312-20042352 Miami www.slicko/zapateria/en/linea.com

const [companyName, ...anyOtherVariable] = [  //Si no queremos desestructurar(nombrar) cada variable utilizamos "...".
'Leo Pizza',
'325-55222154',
'911 SW main',
'EEUU',
'Florida',
'Tacos'
];
console.log(companyName);
console.log(anyOtherVariable);
//Resultado: "Leo Pizza" 
//Resultado: ["325-55222154", "911 SW main", "EEUU", "Florida", "Tacos"]

const lenguajesP = ["Javascript", "Typescript", "Java", "C++", "C", "Python"];
function selectLanguaje([,,, FourtH, , sixtH]) {    //Se utilizan ",,," para omitir valores.
    console.log(`El cuarto lenguaje que seleccionamos es ${FourtH} y el ultimo es ${sixtH}.`)
}
selectLanguaje(lenguajesP);
//Resultado: El cuarto lenguaje que seleccionamos es C++ y el ultimo es Python.

const automoviles = ["Honda", "Toyota", "Kia", "Nissan", "lamborghini", "Chevrolet", "Cadillac",];
if (automoviles[4] === "Hyundai") { //Para llamar a los valores tambien podemos usar [0]
    console.log("Su auto es prestigioso");
}
else if (automoviles[1] === "Jeep") {
    console.log("Su auto tiene valor");
} else {
    console.log(`Este auto ${automoviles[4]} tiene mas prestigio que ${automoviles[1]}.`);
}
//Resultado: Este auto lamborghini tiene mas prestigio que Toyota.`



const mapa = "------------.map()------------"
console.log(mapa)


/* .map() */
let arraY = ['Cuenta', 'las', 'Palabras', 'de', 'cada', 'frase'];
const contador = arraY.map(function (ct) {
    return ct.length;
});
console.log(contador);
//Resultado: [ 6, 3, 8, 2, 4, 5 ]

let food = [ 
"Desayuna", 
"Almuerza", 
"Cena" ];
function getFood ([firts, secound, third]) { 
    const llama = `En la mañana se ${firts}, En la tarde se ${secound}, y en la noche se ${third}`;

    const contador = food.map(word => word.length);

    const contador2 = llama.length;

    console.log(food, contador);
    console.log(llama, contador2);
} 
getFood(food);
/* Resultado:
[ 'Desayuna', 'Almuerza', 'Cena' ] 
 [ 8, 8, 4 ]
En la mañana se Desayuna, En la tarde se Almuerza, y en la noche se Cena 
72
*/

const valuE = [5, 15, 20, 25, 30, 50];
const duplicar = valuE.map(element => element * 2);
console.log(duplicar);
//Resultado: 10, 30, 40, 50, 60, 100


/* .filter() */
const arrayX = ["Diego", "Sebastian", "Cristiano", "Messi", "Neymar"];
const result = arrayX.filter((arra) => arra.length > 6);
console.log(result);
//Resultado: Sebastian, Cristiano


const Template = "------Template Literals-------"
console.log(Template);


const diferencia = "Mira el console.log";
console.log("--> " + diferencia);   //--> Mira el console.log
console.log(`--> ¡¡¡${diferencia}!!!`);  //--> Mira el console.log!!!


const likedBy = person => {
    return `Cancion de: ${person}`;
};
console.log(likedBy`Michael Jackson`);  //Se utilizan `` en lugar de () para llamar a la variable person.
//Resultado: Cancion de: Michael Jackson

const e = 5, r = 3;
console.log(`La suma de ${e} + ${r} es igual a: ${e + r}.`);   //Para los template literals es importante incluir `` y llamar a las variables con ${}
//Resultado: La suma de 5 + 3 es igual a: 8.