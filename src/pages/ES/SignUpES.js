import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import '../../assets/css/Login.css';

import logo from '../../assets/images/logo_half.png';


import usa from '../../assets/images/united-states.png'
import por from '../../assets/images/brazil.png'

function SignUpES() {
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

        alert(`Gracias  ${response.name}! registro exitoso!`);
        handleNavigatePages("/in/login");

}


  return (
    <div className= "container">

    <div className= "header">
                <ul>
                    <li><img src={logo} alt="AirCnC"/></li>
                    <li onClick={()=> handleNavigatePages("/es/home")}>Home</li>
                    <li onClick={()=> handleNavigatePages("/es/estimate")}>Presupuesto</li>
                    <li onClick={()=> handleNavigatePages("/es/about")}>Sobre nosotros</li>
                    <li onClick={()=> handleNavigatePages("/es/login")}>login</li>
                    <li onClick={() => handleDivLenguages() }>Idioma</li>
                </ul>
            <div className="language"></div>
        </div>
       <div className="blueLine"/>
        <div className= {div}>
             <ul>
                <li onClick={()=> handleNavigatePages("/in/signup")}>
                    <img src={usa} alt="usa" />
                    <span>Inglés</span> 
                </li>
                <li onClick={()=> handleNavigatePages("/br/signup")}>
                    <img src={por} alt="por" />
                    <span>Portugués</span> 
                </li>
             </ul>
        </div>

        <div className= "division_0" >
            
            <div className= "session12X" >
                
            </div>
            <div className= "session13X" ></div>

            <div className= "form_boxx" >
            <h2>Inscribirse</h2>
            <p id="info">Crea tu cuenta y recibe novedades y promociones!</p>
             <div className= "form_contanier">
                 <form onSubmit={handleRegister}>
                        <div className= "imput" >
                            <input placeholder="nombre"
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
                            <input placeholder="contraseña"
                                type="password"
                                id="password"
                                value={password}
                                pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$])[a-zA-Z0-9@#$]{8,50}$"
                                required 
                                onChange={e => setPassword(e.target.value)} 
                            />
                        </div>
                        
                       <div className= "select" >
                            <button className="button" type="submit">Enviar</button>
                       </div>
                    </form>
                    <p id="infoPassword">La contraseña debe tener: (mínimo 8 caracteres, una letra maiusculus, un número y utilizar uno de estos 3 caracteres especiales (@ # $)</p>                  
                </div>

            </div>
        

            <div className= "services_"></div>
        </div>

        <div className= "footer" >
            <img src={logo} alt="asd" />
            <div className= "footer_navigation" >
            <strong>Navegación</strong>
                    <li onClick={()=> handleNavigatePages("/es/home")}>Home</li>
                    <li onClick={()=> handleNavigatePages("/es/estimate")}>Presupuesto</li>
                    <li onClick={()=> handleNavigatePages("/es/about")}>Sobre nosotros</li>
                    <li onClick={()=> handleNavigatePages("/es/login")}>login</li>
                  </div>
            <div className= "footer_navigation_information" >
                <strong>Información del contacto:</strong>
                <p>Servicios de limpieza y saneamiento del hogar</p>
                <p>Teléfono: (856) 577-2336</p>
                <a href = "mailto:nataliacrystina27@gmail.com?subject = Feedback&body = Message">e-mail: nataliacrystina27@gmail.com</a>
            </div>
         </div>
    </div>
  );
}

export default SignUpES;