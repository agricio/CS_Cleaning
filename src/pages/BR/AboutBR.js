import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import '../../assets/css/AboutBR.css';

import logo from '../../assets/images/logo_half.png';

import avatar from '../../assets/images/avatar_vector.png';
import crachar from '../../assets/images/cracha_vector.png';
import clock from '../../assets/images/clock_vector.png';
import vac from '../../assets/images/vac_vector.png';
import selo from '../../assets/images/selo_verctor.png';
import seloG from '../../assets/images/selo.png';
import usa from '../../assets/images/united-states.png'
import span from '../../assets/images/spain.png'

function AboutBR() {
    const [ div, setDiv ] = useState(['none']);
    const history = useHistory();

function handleNavigatePages(opc) {
    history.push(opc);
}

function handleDivLenguages () {
    
    if (div === 'redLine') {
        setDiv('none')
    }
    else {
        setDiv('redLine')
    } 
}


  return (
    <div className= "container">
        <div className= "header">
                <ul>
                    <li><img src={logo} alt="AirCnC"/></li>
                    <li onClick={()=> handleNavigatePages("/br/home")}>Home</li>
                    <li onClick={()=> handleNavigatePages("/")}>Orçamento</li>
                    <li onClick={()=> handleNavigatePages("/br/about")}>Sobre</li>
                    <li onClick={()=> handleNavigatePages("/")}>login</li>
                    <li onClick={() => handleDivLenguages() }> Linguagen</li>
                </ul>
            <div className="language"></div>
        </div>
       <div className="blueLine"/>
        <div className= {div}>
             <ul>
                <li onClick={()=> handleNavigatePages("/in/about")}>
                    <img src={usa} alt="usa" />
                    <span>Inglês</span> 
                </li>
                <li onClick={()=> handleNavigatePages("/es/about")}>
                    <img src={span} alt="asd" />
                    <span>Espanhol</span> 
                </li>
             </ul>
        </div>
        <div className= "division_0" >
            <div className= "session12" >
                <h2>Sobre nós</h2>
                <l>Nosso amor pela limpeza transparece!</l>
                    <article>
                        Somos uma empresa de limpeza de propriedade de mulheres que tem uma vida inteira 
                        de experiência em limpeza atrás de nós. Vimos a necessidade de fornecer um 
                        serviço de limpeza confiável,  eficiente e de qualidade para clientes que possuem e 
                        gerenciam propriedades residenciais. Tudo começa com bom moral, treinamento e supervisão 
                        da equipe. Amamos nossa equipe e recompensamos o bom desempenho para mantê-la motivada.
                        Estamos empenhados em fornecer apenas o melhor serviço de limpeza aos nossos clientes. 
                        Amamos limpar e colocamos amor em nossa  limpeza. Sabemos que nem todo mundo gosta 
                        de limpar, mas temos certeza de que todo mundo adora um espaço limpo. É por isso que tornamos 
                        nosso trabalho em tempo integral ajudar as pessoas a viver em espaços mais limpos. Iremos até sua 
                        propriedade, seja uma casa, escritório, com um sorriso e uma esponja, e não sairemos até que sua 
                        casa esteja tão limpa quanto gostaríamos que nossas casas estivessem. Tratamos cada espaço com 
                        respeito e integridade, para que você se sinta bem em morar e trabalhar nele.
                    </article>
                <img src={avatar} alt="asd" />
            </div>

            <div className= "session2" >
                <div className= "icon">
                    <img src={crachar} alt="asd" />
                    <strong>Ligado e Segurado</strong>
                </div>
                <div className= "icon">
                    <img src={selo} alt="asd" />
                    <strong>Amigavel & Profissional</strong>
                </div>
                <div className= "icon">
                    <img src={vac} alt="asd" />
                    <strong>Limpeza Premium Materiais</strong>
                </div>
                <div className= "icon">
                    <img src={clock} alt="asd" />
                    <strong>Na hora, Toda vez</strong>
                </div>

            </div>

            <div className= "seloG" >
                    <img  src={seloG} alt="asd" />
            </div>
         </div>
       
            <div className= "footer" >
                <img src={logo} alt="asd"/>
                  <div className= "footer_navigation" >
                  <strong>Navegação</strong>
                        <li onClick={()=> handleNavigatePages("/br/home")}>Home</li>
                        <li onClick={()=> handleNavigatePages("/")}>Orçamento</li>
                        <li onClick={()=> handleNavigatePages("/br/about")}>Sobre Nós</li>
                        <li onClick={()=> handleNavigatePages("/")}>Login</li>
                  </div>
            <div className= "footer_navigation_information" >
                <strong>Informações de contato:</strong>
                <p>Serviços de limpeza e higienização doméstica</p>
                <p>Telefone: (856) 577-2336</p>
                    <a href = "mailto:nataliacrystina27@gmail.com?subject = Feedback&body = Message">e-mail: nataliacrystina27@gmail.com</a>
               </div>
         </div>
    </div>
  );
}

export default AboutBR;