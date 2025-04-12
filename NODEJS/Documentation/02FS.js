/* 

    node:fs (fs = FileSystem)               (Funciona para interactuar con el sistema de archivos donde permite realizar operaciones como leer, escribir, eliminar, renombrar y trabajar con directorios)


    ---------------Propiedades---------------

        -----Lectura-----

            readFileSync                    (Permite leer un fichero en el OUTPUT)


        -----Escritura-----

            writeFileSync                   (Permite crear un fichero nuevo si no lo existe y agregar contenido. Y si ya existe puede sobreescribir contenido sobre el)


        -----Agregar contenido-----

            appendFileSync                  (Permite agregar datos en una nueva linea con "\n").


        -----Eliminar archivos-----

            unlinkSync                      (Permite eliminar un archivo).


        -----Verificar existencia-----

            existsSync                      (Permite verificar si un archivo existe con funcion if else).


        -----Directorios-----

            mkdirSync                       (Crea una carpeta).

            readdirSync                     (Permite mostrar las carpetas que existen en el directorio en el que estamos posicionados).


        -----Renombar-----

            renameSync                      (Permite cambiarle el nombre a un archivo).


        -----Información-----

            statSync                        (Se obtiene informacion de el archivo o directorio).


                    //nota: Todas las funciones anteriores pueden ser ejecutadas de manera asincrona tambien.

*/

const fs = require('fs');

//readFile
const arAc = fs.readFileSync('./NODEJS/Documentation/01OS.js', 'utf-8')
console.log(arAc)

//writeFile
fs.writeFileSync('./NODEJS/Documentation/nuevo.js', "CONTENIDO AGREGADO", 'utf-8')

//appendFileSync
fs.appendFileSync("./NODEJS/Documentation/nuevo.js", "\nNueva linea.")  // "\n" representa una nueva linea para escibir en el documento. 

//unlinkSync
// fs.unlinkSync("./nombre del archivo.js")

//existSync
if (fs.existsSync("./NODEJS/Documentation/nuevo.js")) {
    console.log("El archivo nuevo.js existe")
} else {
    console.log("EL archivo no existe")
}

//mkdirSync
// fs.mkdirSync("NuevoDir")

//readFileSync
const files = fs.readdirSync("./")
console.log("ls: ", files)

//renameSync
// fs.renameSync("nuevo.js", "NuevoArchivo.js")

//statSync
const stats = fs.statSync("./NODEJS/Documentation/02FS.js")
console.log(stats)