import React, { useState }  from 'react';
import { useHistory } from 'react-router-dom';

import '../../assets/css/ConstructBR.css';

import logo from '../../assets/images/logo_half.png';

import construct from '../../assets/images/construct.jpg';
import usa from '../../assets/images/united-states.png'
import span from '../../assets/images/spain.png'

function ConstructBR() {
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
                <li onClick={()=> handleNavigatePages("/in/construct")}>
                    <img src={usa} alt="usa" />
                    <span>Inglês</span> 
                </li>
                <li onClick={()=> handleNavigatePages("/es/construct")}>
                    <img src={span} alt="asd" />
                    <span>Espanhol</span> 
                </li>
             </ul>
        </div>
        
         <div className= "session11" >
                <h2>Limpeza Pós-construção</h2>
                <img src={construct} alt="asd" />
                    <article>
                            Limpeza pós-construção é um serviço de limpeza realizado em edifícios novos ou renovados.
                            Da própria palavra, “pós-construção”, entende-se que essa limpeza é feita após a parte da 
                            construção. Um empreiteiro de construção pode fazer uma limpeza geral de entulho, mas a 
                            limpeza detalhada não faz mais parte de seu trabalho. Esse tipo de limpeza é feito em toda 
                            a instalação, de cima a baixo; não significa simplesmente varrer o chão, limpar o carpete e 
                            outras áreas visíveis. Abaixo estão alguns dos requisitos de limpeza que precisam ser 
                            atendidos:
                    </article>
         </div>

         <div className= "box2" >
                <h2>
                     Oferecemos limpeza, dependendo dos requisitos do local de trabalho, 
                    nossas especificações de limpeza incluem, mas não estão limitadas a:
                 </h2>

                <div className= "text_box">
                    <ul>
                            <li>Remoção e eliminação de detritos</li>
                            <li>Alta e baixa poeira</li>
                            <li>Limpeza local</li>
                            <li>Sanitização e desinfecção</li>
                            <li>Limpeza / limpeza úmida de paredes, tetos, luminárias, rodapés, portas, guarnições e molduras</li>
                            <li>Limpeza / vedação de rejuntes</li>
                            <li>Cuidados com pisos (varrer - aspirar - esfregar - esfregar - polir - polir - tira de vedação / cera, etc.)</li>
                            <li>Limpeza de detalhes incluindo bordas, cantos, fendas, aberturas, luminárias de teto, etc.</li> 
                            <li>Removendo adesivos e acessórios de polimento</li> 
                            <li>Limpeza de armários / gavetas / armários / prateleiras / saliências e saliências</li> 
                            <li>Limpeza de vidro</li>
                            <li>Cuidado do chão de pedra</li>
                            <li>Aparelhos para sala de descanso / kitchenette</li> 
                            <li>Remoção de tinta, massa corrida e manchas de calafetagem</li>
                            <li>Limpeza de instalações elétricas e hidráulicas</li>
                            <li>Aspiração / manchas / limpeza de carpetes</li>
                            <li>Limpeza de janelas e caixilhos de janelas / peitoris (interior e exterior)</li>
                    </ul>
                   
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

export default ConstructBR;