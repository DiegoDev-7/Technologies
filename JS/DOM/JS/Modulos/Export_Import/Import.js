/* 

    !!!!!Importaciones!!!!!

        Import                  (Se utiliza para importar funciones, objetos o valores de otros modulos).

        
        from                    (Se utiliza para especificar la ubicacion, Indica de donde proviene el modulo que se esta importando).

                                    //Nota: import number from "./Edit2";


        as                      (Se utiliza especificamente para renombrar exportaciones y importaciones).
                                
*/

const importacion = "---------Importaciones--------";
console.log(importacion)

import reminder from './Export.js';
console.log(reminder(" archivoImport.js", "cargar"));

import {Name, Characters} from './Export2.js';
console.log(Characters(Name("300M", "Legendary", "Leyend")));