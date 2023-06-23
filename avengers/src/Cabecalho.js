import React from 'react'
import './Componentes/css/estilo.css'

export default function Cabecalho(){
    return(
        <>
        <header className="menu-bg">
            <div className="menu">
                <div className="menu-logo">
                    <a href="#">Avengers</a>
                </div>
            
                <nav className="menu-nav">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#produtos">Personagens</a></li>
                        <li><a href="#sobre">Sobre</a></li>

                    </ul>

                </nav>

            </div>

        </header>
        </>
    )
}