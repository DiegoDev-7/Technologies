/* 

    !!!!!Exportaciones!!!!!

        Export                  (Exporta elementos de un archivo)


        default                 (Exporta un unico valor como su exportacion principal).
                                
                                    //Nota: .export default number;


        as                      (Se utiliza especificamente para renombrar exportaciones y importaciones).

*/

const exportacion = "---------Exportaciones--------";
console.log(exportacion);

const reminder = (mensaje, event) => {
    const reason = "Tiempo para" + event;
    return mensaje + reason;
};

export default reminder; //Exporta un unico valor como su exportacion principal.