/*

        node:Path               (Funciona para trabajar con rutas de archivos, directorios y manipular rutas).
        
        
        ---------------Propiedades---------------

                sep                     (Muestra el tipo de barra segun el sistema operativo en windows es "\").

                join                    (Permite unir todas las carpetas que le digamos que muestre estas las une automaticamente con un "\").

                basename                (Muestra el ultimo archivo de una carpeta o un archivo).

                extname                 (Muestra el tipo de archivo, .jpg, .png, .txt, .js, etc...).

*/

const path = require("node:path")

//1. Sep.
console.log("1. ", path.sep)
console.log("Muestra la barra separadora segun el SO")
console.log("")

//2. Join.
const filePath = path.join("content", "subfolder", "Folder", "Folder", "Folder1", "test.txt")
console.log("2. ", filePath)
console.log("Esto permite unir las carpetas con una barraseparadora y mostarlas todas juntas como si fueran un fichero")
console.log("")

//3. Basename.
const file = path.basename(__dirname)
const base = path.basename(__filename)
console.log("3. Directory: ", file)
console.log("3. File: ", base)
console.log("Esto permite mostrar el ultimo archivo")
console.log("")

const base2 = path.basename(__filename, ".js")
console.log("4. ", base2)
console.log("Esto permite mostrar el ultimo archivo pero sin los ultimos caracteres.")
console.log("")

//4. extname
const extension = path.extname(__filename)
console.log("5 ", extension)
console.log("Muestra el tipo de archivo")
