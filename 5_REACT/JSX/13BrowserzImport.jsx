import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './13RenderBrowser' //Para que funcione. El primer elemento en Route tiene que ser la hoja que vamos a renderizar.
import Main from './02Main'
import Eventos from './03Eventos'
import Clases from './04Clases'
import Estilos from './05EstilosCondicionales'
import Condicionales from './06Condicionales'
import FragmentReact from './07ReactFragments'
import ArrayObject from './08ArraysObjetos'
import Entradas from './09Entradas'
import Childrens from './10Childrens'
import UseEffect from './11UseEffect'
import ApiAsync from './12Api_Async'

const Root = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/Main" element={<Main />} />
                <Route path="/Eventos" element={<Eventos />} />
                <Route path="/Clases" element={<Clases />} />
                <Route path="/Estilos" element={<Estilos />} />
                <Route path="/Condicionales" element={<Condicionales />} />
                <Route path="/FragmentReact" element={<FragmentReact />} />
                <Route path="/ArrayObject" element={<ArrayObject />} />
                <Route path="/Entradas" element={<Entradas />} />
                <Route path="/Childrens" element={<Childrens />} />
                <Route path="/UseEffect" element={<UseEffect />} />
                <Route path="/ApisAsync" element={<ApiAsync />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Root