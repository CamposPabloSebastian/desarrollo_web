import React from "react";
import '../styles/componentes/pages/Contact.css'

const Contact = () =>{
    return(
        <main>
            <form>
                <div className="background">
                    <fieldset className="campo-ppal">
                        <legend>Completa Formulario</legend>
                        <fieldset className="datos">
                            <legend>Datos personales</legend>
                            <p>
                                <label for="name">Nombre</label>
                                <input type="text" required/>
                            </p>
                            <p>
                                <label for="surname">Apellido</label>
                                <input type="text" required/>
                            </p>
                            <p>
                                <label for="number">Telefono</label>
                                <input type="tel" required/>
                            </p>
                            <p>
                                <label for="email">E-mail</label>
                                <input type="email" required/>
                            </p>
                        </fieldset>  
                        <fieldset className="motivo">
                            <legend>Motivo de contacto</legend>
                            <p className="equipo">
                                <label for="motiv">Motivo</label>
                                <select name="">
                                    <option>Alquiler</option>
                                    <option>Servicio Tecnico</option>
                                    <option>Compra</option>
                                </select>
                            </p>
                            <p>
                                <label for="marca">Equipo-marca</label>
                                <input type="text"/>
                            </p>
                            <p>
                                <label for="model">Modelo</label>
                                <input type="text"/>
                            </p>
                            <p>
                                <label for="comentario">Comentarios</label>
                                <textarea name="" id="comentario" cols="30" rows="10" required></textarea>
                            </p>
                        </fieldset>
                        <input type="submit"/>
                    </fieldset>
                </div>
            </form>
        </main>
    )
}

export default Contact;