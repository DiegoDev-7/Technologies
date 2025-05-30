/* 
    !!!!!Importaciones!!!!!

    //Nota: Siempre que querramos llamar a un docuemto externo para react tenemos que hacerlo con una importación.

        import React from "react";                            (Se utiliza para llamar a la importacion de react, sin esto el react no funcionaria).

        import { createRoot } from "react-dom/client";        (Se utiliza para llamar al dom).

*/

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

/* Aqui lo que hacemos es llamar a el elemento del html con la id="root" */
const rootElement = document.getElementById("root");

/* Aqui lo que hacemos es que utilizamos la API createRoot y lo renderizamos en el rootElemento creado anteriormente */
const root = createRoot(rootElement);

/* Llama al metodo render del objeto root para montar el componente App en el dom "El compontente se encuentra en App.jsx" */
root.render(<App />);