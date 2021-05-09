import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import '../../assets/css/Login.css';

import logo from '../../assets/images/logo_half.png';


import usa from '../../assets/images/united-states.png'
import span from '../../assets/images/spain.png'

function LoginBR() {
    const [ div, setDiv ] = useState(['none']);
    const history = useHistory();
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');
   // const [ user, setUser ] = useState('');

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

async function handleLogin(e){
    e.preventDefault();

    try {
        const response = await api.post('/log', { email, password });
        
        let user = response.data

        if (user.type === 'user') {
            localStorage.setItem('userId', user._id);
            localStorage.setItem('userName', user.name);
            history.push('/in/userdash');
        }
        
        if (user.type === 'admin') {
            localStorage.setItem('userId', user._id);
            localStorage.setItem('userName', user.name);
            history.push('/dashboard');
        }


    }catch (err) {
        alert('E-mail ou senha incorretos! Por favor tente mais tarde ');
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
                    <li onClick={() => handleDivLenguages() }>Linguagen</li>
                </ul>
            <div className="language"></div>
        </div>
       <div className="blueLine"/>
        <div className= {div}>
             <ul>
                <li onClick={()=> handleNavigatePages("/in/login")}>
                    <img src={usa} alt="usa" />
                    <span>Inglês</span> 
                </li>
                <li onClick={()=> handleNavigatePages("/es/login")}>
                    <img src={span} alt="asd" />
                    <span>Espanhol</span> 
                </li>
             </ul>
        </div>

        <div className= "division_0" >
            
            <div className= "session12X" ></div>
            <div className= "session13X" ></div>
            <div className= "form_boxx" >
            <h2>Login</h2>
            <p id="info">Insira os dados corretamente abaixo </p>
             <div className= "form_contanier">
                 <form onSubmit={handleLogin}>
                        <div className= "imput" >
                            <input placeholder="e-mail"
                                type="email"
                                value={email}
                                required 
                                onChange={e => setEmail(e.target.value)} 
                            />
                        </div>

                        <div className= "imput" >
                            <input placeholder="password"
                                type="password"
                                value={password}
                                required 
                                onChange={e => setPassword(e.target.value)} 
                            />
                        </div>

                       <div className= "select" >
                            <button className="button" type="submit">Submit</button>
                            <p onClick={()=> handleNavigatePages("/br/signin")}>Inscrever-se </p>
                        </div>
                    </form>    
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

export default LoginBR;