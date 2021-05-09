import React, { useState, useEffect }  from 'react';
import { useHistory } from 'react-router-dom';

import '../../assets/css/HomeBR.css';

import api from '../../services/api';

import logo from '../../assets/images/logo_half.png';
import backWithe from '../../assets/images/back_withe.png';
import houseVector from '../../assets/images/house_vector.png';
import buildVector from '../../assets/images/biuld_vector.png';
import officeVector from '../../assets/images/office_vector.png';
import constructVector from '../../assets/images/construct_vector.png';
import cleaningTools from '../../assets/images/cleaning tools.jpg';
import logoG from '../../assets/images/logo.png';
import usa from '../../assets/images/united-states.png'
import span from '../../assets/images/spain.png'

function HomeBR() {
    const [ div, setDiv ] = useState(['none']);
    const [coments, setComents ] = useState([]);
    const history = useHistory();

useEffect(() => {
    async function loadComents() {
        const res = await api.get('/comment');
        setComents(res.data);
    }
    loadComents();
}, []);

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
                <li onClick={()=> handleNavigatePages("/")}>
                    <img src={usa} alt="usa" />
                    <span>Inglês</span> 
                </li>
                <li onClick={()=> handleNavigatePages("/es/home")}>
                    <img src={span} alt="asd" />
                    <span>Espanhol</span> 
                </li>
             </ul>
        </div>
      
        <div className= "fold">
            <img className= "boxWhite" src={backWithe} alt="AirCnC"/>
            <img className= "logo" src={logoG} alt="AirCnC"/>
            <strong>Serviços de limpeza e higienização doméstica</strong>
            <p className= "contatos_fone">Contatos: (856) 577-2336</p>
            <p className= "contatos_email">nataliacrystina27@gmail.com</p>
        </div>

        <div className= "services">
            <h1>Nossos serviços</h1>
                 <article>Somos prestadores de serviços de limpeza profissionais de alta classificação em Nova Jersey.
                    Nosso objetivo é fornecer limpeza a todos os espaços que encontramos. Nós garantimos excelente
                    serviço de limpeza na região da Nova Jersey, todas as vezes, e a promessa de que nossos limpadores são
                    confiável e trabalhador, para uma experiência mútua de respeito e satisfação
               </article>
            <div className= "servicesOptions">
                <ul>
                        <li
                           onClick={()=> handleNavigatePages("/br/house")}
                            className=''>
                                <img src={houseVector} alt="asd" />
                                <span>Casas</span> 
                         </li>
                         <li
                            onClick={()=> handleNavigatePages("/br/apart")}
                            className=''>
                                <img src={buildVector} alt="asd" />
                                <span>Apartamentos</span> 
                         </li>
                         <li
                            onClick={()=> handleNavigatePages("/br/office")}
                            className=''>
                                <img src={officeVector} alt="asd" />
                                <span>Escritórios</span> 
                         </li>
                         <li 
                            onClick={()=> handleNavigatePages("/br/construct")}
                            className=''>
                                <img src={constructVector} alt="asd" />
                                <span>Pos construção</span> 
                         </li>
                </ul>

            </div>
        </div>
         <div className= "about" >
            <img src={cleaningTools} alt="asd" />
            <div className= "about_text" >
                <h2>Sobre nós</h2>
                    <article>Está cientificamente comprovado que um ambiente 
                             limpo pode ilumine seu humor, aumente sua 
                            produtividade e faça ótimas primeiras impressões!

                            Sabemos que nem todo mundo adora limpar, mas 
                            estamos certeza de que sabemos o que fazemos e 
                            é por isso criamos um espaço limpo, arrumado e 
                            organizado nosso trabalho em tempo integral para 
                            ajudar as pessoas a viver e trabalhar sem problemas.
                    </article>
                <button 
                    className="btn" 
                    type="submit" 
                    onClick={()=> handleNavigatePages("/br/about")}>Saiba mais</button>
            </div>
            
         </div>
         <div className= "customers">
            <h1>Clientes Felizes</h1>
            <div className= "customers-options">
                    <ul> { coments.map(coment => (
                        <li key={coment._id}
                            className='customer_inside'>
                                <span>{coment.firstName}</span>
                                <article>{coment.comment}</article> 
                        </li>
                        ))}      
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

export default HomeBR;