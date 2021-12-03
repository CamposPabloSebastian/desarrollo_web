import React from "react";

const Header = () => {
    return(
        <header>
            <div classNam="empresa">
                <div>
                    <img src="img/logo.png" alt="logotipo"/>
                    <h1>Duplicados</h1>
                </div>
                <nav>
                    <ul classNam="lista">
                        <li><a href="index.html" classNam="activo">Home</a></li>
                        <li><a href="productos.html">Productos</a></li>
                        <li><a href="servicios.html">Servicios</a></li>
                        <li><a href="nosotros.html">Nosotros</a></li>
                        <li><a href="contacto.html">Contacto</a></li>
                    </ul>
                </nav>          
            </div>        
        </header>
    )
}

export default Header;