/* 

    ---------------Importaciones---------------

        import React from 'react';                                  (Se importa la libreria de React para poder usarla en el componente JSX (ya no es necesario)).

        import React, { useState } from 'react';                    (Permite manejar y actualizar el estado en componentes funcionales de JSX de forma reactiva.).

        import React, { useEffect } from 'react',                   (Permite ejecutar efectos secundarios en componentes funcionales, como realizar operaciones después de que el componente ha 
                                                                    renderizado o limpiar recursos cuando el componente se desmonta.).

        import ↓ from 'react-router-dom';                           ("BrowserRouter". Es el componente que envuelve toda la aplicacion y habilita el uso de la API y Utiliza la API de historial 
            { BrowserRouter, Routes, Route, Link,                   del navegador para mantener la interfaz de usuario sincronizada con la URL).
              useLocation, useNavigate  }                           ("Link" Se utiliza para crear enlaces de navegacion en una aplicacion de enrutamiento. Esto permite navegar entre diferentes rutas).
                                                                    ("Routes" Es un contenedor para los componentes Route. Se asegura de que solo una ruta coincida y se renderice a la vez).
                                                                    ("Route" Define una ruta especifica en la aplicacion. Tiene dos props principales:
                                                                        Path: En esta parte la ruta de path y href deben coincidir para que funcionen.
                                                                        element: Se utiliza para definir que mostrar).
                                                                    ("useLocation": Este hook permite acceder a la ubicacion actual del navegador. la ubicacion incluye 2 propiedades:
                                                                        .pathname: Funciona para mostar la informacion sobre la URL actual
                                                                        .search: Funciona para la cadena de consulta incluye los parametros de busqueda que tienen el signo de "?" en la URL).
                                                                    ("useNavigate": Este hook se utiliza para navegar entre diferentes rutas en la aplicacion).


        !!!Hojas!!!

        import Greeting from "./Greeting";                          (Greeting hace parte de otra hoja de jsx la cual se puede importar para poder renderizarla en otra hoja).

        import { componente1, componente2 } from './componentes';   (Se importan multiples componentes nombrados que se van a renderizar en la hoja de JSX).

        import Header, { Recipe } from './componentes';             (En esta importacion se visualiza que hay una importacion predeterminada y otra que es nombrada).


    ---------------Exportaciones---------------

        export default myComponent;                                 (Cuando usamos export default, le dice a la hoja que la exportacion por predeterminada es myComponent
                                                                    lo que permite importarlo sin necesidad de usar llaves {}).

        export const Article = () => {                              (Esta exportacion es nombrada y se llama Article lo que permite hacer una importacion con llaves {}).


    ---------------Return---------------

        return <h1>{5 + 5}</h1>                                     (Se puede hacer operaciones matematicas dentro de las llaves {} para poder mostrar el resultado en la hoja).


    ---------------Props---------------

        props [Numbers]                                             (Para poder llamar a las props es necesario que la hoja tenga el atributo así: snack={654655}).

        props [Bolean]                                              (Para poder llamar a las props es necesario que la hoja tenga el atributo así: nice={true}
                                                                    Y para poder usar un boleano como un texto es necesario usar {String(props.nice)} Esto permite).

        name = ({ value }) => {}                                    (Esto se le llama desestructuración de props, se utiliza para extraer propiedades específicas del objeto props.
                                                                    Esto permite evitar escribir props.value repetidamente a escribir {value} sin necesidad de agregar una prop).

        props.children                                              (Muestra los hijos de un componente dentro de una expresion incrustada. Es decir si tengo 20 etiquetas dentro de un componente
                                                                    Y llamamos a {props.children} mostrara las 20 etiquetas).

        props.elementoNombrado                                      (Es igual que children pero para pasar conteido como hijos es pasarlo como una propiedad regular. Osea como un atributo).


        armas={props.nameGuns}                                      (Esto se llama renombrar una prop, para esto tenemos que pasar el nombre que elijamos y luego la prop a la que queremos renombrar).
        {props.armas}


    ---------------Eventos---------------

        onClick                                                     (Para poder hacer un evento de click ejemplo: un button es necesario que la etiqueta tenga el atributo onClick={handleClick}).

        onChange                                                    (Se utiliza para elementos de un formulario como: <input>, <textarea>, y <select>. Este evento se activa cada vez que el valor
                                                                    de un elemento cambia).

        event                                                       (Contiene información sobre el evento que ocurrió, como el tipo de evento, el elemento que lo desencadenó, y más.).

        target                                                      (es una propiedad del objeto event que se refiere al elemento del DOM que desencadenó el evento. Por ejemplo, si un usuario 
                                                                    escribe en un campo de texto, event.target se referirá a ese campo de texto).

        value                                                       (es una propiedad del objeto target que contiene el valor actual del elemento del DOM. En el caso de un campo de texto, 
                                                                    event.target.value contendrá el texto que el usuario ha escrito.).


    ---------------CSS---------------

        className                                                   (Para definir clases en jsx se utiliza className en lugar de class).

        id                                                          (Es igual que el html).


    ---------------Fragmentos---------------

        <></>                                                       (Forma corta. Aqui no permite agregar propiedades).

        <React.fragment>                                            (Permite agregar propiedades como key para identificar elementos de un .map).


    ---------------Async/await---------------

        .fetch                                                      (Es una función que se utiliza para hacer solicitudes HTTP (como GET, POST, etc.) a un servidor. Devuelve una promesa que se 
                                                                    resuelve con la respuesta de la solicitud).

        .then                                                       (Es un método que se usa para manejar la resolución de una promesa. Se ejecuta cuando la promesa se resuelve correctamente).

        .ok                                                         (Cuando se hace una solicitud a un servidor con fetch(), se recibe una respuesta. Esa respuesta tiene informacion como:
                                                                    Si el servidor respondio bien (exito) / Si el servidor tuvo un error. 
                                                                    ejemplo: Si .ok es true significa que el servidor devolvio un codigo de estado como 200 (se evalua entre 200 y 299
                                                                             Si .ok es false significa que el servidor devolvio un codigo como 404 (no encontrado) o 500 (error interno)).

        .catch                                                      (Es un método que se usa para manejar errores en una promesa. Se ejecuta cuando la promesa se rechaza).

        .json                                                       (Se utiliza para transformar la respuesa de una solicitud HTTP en formato JSON).

        Async                                                       (es una palabra clave que se usa para declarar una función asíncrona. Se utiliza para definir una función que devuelve una Promesa. 
                                                                    Esto significa que cualquier valor devuelto por una función marcada como async se envuelve automáticamente en una Promesa. 
                                                                    Las funciones asíncronas permiten el uso de await dentro de ellas).

        await                                                       (es una palabra clave que se usa para esperar a que una promesa se resuelva y continua con la siguiente linea. 
                                                                    Solo se puede usar dentro de funciones asíncronas declaradas con async).


    ---------------Errores---------------

        try                                                         (En este bloque escribes el código que puede generar un error. Si todo funciona bien, el bloque catch se ignora).

        catch                                                       (Si se produce un error en el bloque try, el control pasa al bloque catch. Aquí puedes manejar el error, por ejemplo, 
                                                                    mostrando un mensaje al usuario con .message o registrando el error o intentando corregirlo de alguna manera.).

        .message                                                    (Se usa para acceder a un mensaje descriptivo relacionado con un error que ha ocurrido. Es decir si lanzamos un error en try y lo
                                                                    atrapamos con catch podemos acceder a el por medio de .message).

        throw                                                       (Se utiliza para lanzar un error de manera explicita. Esto es util para personalizar errores y manejar situaciones especificas
                                                                    Ejemplo para lanzar un error personalizado: throw new Error("")).


    ---------------Obtener---------------

        URLSearchParams                                             (es una API que sirve para trabajar con los parámetros de consulta (query strings) de una URL. Permite crear, leer, actualizar 
                                                                    y eliminar parámetros de consulta de manera sencilla.).

        .get                                                        (El metodo get se usa principalmente para obtener valores de una estructura o parametro especifico).

        .has                                                        (Verifica si un parametro existe).

        .set                                                        (Agrega o actualiza un parametro).

        toString                                                    (Convierte los parametros a una cadena de consulta).


    ---------------Times---------------

        setInterval                                                 (Ejecuta una  funcion repetidamente a intervalos regualres, despues de que haya trasncurrido el tiempo especificado.
                                                                    Es decir lo que se pase adentro de una funcion setInterval se ejecutara repetidamente segun el tiempo propuesto despues de }, time);).

        clearInterval                                               (Detiene la ejecucion repetidade setInterval ejemplo clearInterval(ejecucionDeUnaVariable)).

        setTimeout                                                  (Se utiliza para la ejecucion de una funcion una sola vez despues de cirto tiempo especificado).

        cleartimeout                                                (Si especificamos esta propiedad. Cancelara la ejecucion de setTimeout antes de el tiempo establecido).


    ---------------Diseños---------------


            1.  DOCUMNETO HTML  (index.html)                                                                                                                                                            
                                                                                                                                                                                                                
                <html>                                                                                                                                                                                          
                <head>                                                          (Para importar un elemento JSX en un archivo HTML, se debe usar el atributo type="module"
                    <script type="module" src="./index.jsx"></script> ------>   para poder decirle a la etiqueta script que el archivo esta recibiendo exportaciones e                                          
                </head>                                                         importaciones de otros archivos).                                                                                               
                <body>                                                                                                                                                                                          
                    <div id="root">Loading</div>                      ------>   (Se crea un div con un id="root" para poder renderizar el componente JSX).                                                      
                </body>                                                                                                                                                                                         
                </html>                                                                                                                                                                                         


            2.  COMPONENTE JSX                                                                                                                                                                              3.                                                                                                                                                                                                      4.                                                                                                                       5.                                                                                                                                 6.                                                                      7.

                import React from 'react';                                                                                                                                                                      import React from 'react';                                                                                                                                                                              import React from "react";                                                                                               import React from 'react';                                                                                                         import React from 'react';                                              import React from 'react';
                                                                                                                                                                                                                import Greeting from "./Greeting";  ------>   (Greeting hace parte de otra hoja de jsx la cual se puede importar para poder renderizarla en otra hoja como lo es App).
                const myComponent = () => {                           ------>   (Se crea un componente myComponent que retorna un h1 con el texto "Hello World").                                                                                                                                                                                                                                                       const Article = () => {                                                                                                  export const Article = () => {                                                                                                     const name = "John";                                                    const Message = (props) => {        ------>     (Las props llaman a cualquier atributo sin importar que se importe o donde se encuentre
                    return (                                                                                                                                                                                    const App = () => {                                                                                                                                                                                        retrun (                                                                                                                  return (                                                                                                                       const score = 10;                                                           return (                                    siempre y cuando se utilice el nombre de la propiedad y la prop en la funcion. Example: props.name).
                    <>                                                ------>   (Para poder añadir mas etiquetas se utiliza el componente return() y para añadir un "body" se utiliza el fragment <></>)            return (                                                                                                                                                                                                   <>                                                                                                                        <>                                                                                                                         const nameHeader = <p>This is my life</p>;                                      <ul>
                        <h1>Hello World</h1>;                                                                                                                                                                           <>                                                                                                                                                                                                         <h2>Esto aparece en la funcion Article</h2>                                                                              <p>Articulo</p>                                                                                                         const url = "https://www.google.com";                                                <li>{props.name}</li>
                    </>                                                                                                                                                                                                     <Greeting />            ------>   (Usamos la importacion Greeting para poder renderizar otros componentes que estan dentro de otra hoja de jsx como lo es ./greeting).                                 <p>Esto aparece en la funcion Article</p>                                                                             </>                                                                                                                        const App = () => {                                                             </ul>
                };                                                                                                                                                                                                      </>                                                                                                                                                                                                    </>                                                                                                                     );                                                                                                                               return (                                                                );
                                                                                                                                                                                                                     );                                                                                                                                                                                                     );                                                                                                                   };                                                 (Para usar estas importaciones se necesita usar:                                        <>                                                              };
                export default myComponent;                           ------>   (Se exporta el componente myComponent para poder ser importado en otro archivo donde se renderice el jsx).                      };                                                                                                                                                                                                      };                                                                                                                                                              ------>     "import { Article, Header } from './componentes';"                                          <h1>My name is {name} and {nameHeader}</h1>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    en el archivo donde se va a renderizar el componente Header).                               <h2>I have {score + 10}</h2>                                export default Greeting;
                                                                                                                                                                                                                export default App;                                                                                                                                                                                     const componenteMostrado = () => {                                                                                       export const Header = () => {                                                                                                                  <img src={url} alt="Profile" />
                                                                                                                                                                                                                                                                                                                                                                                                                            return (                                                                                                                  return (                                                                                                                              </>
            3.  COMPONENTE RENDER JSX                                                                                                                                                                                                                                                                                                                                                                                           <>                                                                                                                      <>                                                                                                                              );
                                                                                                                                                                                                                                                                                                                                                                                                                                    <h1></h1>                                                                                                              <h1>Header</h1>                                                                                                          };
                import React from 'react';                            ------>   (Se importa la libreria de React para poder usarla en el componente JSX).                                                                                                                                                                                                                                                                           <Article />             ------>   (Permite renderizar multiples componentes en una sola hoja React).                </>                                                                                                                         export default App;
                import { createRoot } from 'react-dom/client';        ------>   (Se importa la funcion createRoot de la libreria react-dom/client para poder renderizar el componente JSX).                                                                                                                                                                                                                                     </>                                                                                                                 );
                import myComponent from './myComponent';              ------>   (Se importa el componente JSX que se va a renderizar).                                                                                                                                                                                                                                                                                      );                                                                                                                   };
                                                                                                                                                                                                                                                                                                                                                                                                                        };
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   en el archivo donde se va a renderizar el componente Header.
                const rootElement = document.getElementById('root');  ------>   (Se crea una constante rootElement que almacena el elemento con el id="root" del documento HTML).                                                                                                                                                                                                                                       export default componenteMostrado;                            
                const root = createRoot(rootElement);                 ------>   (Se crea una constante root que almacena la funcion createRoot que recibe como parametro la constante rootElement).             
                root.render(<myComponent />);                         ------>   (Se renderiza el componente myComponent con .render para renderizar los componentes que hay en la hoja myComponent).            


            4.  Eventos                                                                                                                                                                                     5.

            import React, { useState } from "react";                                                                                                                                                            import React, { useEffect } from "react";

            const Eventos = () => {                                                                                                                                                                             const Eventos = () => {
                const [count, setCount] = useState(0);                ------>   (Usamos useState para menejar el estado llamado count).                                                                             useEffect(() => {                                                            ------>   (useEffect en esta parte significa cuando entra a la party).
                                                                                                                                                                                                                        console.log('Efecto ejecutado');
                const hadleClick = () => {                                                                                                                                                                              
                    setCount(count => count + 1);                     ------>   (Usamos setCount que es la funcion que permite actualizar el estado                                                                     return () => {                                                          ------>   (El return en esta parte significa cuando Event ya no forme parte de la Party).
                };                                                              y siempre llamamos a count para poder actualizar el estado).                                                                                console.log('DJ apaga la musica y se va');
                                                                                                                                                                                                                        };
                return (                                                                                                                                                                                            }, []);                                                                     ------>   (El array vacío significa que este efecto solo se ejecutará una vez al montar el componente).
                    <>                                                                                                                                                                                          
                        <h1>Eventos</h1>                                                                                                                                                                            return <h1>El DJ esta tocando</h1>;
                        <button onClick={hadleClick}>Click me</button> ------>  (Usamos el evento onClick para poder llamar a la funcion hadleClick).                                                           };
                        <p>{count}</p>
                    </>                                                                                                                                                                                         const App = () => {
                );                                                                                                                                                                                                  const [mostrarDJ, setMostrarDJ] = useState(false); 
            };
                                                                                                                                                                                                                    return (
            export default Eventos;                                                                                                                                                                                     <div>
                                                                                                                                                                                                                            <button onClick={() => setMostrarDJ(true)}>🎧 Mostrar DJ</button>
                                                                                                                                                                                                                            <button onClick={() => setMostrarDJ(false)}>🙅‍♂️ Sacar DJ</button>

                                                                                                                                                                                                                            {mostrarDJ && <Eventos />}
                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                    );
                                                                                                                                                                                                                };

                                                                                                                                                                                                                export default App;

*/