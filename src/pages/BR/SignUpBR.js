import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import '../../assets/css/Login.css';

import logo from '../../assets/images/logo_half.png';


import usa from '../../assets/images/united-states.png'
import span from '../../assets/images/spain.png'

function SignUpBR() {
    const [ div, setDiv ] = useState(['none']);
    const history = useHistory();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

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

async function handleRegister(e){
    e.preventDefault();

    const response = await api.post('/sessions', {
        name,
        password,
        email,
        type: 'user'
    });

        alert(`Obrigado ${response.name}! registro efetuado com sucesso!`);
        handleNavigatePages("/in/login");

}


  return (
    <div className= "container">

<div className= "header">
                <ul>
                    <li><img src={logo} alt="AirCnC"/></li>
                    <li onClick={()=> handleNavigatePages("/br/home")}>Home</li>
                    <li onClick={()=> handleNavigatePages("/br/estimate")}>Orçamento</li>
                    <li onClick={()=> handleNavigatePages("/br/about")}>Sobre</li>
                    <li onClick={()=> handleNavigatePages("/br/login")}>login</li>
                    <li onClick={() => handleDivLenguages() }>Linguagen</li>
                </ul>
            <div className="language"></div>
        </div>
       <div className="blueLine"/>
        <div className= {div}>
             <ul>
                <li onClick={()=> handleNavigatePages("/in/signup")}>
                    <img src={usa} alt="usa" />
                    <span>Inglês</span> 
                </li>
                <li onClick={()=> handleNavigatePages("/es/signup")}>
                    <img src={span} alt="asd" />
                    <span>Espanhol</span> 
                </li>
             </ul>
        </div>

        <div className= "division_0" >
            
            <div className= "session12X" >
                
            </div>
            <div className= "session13X" ></div>

            <div className= "form_boxx" >
            <h2>Inscrever-se</h2>
            <p id="info">Crie sua conta e receba novidades e promoções!  </p>
             <div className= "form_contanier">
                 <form onSubmit={handleRegister}>
                        <div className= "imput" >
                            <input placeholder="nome"
                                id="firstName"
                                type="text"
                                value={name}
                                required 
                                onChange={e => setName(e.target.value)} 
                            />
                        </div>

                        <div className= "imput" >
                            <input placeholder="e-mail"
                                id="firstName"
                                type="text"
                                value={email}
                                required 
                                onChange={e => setEmail(e.target.value)} 
                            />
                        </div>

                        <div className= "imput" >
                            <input placeholder="senha"
                                type="password"
                                id="password"
                                value={password}
                                pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$])[a-zA-Z0-9@#$]{8,50}$"
                                required 
                                onChange={e => setPassword(e.target.value)} 
                            />
                        </div>
                        
                       <div className= "select" >
                            <button className="button" type="submit">Submit</button>
                       </div>
                    </form>
                    <p id="infoPassword">A senha deve ter: (mínimo 8 caracteres, uma letra maiusculus, um número e usar um destes 3 caracteres especiais (@ # $)</p>                  
                </div>

            </div>
        

            <div className= "services_"></div>
        </div>

        <div className= "footer" >
            <img src={logo} alt="asd" />
            <div className= "footer_navigation" >
            <strong>Navegação</strong>
                        <li onClick={()=> handleNavigatePages("/br/home")}>Home</li>
                        <li onClick={()=> handleNavigatePages("/br/estimate")}>Orçamento</li>
                        <li onClick={()=> handleNavigatePages("/br/about")}>Sobre Nós</li>
                        <li onClick={()=> handleNavigatePages("/br/login")}>Login</li>
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

export default SignUpBR;