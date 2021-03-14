import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import '../../assets/css/AboutBR.css';

import logo from '../../assets/images/logo_half.png';

import avatar from '../../assets/images/avatar_vector.png';
import crachar from '../../assets/images/cracha_vector.png';
import clock from '../../assets/images/clock_vector.png';
import vac from '../../assets/images/vac_vector.png';
import selo from '../../assets/images/selo_verctor.png';
import seloG from '../../assets/images/selo.png';
import port from '../../assets/images/brazil.png'
import span from '../../assets/images/spain.png'



function AboutIN() {
    const [ div, setDiv ] = useState(['none']);
    const history = useHistory();

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
                    <li onClick={()=> handleNavigatePages("/")}>Home</li>
                    <li onClick={()=> handleNavigatePages("/office")}>Free Estimate</li>
                    <li onClick={()=> handleNavigatePages("/in/about")}>About</li>
                    <li onClick={()=> handleNavigatePages("/")}>login</li>
                    <li onClick={() => handleDivLenguages() }>Lenguage</li>
                </ul>
            <div className="language"></div>
        </div>
       <div className="blueLine"/>
        <div className= {div}>
             <ul>
             <li onClick={()=> handleNavigatePages("/br/about")}>
                    <img src={port} alt="usa" />
                    <span>Portuguese</span> 
                </li>
                <li onClick={()=> handleNavigatePages("/es/about")}>
                    <img src={span} alt="asd" />
                    <span>Spanish</span> 
                </li>
             </ul>
        </div>
        <div className= "division_0" >
            <div className= "session12" >
                <h2>About Us</h2>
                <l>Our love for cleanliness comes through!</l>
                    <article>
                    We are a women-owned cleaning company that has a lifetime
                        of cleaning experience behind us. We saw the need to provide a
                        reliable, efficient and quality cleaning service for customers who have
                        manage residential properties. It all starts with good morale, training and supervision
                        team's. We love our team and reward good performance to fulfill motivation.
                        We are committed to providing only the best cleaning service to our customers.
                        We love to clean and put love in our cleaning. We know that not everyone likes
                        to clean, but we are sure that everyone loves a clean space. That's why we make it
                        our full-time job helping people to live in cleaner spaces. We will go to your
                        property, be it a home, office, with a smile and a sponge, and we will not leave until your
                        house we are as clean as we would like our houses to be. We treat each space with
                        respect and integrity, so that you feel good about living and working in it.


                    </article>
                <img src={avatar} alt="asd" />
            </div>

            <div className= "session2" >
                <div className= "icon">
                    <img src={crachar} alt="asd" />
                    <strong>Bonded and Insured</strong>
                </div>
                <div className= "icon">
                    <img src={selo} alt="asd" />
                    <strong>Friendly & Professional</strong>
                </div>
                <div className= "icon">
                    <img src={vac} alt="asd" />
                    <strong>Premium Cleaning Materials</strong>
                </div>
                <div className= "icon">
                    <img src={clock} alt="asd" />
                    <strong>On time, Every time</strong>
                </div>

            </div>

            <div className= "seloG" >
                    <img  src={seloG} alt="asd" />
            </div>
         </div>
       
            <div className= "footer" >
                <img src={logo} alt="asd"/>
                  <div className= "footer_navigation" >
                  <strong>Navigation</strong>
                        <li onClick={()=> handleNavigatePages("/")}>Home</li>
                        <li onClick={()=> handleNavigatePages("/")}>Free Estimate</li>
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

export default AboutIN;