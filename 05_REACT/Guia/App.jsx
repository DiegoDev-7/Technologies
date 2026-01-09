/* 
  !!!!!Importaciones!!!!!

      import React from "react";        (Se utiliza para llamar a la biblioteca de react, sin esto el react no funcionaria).

      { useState }                      (Permite declarar una variable de estado).

      { useEffect }                     (Permite declarar variables las cuales siempre se podran ejecutar a menos de que tenga []).

  !!!!!Export!!!!!

      export default App;               (Exporta un elemento principal del archivo).

*/
import React, { useState, useEffect } from "react";

/* Main es la exportacion por defecto y dentro de {} es la exportacion nombrada */
import Main, { propsNombradas } from "./main";

const App = () => {
/* Aqui podemos definir la variable showSecret en false */
const [showSecret, setShowSecret] = useState(false);
/* Aqui podemos definir que setShowSecret se desactive y active */
const toggleSecret = () => {
  setShowSecret(!showSecret)
};

/* En esta parte podemos definir el CSS en nuestro react y aplicarlos al dom, "para que esto funcione solo se pueden agregar propiedades con un camelCase" */
const decoraciones = {
  backgroundColor: "gray",
  color: "white",
  fontSize: "20px"
};
const contenedor = {
  display: "flex",
  justifyContent: "center",
  alingItems: "center"
};
const button = {
  border: "2px solid black",
  borderRadius: "50px",
  backgroundColor: "black",
  color: "white",
  fontSize: "20px"
}

/* Declaraciones con if else */
let element;
if (showSecret === true) {
  /* Para llamar a la importacion "Main" es necesario renderizarla con </> */
  element = (
    <>
      <div>
        <br />
        <p style={decoraciones}>Aqui sale el cuerpo que esta en otra hoja de JSS.</p>
        <Main />
      </div>
    </>
  )
}
else {
  element = null; //Si se establece en null a la hora de mostrarlo en la pagina, no saldra nada
}
/* Aqui agregamos lo que querramos al documento */
return (
  <>
    <div style={contenedor}>
      <h1 style={decoraciones}>El mensaje secreto de es...</h1>
    </div>
    <div style={contenedor}>
      <button onClick={toggleSecret} style={button}>Descubre el mensaje secreto</button>
    </div>
    <div style={contenedor}>
      {element}
    </div>
    
    <div>
      {propsNombradas}
    </div>
  </>
);
};

export default App;