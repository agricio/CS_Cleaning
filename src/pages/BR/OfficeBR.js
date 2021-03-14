import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import '../../assets/css/OfficeBR.css';

import logo from '../../assets/images/logo_half.png';
import office from '../../assets/images/office.jpg';
import usa from '../../assets/images/united-states.png'
import span from '../../assets/images/spain.png'

function OfficeBR() {
    const history = useHistory();
    const [ div, setDiv ] = useState(['none']);

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
                    <li onClick={() => handleDivLenguages() }>Linguagen</li>
                </ul>
            <div className="language"></div>
        </div>
       <div className="blueLine"/>
        <div className= {div}>
             <ul>
                <li onClick={()=> handleNavigatePages("/in/office")}>
                    <img src={usa} alt="usa" />
                    <span>Inglês</span> 
                </li>
                <li onClick={()=> handleNavigatePages("/es/office")}>
                    <img src={span} alt="asd" />
                    <span>Espanhol</span> 
                </li>
             </ul>
        </div>
        <div className= "division_0" >
            <div className= "division_1" >
                <h2>Limpeza Comercial e Escritorio</h2>
                <img src={office} alt="asd" />
                <article>
                    As aparências são tudo. Se você dirige uma empresa, deseja garantir que seus clientes tenham 
                    a melhor primeira impressão possível. Fornecer a eles um espaço comercial limpo e arrumado é 
                    um grande começo. A maioria das pessoas deixa suas primeiras impressões imediatamente, e um 
                    negócio sujo ou desagradável pode deixá-las com uma impressão negativa. Oferecemos limpezas
                    chão ao teto para pequenas propriedades comerciais e de escritórios.
                </article>
            </div>

            <div className= "division_2" >
                <h2>
                    Oferecemos limpeza, dependendo dos requisitos do local de trabalho, 
                    nossas especificações de limpeza incluem, mas não estão limitadas a:
                </h2>

                <div className= "division_3">
                    <h3>Serviços de tratamento de pisos</h3>
                    <article>
                        Freqüentemente, os pisos são a primeira impressão que 
                        um cliente tem de uma instalação. Acreditamos que a 
                        manutenção proativa e contínua do piso leva a uma 
                        aparência de primeira classe e resultados comerciais s
                        uperiores.
                    </article>
                    <h3>Limpeza profunda de cozinha</h3>
                    <article>
                        Limpamos e higienizamos profundamente o equipamento 
                        e as superfícies enquanto removemos a graxa e outros resíduos. 
                        Com tecnologias de ponta, nossas equipes podem mudar 
                        a aparência de seu departamento de alimentação e nutrição.
                    </article>
                    <h3>Limpeza Profunda de Equipamentos</h3>
                    <article>
                        Nosso serviço principal oferece uma abordagem amiga 
                        do ambiente. Nosso processo de 3 etapas utiliza vapor 
                        de vapor superaquecido para limpar profundamente e 
                        manter equipamentos móveis e imóveis
                    </article>
                    <h3>Limpeza profunda do elevador</h3>
                    <article>
                        Nosso programa de limpeza de elevadores é uma solução 
                        abrangente para elevadores sujos. Nossas equipes deixam 
                        as cabines dos elevadores e os trilhos livres de sujeira e 
                        detritos. Nosso processo também funciona com escadas 
                         rolantes e esteiras rolantes.
                    </article>
                </div>
            </div>
         </div>
       
         <div className= "footer" >
            <img src={logo} alt="asd" />
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

export default OfficeBR;