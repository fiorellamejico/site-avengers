import React from 'react'
import Slide from './Componentes/img/slide.jpg'
import Imagem1 from './Componentes/img/img1.gif'
import Imagem2 from './Componentes/img/img2.gif'
import Imagem3 from './Componentes/img/img3.gif'
import Imgsobre from './Componentes/img/imgsobre.gif'


export default function Home(){
    return(
        <>
           <br/>
           <br/>
           <img src={Slide} id="slide-home" alt="Slide"></img>

            <section className="sobre" id="sobre">
                <div className="sobre-info">
        
                    <h1>Sobre</h1>
                    <br/>
                    <p>O filme conta a história da equipe de super heróis idealizada e reunida por Nick Fury, agente da S.H.I.E.LD. O time, formado por Homem de Ferro, Capitão América, Thor, Gavião Arqueiro, Hulk e Viúva Negra, é formada com o objetivo de deter os planos de Loki, vilão da narrativa e irmão de Thor. </p>
    
                </div>
                <div className="sobre-img">
                    <img src={Imgsobre} alt="imagem sobre"></img>
                </div>
            </section>

            <section className="produtos" id="produtos">
                
                <h1>Personagens</h1>
                <div className="produtos-card">
                    
                    {/* estrutura do Game 1*/}
                    <div className="produtos-item purple">
                        <h2>Hulk</h2>
                        <img src={Imagem1} id="imgProd" alt="Game 1"></img>
                    </div>

                    {/* estrutura do Game 2*/}
                    <div className="produtos-item pink">
                        <h2>Iron man</h2>
                        <img src={Imagem2} id="imgProd" alt="Game 2"></img>
                    </div>

                    {/* estrutura do Game 3*/}
                    <div className="produtos-item blue">
                        <h2>Thor</h2>
                        <img src={Imagem3} id="imgProd" alt="Game 3"></img>
                    </div>

                </div>

            </section>
        </>
    )
}