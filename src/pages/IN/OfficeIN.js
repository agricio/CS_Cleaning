import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import '../../assets/css/OfficeBR.css';

import logo from '../../assets/images/logo_half.png';
import office from '../../assets/images/office.jpg';
import port from '../../assets/images/brazil.png'
import span from '../../assets/images/spain.png'

function OfficeIN() {
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
        {()=>  setDiv(false) } 
                <ul>
                <li><img src={logo} alt="AirCnC"/></li>
                    <li onClick={()=> handleNavigatePages("/")}>Home</li>
                    <li onClick={()=> handleNavigatePages("/in/estimate")}>Free Estimate</li>
                    <li onClick={()=> handleNavigatePages("/in/about")}>About</li>
                    <li onClick={()=> handleNavigatePages("/in/login")}>login</li>
                    <li onClick={() => handleDivLenguages() }>Lenguage</li>
                </ul>
            <div className="language"></div>
        </div>
       <div className="blueLine"/>
        <div className= {div}>
             <ul>
             <li onClick={()=> handleNavigatePages("/br/office")}>
                    <img src={port} alt="usa" />
                    <span>Portuguese</span> 
                </li>
                <li onClick={()=> handleNavigatePages("/es/office")}>
                    <img src={span} alt="asd" />
                    <span>Spanish</span> 
                </li>
             </ul>
        </div>
        <div className= "division_0" >
            <div className= "division_1" >
                <h2>Commercial and Office Cleaning</h2>
                <img src={office} alt="asd" />
                <article>
                Appearances are everything. If you run a business, you want to ensure that your customers have
                    the best possible first impression. Providing them with a clean and tidy commercial space is
                    a great start. Most people leave their first impressions immediately, and a
                    dirty or unpleasant business can leave them with a negative impression. We offer cleanings
                    floor to ceiling for small commercial and office properties.
                </article>
            </div>

            <div className= "division_2" >
                <h2>
                We offer cleaning, depending on the requirements of the workplace,
                    our cleaning specifications include, but are not limited to:
                </h2>

                <div className= "division_3">
                    <h3>Floor treatment services</h3>
                    <article>
                    Often, floors are the first impression that
                        a customer has an installation. We believe that
                        proactive and continuous maintenance of the floor leads to a
                        first-class appearance and business results
                        superior.
                    </article>
                    <h3>Deep kitchen cleaning</h3>
                    <article>
                    We thoroughly clean and sanitize the equipment
                        and surfaces as we remove grease and other debris.
                        With cutting edge technologies, our teams can change
                        the appearance of your food and nutrition department.
                    </article>
                    <h3>Deep Cleaning Equipment</h3>
                    <article>
                    Our core service offers a friendly approach
                        of the environment. Our 3-step process uses steam
                        superheated steam to deeply clean and
                        maintain mobile and immovable equipment
                    </article>
                    <h3>Deep lift cleaning</h3>
                    <article>
                    Our elevator cleaning program is a solution
                        comprehensive for dirty elevators. Our teams leave
                        the elevator cabs and the tracks free of dirt and
                        debris. Our process also works with stairs
                         and moving walkways.
                    </article>
                </div>
            </div>
         </div>
       
         <div className= "footer" >
            <img src={logo} alt="asd" />
            <div className= "footer_navigation" >
            <strong>Navigation</strong>
                        <li onClick={()=> handleNavigatePages("/")}>Home</li>
                        <li onClick={()=> handleNavigatePages("/in/estimate")}>Free Estimate</li>
                        <li onClick={()=> handleNavigatePages("/in/about")}>About US</li>
                        <li onClick={()=> handleNavigatePages("/in/login")}>Login</li>
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

export default OfficeIN;