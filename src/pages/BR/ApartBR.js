import React, { useState }  from 'react';
import { useHistory } from 'react-router-dom';

import '../../assets/css/ApartBR.css';

import logo from '../../assets/images/logo_half.png';

import apart from '../../assets/images/apart.jpg';
import bath from '../../assets/images/bath.jpg';
import beth from '../../assets/images/beth.jpg';
import fRoom from '../../assets/images/fRoom.jpg';
import kitch from '../../assets/images/kitch.jpg';
import usa from '../../assets/images/united-states.png'
import span from '../../assets/images/spain.png'


function ApartBR() {
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
                    <li onClick={()=> handleNavigatePages("/br/estimate")}>Orçamento</li>
                    <li onClick={()=> handleNavigatePages("/br/about")}>Sobre</li>
                    <li onClick={()=> handleNavigatePages("/")}>login</li>
                    <li onClick={() => handleDivLenguages() }>Linguagen</li>
                </ul>
            <div className="language"></div>
        </div>
       <div className="blueLine"/>
        <div className= {div}>
             <ul>
                <li onClick={()=> handleNavigatePages("/in/apart")}>
                    <img src={usa} alt="usa" />
                    <span>Inglês</span> 
                </li>
                <li onClick={()=> handleNavigatePages("/es/apart")}>
                    <img src={span} alt="asd" />
                    <span>Espanhol</span> 
                </li>
             </ul>
        </div>
        
         <div className= "box_main" >
                <h2>Limpeza e higienização de apartamentos</h2>
                <img src={apart} alt="asd" />
                    <article>
                            Na primeira limpeza, nossos limpadores de apartamento irão limpar e higienizar completamente seu
                            apartamento, com atenção especial para sua cozinha e banheiros. 
                            Na segunda sessão de limpeza do apartamento, limparemos todo o seu apartamento; no entanto, 
                            desta vez, forneceremos serviços detalhados nas áreas de dormir e de estar. Continuaremos a manter
                            esse nível de limpeza de detalhes em todo o apartamento durante nossas próximas visitas, fornecendo
                            serviços de limpeza profunda em uma base rotativa.
                    </article>
         </div>

         <div className= "box_2" >
                <h2>
                    Sempre que limparmos, forneceremos serviços de limpeza de apartamentos 
                    que incluem o seguinte:
                </h2>
            <div className= "box_3">

                <div className= "box_4">
                    <img src={bath} alt="asd" />
                    <div className= "texts">
                        <h3>Banheiros</h3>
                        <article>
                            Teias de aranha removidas, espanando, pisos limpos, 
                            banheiros limpos, espelhos / acessórios cromados 
                            limpos, portas de chuveiro limpas, paredes de ladrilho, 
                            banheira / chuveiros limpos.
                    </article>
                    </div>
                </div>
                <div className= "box_5">
                    <img src={beth} alt="asd" />
                    <div className= "texts2">
                        <h3>Áreas de dormir</h3>
                        <article>
                                Superfícies limpas à mão, pisos limpos, poeira 
                                geral, teias de aranha removidas, portas e 
                                caixilhos de portas limpos.
                        </article>
                    </div>
                </div>
                <div className= "box_4">
                    <img src={fRoom} alt="asd" />
                    <div className= "texts">
                        <h3>Áreas de estar</h3>
                            <article>
                                 Superfícies limpas à mão, teias de aranha removidas, 
                                 portas e caixilhos das portas limpos, espanando em 
                                geral, pisos limpos..
                            </article>
                    </div>
                </div>
                <div className= "box_5">
                    <img src={kitch} alt="asd" />
                         <div className= "texts2">
                            <h3>Cozinha</h3>
                                <article>
                                    Bancadas limpas, fora do exaustor limpo, parte superior 
                                    e frontal do fogão limpas, pingos / superfícies de vidro limpas, 
                                    pias limpas e cromadas, frentes de todos os aparelhos limpas, 
                                    poeira geral, teias de aranha removidas, micro-ondas limpo, 
                                    portas e caixilhos de portas local limpo.
                         </article>
                    </div>
                </div>
            </div>
         </div>
       
         <div className= "footer" >
            <img src={logo} alt="asd" />
            <div className= "footer_navigation" >
            <strong>Navegação</strong>
                        <li onClick={()=> handleNavigatePages("/br/home")}>Home</li>
                        <li onClick={()=> handleNavigatePages("/br/estimate")}>Orçamento</li>
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

export default ApartBR;