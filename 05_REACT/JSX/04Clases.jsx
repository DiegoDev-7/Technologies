import "../src/05index.css"
import "../src/05indexItems.css"

const contentStyle = () => {
    return (
        <>
            <nav>
                <h3 id="h3">Contenido de navegacion</h3>
                <div>
                    <input type="text" placeholder="Search" />
                </div>
                <ul className="menu">
                    <li><a className="elementNav" href="">Camisas</a></li>
                    <li><a className="elementNav" href="">Pantalones</a></li>
                    <li><a className="elementNav" href="">Articulos</a></li>
                    <li><a className="elementNav" href="">Zapatos</a></li>
                </ul>
            </nav>
            <main>
                <h1>TIENDA DE ARTICULOS</h1>
                <p className="p">¡Articulos disponibles en la tienda!</p>
                <section>
                    <ul className="menu contentMenu">
                        <li className="Article color">Airfor1</li>
                        <li className="Article color">Nike Fort</li>
                        <li className="Article color">Justify Nike</li>
                        <li className="Article color">Nike Origens</li>
                        <li className="Article color">Nike Dark</li>
                        <li className="Article color">Airfors One Edition</li>
                        <li className="Article color">Nike edition limited</li>
                        <li className="Article color">Nike Dark limited</li>
                        <li className="Article color">Nike Edition Eminem</li>
                        <li className="Article color">Nike Edition Origens limited</li>
                        <li className="Article color">Nike White</li>
                        <li className="Article color">Nike Blue</li>
                        <li className="Article color">Nike Red</li>
                        <li className="Article color">Nike Yellow</li>
                        <li className="Article color">Nike Gray</li>
                        <li className="Article color">Nike Orange</li>
                        <li className="Article color">Nike Green</li>
                        <li className="Article color">Nike Black</li>
                        <li className="Article color">Nike Brown</li>
                        <li className="Article color">Nike Edition Slicko</li>
                    </ul>
                </section>
            </main>
            <footer>
                <p className="p">&copy; 2025 ShoesShoop. Todos los derechos reservados</p>
                <div className="displei">
                    <ul className="menuFooter">
                        <h4>Declaraciones</h4>
                        <li><a className="footerContent" href="">Politicas</a></li>
                        <li><a className="footerContent" href="">Acuerdos</a></li>
                        <li><a className="footerContent" href="">Derechos</a></li>
                    </ul>
                    <ul className="menuFooter">
                        <h4>Support</h4>
                        <li><a className="footerContent" href="">Atencion al Cliente</a></li>
                        <li><a className="footerContent" href="">Reclamaciones</a></li>
                        <li><a className="footerContent" href="">Chat en vivo</a></li>
                    </ul>
                    <ul className="menuFooter">
                        <h4>Shoop</h4>
                        <li><a className="footerContent" href="">Camisas</a></li>
                        <li><a className="footerContent" href="">Pantalones</a></li>
                        <li><a className="footerContent" href="">Zapatos</a></li>
                    </ul>
                </div>
                <p className="p">¡Este Sitio web es una prueba. No se recomienda utilizar su CSS ya que fue una manera rapida de hacer el diseño!</p>
            </footer>
        </>
    )
}

export default contentStyle