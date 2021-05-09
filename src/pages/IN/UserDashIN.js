import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import '../../assets/css/Userdash.css';

import logo from '../../assets/images/logo_half.png';


import port from '../../assets/images/brazil.png'
import span from '../../assets/images/spain.png'

function UserDashIN() {
    const [ div, setDiv ] = useState(['none']);
    const history = useHistory();
    const [UserId, setUserId] = useState('');
    const [description, setDescription] = useState('');


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

async function handleRegisterDescription(e){
    e.preventDefault();

    setUserId(localStorage.getItem('user._id'))

    const response = await api.post('/nouser/estimate', {
        UserId,
        description
    });

    alert(`Comment publish Thank you!`);

    
}

function handleLogout() {
    localStorage.clear();
    history.push('/in/login');
}


  return (
    <div className= "container">

        <div className= "header">
            <ul>
                <li><img src={logo} alt="AirCnC"/></li>
                <li onClick={()=> handleNavigatePages("/")}>Home</li>
                <li onClick={()=> handleNavigatePages("/in/estimate")}>Free Estimate</li>
                <li onClick={()=> handleNavigatePages("/in/about")}>About</li>
                <li onClick={()=> handleLogout()}>logout</li>
                <li onClick={() => handleDivLenguages() }>Lenguage</li>
            </ul>
        </div>
        <div className="blueLine"/>
        <div className= {div}>
            <ul>
                <li onClick={()=> handleNavigatePages("/br/estimate")}>
                    <img src={port} alt="usa" />
                    <span>Portuguese</span> 
                </li>
                <li onClick={()=> handleNavigatePages("/es/estimate")}>
                    <img src={span} alt="asd" />
                    <span>Spanish</span> 
                </li>
            </ul>
        </div>

        <div className= "division_0" >
            
            <div className= "session12X" ></div>
            <div className= "session13X" ></div>
            <div className= "User_data" >
                <h2>{`Welcome: ${localStorage.getItem('userName')}`}</h2>
            </div>

            <div className= "box_4_">
                <h2>Promotions:</h2>
            </div>

            <div className= "form_contanier_">
                <form onSubmit={handleRegisterDescription}>
                    <p>Leave your comment about our services </p>
                    <textarea placeholder="Description"
                        required
                        value={description}
                        onChange={e => setDescription(e.target.value)} 
                        />
                    <div className= "select" >
                        <button className="button" type="submit">Submit</button>
                    </div>
                            
                </form>
            </div>

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

export default UserDashIN;