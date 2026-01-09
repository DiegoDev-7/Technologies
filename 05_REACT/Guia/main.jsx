import React from "react";

const Main = () => {
    const contenedor = {
        display: "flex",
        justifyContent: "center",
        alingItems: "center"
      };
    return (
        <>
            <div style={contenedor}>
                <h1>Aplicacion</h1>
            </div>
            <div style={contenedor}>
                ¡Bienvenido a la aplicacion movil!
            </div>
        </>
    );
};

  /* props nombradas */
const propsNombradas = ({ name = "Diego" }) => {
    return (
      <>
        <h1>Renombramiento</h1>
        <p>{name}</p>
      </>
    );
};

export default Main;
export { propsNombradas };