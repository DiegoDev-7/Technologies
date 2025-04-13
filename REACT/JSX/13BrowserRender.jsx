import "../src/13Browser.css"

const App = () => {
    return (
        <>
            <div className='BordeLinks'>
                <nav className='LinkContainer'>
                    <div>
                        <h1 className='h1'>Home Page</h1>
                    </div>
                    <div className='Container'>
                        <a href="/Main">1. Main</a>
                    </div>
                    <div className="Container">
                        <a href="/Eventos">2. Eventos</a>
                    </div>
                    <div className="Container">
                        <a href="/Clases">3. Clases</a>
                    </div>
                    <div className="Container">
                        <a href="/Estilos">4. Estilos</a>
                    </div>
                    <div className="Container">
                        <a href="/Condicionales">5. Condicionales</a>
                    </div>
                    <div className="Container">
                        <a href="/FragmentReact">6. FragmentReact</a>
                    </div>
                    <div className="Container">
                        <a href="/ArrayObject">7. ArrayObject</a>
                    </div>
                    <div className="Container">
                        <a href="/Entradas">8. Entradas</a>
                    </div>
                    <div className="Container">
                        <a href="/Childrens">9. Childrens</a>
                    </div>
                    <div className="Container">
                        <a href="/UseEffect">10. UseEffect</a>
                    </div>
                    <div className="Container">
                        <a href="/ApisAsync">11. ApisAsync</a>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default App