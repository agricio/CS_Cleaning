import React, { useState }  from 'react';
import { useHistory } from 'react-router-dom';

import '../../assets/css/ConstructBR.css';

import logo from '../../assets/images/logo_half.png';

import construct from '../../assets/images/construct.jpg';
import port from '../../assets/images/brazil.png'
import span from '../../assets/images/spain.png'

function ConstructIN() {
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
             <ul>
             <li onClick={()=> handleNavigatePages("/br/construct")}>
                    <img src={port} alt="usa" />
                    <span>Portuguese</span> 
                </li>
                <li onClick={()=> handleNavigatePages("/es/construct")}>
                    <img src={span} alt="asd" />
                    <span>Spanish</span> 
                </li>
             </ul>
        </div>
        
         <div className= "session11" >
                <h2>Post-Construction Cleaning</h2>
                <img src={construct} alt="asd" />
                    <article>
                    Post-construction cleaning is a cleaning service carried out on new or renovated buildings.
                            From the word itself, “post-construction”, it is understood that this cleaning is done after the part of the
                            construction. A construction contractor can do general rubble cleaning, but the
                            detailed cleaning is no longer part of your job. This type of cleaning is done throughout
                            the installation, from top to bottom; does not mean simply sweeping the floor, cleaning the carpet and
                            other visible areas. Below are some of the cleaning requirements that need to be met.
                            attended:
                    </article>
         </div>

         <div className= "box2" >
                <h2>
                We offer cleaning, depending on the requirements of the workplace,
                    our cleaning specifications include, but are not limited to:
                 </h2>

                <div className= "text_box">
                    <ul>
                            <li>Removal and disposal of debris</li>
                            <li>High and low dust</li>
                            <li>Local cleaning</li>
                            <li>Sanitization and disinfection</li>
                            <li>Wet cleaning / cleaning of walls, ceilings, lamps, baseboards, doors, fittings and frames</li>
                            <li>Grout cleaning / sealing</li>
                            <li>Floor care (sweeping - vacuuming - scrubbing - scrubbing - polishing - polishing - sealing strip / wax, etc.)</li>
                            <li>Cleaning of details including edges, corners, slits, openings, ceiling lamps, etc.</li> 
                            <li>Removing adhesives and polishing accessories</li> 
                            <li>Cleaning cabinets / drawers / cabinets / shelves / bumps and bumps</li> 
                            <li>Glass cleaning</li>
                            <li>Stone floor care</li>
                            <li>Rest room / kitchenette appliances</li> 
                            <li>Removal of paint, grease and caulking stains</li>
                            <li>Cleaning of electrical and hydraulic installations</li>
                            <li>Vacuuming / staining / carpet cleaning</li>
                            <li>Cleaning windows and window frames / windowsills (indoor and outdoor)</li>
                    </ul> 
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

export default ConstructIN;