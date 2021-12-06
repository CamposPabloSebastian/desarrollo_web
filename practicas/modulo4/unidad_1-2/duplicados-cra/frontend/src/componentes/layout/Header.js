import React from "react";
import { Link } from "react-router-dom"; //link reemplaza a la etiqueta ancla <a>
import './../../styles/componentes/layout/Header.css'

const Header = () => {
    return(
        <header>
            <div className="empresa">
                <div>
                    <img src="img/logo.png" alt="logotipo"/>
                    <h1>Duplicados</h1>
                </div>
                <nav>
                    <ul className="lista">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Product">Productos</Link></li>
                        <li><Link to="/Service">Servicios</Link></li>
                        <li><Link to="/Nosotros">Nosotros</Link></li>
                        <li><Link to="/Contact">Contacto</Link></li>
                    </ul>
                </nav>          
            </div>        
        </header>
    )
}

export default Header;