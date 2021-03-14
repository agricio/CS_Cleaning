import React, { useState }  from 'react';
import { useHistory } from 'react-router-dom';

import '../../assets/css/ApartBR.css';

import logo from '../../assets/images/logo_half.png';

import apart from '../../assets/images/apart.jpg';
import bath from '../../assets/images/bath.jpg';
import beth from '../../assets/images/beth.jpg';
import fRoom from '../../assets/images/fRoom.jpg';
import kitch from '../../assets/images/kitch.jpg';
import port from '../../assets/images/brazil.png'
import span from '../../assets/images/spain.png'


function ApartIN() {
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
        <li onClick={()=> handleNavigatePages("/br/apart")}>
                    <img src={port} alt="usa" />
                    <span>Portuguese</span> 
                </li>
                <li onClick={()=> handleNavigatePages("/es/apart")}>
                    <img src={span} alt="asd" />
                    <span>Spanish</span> 
                </li>
        </div>
        
         <div className= "box_main" >
                <h2>Apartment cleaning and sanitizing</h2>
                <img src={apart} alt="asd" />
                    <article>
                    In the first cleaning, our apartment cleaners will thoroughly clean and sanitize your
                            apartment, with special attention to your kitchen and bathrooms.
                            In the second apartment cleaning session, we will clean your entire apartment; However,
                            this time, we will provide detailed services in the sleeping and living areas. We will continue to maintain
                            this level of cleanliness of details throughout the apartment during our next visits, providing
                            deep cleaning services on a rotating basis.
                    </article>
         </div>

         <div className= "box_2" >
                <h2>
                Whenever we clean, we will provide apartment cleaning services
                    which include the following:
                </h2>
            <div className= "box_3">

                <div className= "box_4">
                    <img src={bath} alt="asd" />
                    <div className= "texts">
                        <h3>Bathrooms</h3>
                        <article>
                        Spider webs removed, dusting, clean floors,
                            clean bathrooms, chrome mirrors / accessories
                            clean, clean shower doors, tile walls,
                            clean bathtub / showers.
                    </article>
                    </div>
                </div>
                <div className= "box_5">
                    <img src={beth} alt="asd" />
                    <div className= "texts2">
                        <h3>Sleeping areas</h3>
                        <article>
                        Hand-cleaned surfaces, clean floors, dust
                                general, cobwebs removed, doors and
                                clean door frames.
                        </article>
                    </div>
                </div>
                <div className= "box_4">
                    <img src={fRoom} alt="asd" />
                    <div className= "texts">
                        <h3>Living areas</h3>
                            <article>
                            Surfaces cleaned by hand, cobwebs removed,
                                 doors and door frames clean, dusting in
                                general, clean floors.
                            </article>
                    </div>
                </div>
                <div className= "box_5">
                    <img src={kitch} alt="asd" />
                         <div className= "texts2">
                            <h3>Kitchen</h3>
                                <article>
                                Clean countertops, outside the exhaust fan clean, top
                                    clean stove top and front, clean glass drips / surfaces,
                                    clean and chrome sinks, fronts of all clean appliances,
                                    general dust, cobwebs removed, microwave clean,
                                    doors and door frames clean place.
                         </article>
                    </div>
                </div>
            </div>
         </div>
       
         <div className= "footer" >
            <img src={logo} alt="asd" />
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

export default ApartIN;