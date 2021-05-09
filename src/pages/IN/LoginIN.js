import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import '../../assets/css/Login.css';

import logo from '../../assets/images/logo_half.png';


import port from '../../assets/images/brazil.png'
import span from '../../assets/images/spain.png'

function LoginIN() {
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
        alert('Wrong Email or Password! Please try later ');
    }

}


  return (
    <div className= "container">

        <div className= "header">
            <ul>
                <li><img src={logo} alt="AirCnC"/></li>
                <li onClick={()=> handleNavigatePages("/")}>Home</li>
                <li onClick={()=> handleNavigatePages("/in/estimate")}>Free Estimate</li>
                <li onClick={()=> handleNavigatePages("/in/about")}>About</li>
                <li onClick={() => handleDivLenguages() }>Lenguage</li>
            </ul>
        </div>
        <div className="blueLine"/>
        <div className= {div}>
            <ul>
                <li onClick={()=> handleNavigatePages("/br/login")}>
                    <img src={port} alt="usa" />
                    <span>Portuguese</span> 
                </li>
                <li onClick={()=> handleNavigatePages("/es/login")}>
                    <img src={span} alt="asd" />
                    <span>Spanish</span> 
                </li>
            </ul>
        </div>

        <div className= "division_0" >
            
            <div className= "session12X" ></div>
            <div className= "session13X" ></div>
            <div className= "form_boxx" >
            <h2>Login</h2>
            <p id="info">Enter the data correctly below</p>
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
                            <p onClick={()=> handleNavigatePages("/in/signup")}>Sign Up</p>
                        </div>
                    </form>    
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
                            <li onClick={()=> handleNavigatePages("/")}>Login</li>
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

export default LoginIN;