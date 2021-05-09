import React, { useState }  from 'react';
import { useHistory } from 'react-router-dom';

import '../../assets/css/House.css';

import logo from '../../assets/images/logo_half.png';

import tools from '../../assets/images/cleaning tools.jpg';
import House from '../../assets/images/house_img.jpg';
import bath from '../../assets/images/bath.jpg';
import beth from '../../assets/images/beth.jpg';
import kitch from '../../assets/images/kitch.jpg';
import usa from '../../assets/images/united-states.png'
import span from '../../assets/images/spain.png'


function HouseBR() {
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
                <li onClick={()=> handleNavigatePages("/in/house")}>
                    <img src={usa} alt="usa" />
                    <span>Inglês</span> 
                </li>
                <li onClick={()=> handleNavigatePages("/es/house")}>
                    <img src={span} alt="asd" />
                    <span>Espanhol</span> 
                </li>
             </ul>
        </div>
        
         <div className= "box_main" >
            <h2>Limpeza de casa</h2>
                <img src={House} alt="asd" />
                    <article>
                    Vale a pena um serviço de limpeza doméstica?
                         Você é a única pessoa que pode decidir se uma casa
                         serviço de limpeza vale o dinheiro. A maioria das pessoas hoje apenas
                         não têm tempo para limpar suas próprias casas, além de suas
                         responsabilidades no trabalho, como pais, e até mesmo reservar um tempo
                         para eles mesmos. Você terá que decidir se deseja pagar
                         outra pessoa para fazer a limpeza para você enquanto você concentra seu
                         tempo e atenção em outro lugar. Além de dar a você mais tempo,
                         um serviço profissional de limpeza doméstica pode lhe trazer paz de espírito
                         porque você sabe que nada será esquecido e que sua casa
                         será devidamente limpo e higienizado 
                    </article>
         </div>

         <div className= "box_2" >
            <div className= "intro" >
                <h2>O que está incluído na limpeza da casa? </h2>
                <p> 
                    Aqui está o que você pode esperar de uma limpeza doméstica de um profissional CS Cleaning. 
                    Tem dois tipos de limpeza: primeira limpeza e limpeza periódica 
                </p>
                <p>Limpeza periódica: esta limpeza inclui todos os itens abaixo e pode ser feita: semanalmente, duas vezes por semana, quinzenal ou mensalmente </p>
                <p>
                    Primeira limpeza: A primeira limpeza é mais completa, todos os móveis são retirados de todos os cantos da roda,
                    as janelas são limpas mais profundamente, as janelas são limpas por dentro e por fora, todas as luzes são limpas à mão até limparmos a roupa. 
                </p>
                <button 
                    className="butt" 
                    type="submit" 
                    onClick={()=> handleNavigatePages("/in/estimate")}>Orçamento</button>
            </div>
            <div className= "box_3_">

                <div className= "box_14_">
                    <img src={beth} alt="asd" />
                    <div className= "texts">
                        <h3>Quarto, sala de estar e áreas comuns</h3>
                        <li>Espanar todas as superfícies acessíveis</li>
                        <li>Limpeza de todos os espelhos e acessórios de vidro</li>
                        <li>Limpeza de todas as superfícies do piso</li>
                        <li>Tirar o lixo orgânico e reciclado </li>
                    </div>
                </div>
                <div className= "box_5_">
                    <img src={bath} alt="asd" />
                    <div className= "texts">
                        <h3>Limpeza de banheiro </h3>
                        <li>Lave e desinfete o vaso sanitário, chuveiro, banheira e pia</li>
                        <li>Espanar todas as superfícies acessíveis</li>
                        <li>Limpeza de todos os espelhos e acessórios de vidro </li>
                        <li>Limpeza de todas as superfícies do piso </li>
                        <li>Tirar o lixo orgânico e reciclado </li>
                    </div>
                </div>
                <div className= "box_14_">
                    <img src={kitch} alt="asd" />
                    <div className= "texts">
                        <h3>Limpeza de cozinha</h3>
                        <li>Espanar todas as superfícies acessíveis </li>
                        <li>Esvaziar a pia e coloquar a louça suja na máquina de lavar louça</li>
                        <li>Limpeza da parte externa do fogão, forno e geladeira</li>
                        <li>Limpeza de todas as superfícies do piso </li>
                        <li>Tirar o lixo orgânico e reciclado </li>
                    </div>
                </div>
                <div className= "box_5_">
                    <img src={tools} alt="asd" />
                         <div className= "texts">
                         <h3>Extras</h3>
                        <li>Armários internos </li>
                        <li>Dentro da geladeira </li>
                        <li>Dentro do Forno</li>
                        <li>Lavar e secar roupa </li>
                        <li>Tirar o lixo orgânico e reciclado </li>
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

export default HouseBR;