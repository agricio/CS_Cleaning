import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import '../../assets/css/Login.css';

import logo from '../../assets/images/logo_half.png';
import port from '../../assets/images/brazil.png'
import span from '../../assets/images/spain.png'

function SingUpIN() {
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

        alert(`Thank you ${response.name}! successful registration!`);
        handleNavigatePages("/in/login");

}


  return (
    <div className= "container">

        <div className= "header">
            <ul>
                <li><img src={logo} alt="AirCnC"/></li>
                <li onClick={()=> handleNavigatePages("/")}>Home</li>
                <li onClick={()=> handleNavigatePages("/in/estimate")}>Free Estimate</li>
                <li onClick={()=> handleNavigatePages("/in/about")}>About</li>
                <li onClick={()=> handleNavigatePages("/in/login")}>login</li>
                <li onClick={() => handleDivLenguages() }>Lenguage</li>
            </ul>
        </div>
        <div className="blueLine"/>
        <div className= {div}>
            <ul>
                <li onClick={()=> handleNavigatePages("/br/signup")}>
                    <img src={port} alt="usa" />
                    <span>Portuguese</span> 
                </li>
                <li onClick={()=> handleNavigatePages("/es/signup")}>
                    <img src={span} alt="asd" />
                    <span>Spanish</span> 
                </li>
            </ul>
        </div>

        <div className= "division_0" >
            
            <div className= "session12X" >
                
            </div>
            <div className= "session13X" ></div>

            <div className= "form_boxx" >
            <h2>Sign Up</h2>
            <p id="info">create your account and receive news and promotions! </p>
             <div className= "form_contanier">
                 <form onSubmit={handleRegister}>
                        <div className= "imput" >
                            <input placeholder="name"
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
                            <input placeholder="password"
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
                    <p id="infoPassword" >The password must be have: ( minimal 8 characters, one maiusculus letter, one Number and use one this 3 especial caracters (@#$)</p>                  
                </div>

            </div>
        

            <div className= "services_"></div>
        </div>

        <div className= "footer" >
                <img src={logo} alt="asd" />
                <div className= "footer_navigation" >
                            <strong>Navigation</strong>
                            <li onClick={()=> handleNavigatePages("/")}>Home</li>
                            <li onClick={()=> handleNavigatePages("/in/estimate")}>Free Estimate</li>
                            <li onClick={()=> handleNavigatePages("/in/about")}>About US</li>
                            <li onClick={()=> handleNavigatePages("/in/login")}>login</li>
                </div>
                <div className= "footer_navigation_information" >
                    <strong>Contact inofrmation:</strong>
                    <p>House Cleanning and sanitation services</p>
                    <p>Phone: (856) 577-2336</p>
                    <a href = "mailto:nataliacrystina27@gmail.com?subject = Feedback&body = Message">e-mail: nataliacrystina27@gmail.com</a>
                </div>
            </div>
    </div>
  );
}

export default SingUpIN;