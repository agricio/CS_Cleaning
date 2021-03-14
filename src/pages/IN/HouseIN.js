import React, { useState }  from 'react';
import { useHistory } from 'react-router-dom';

import '../../assets/css/House.css';

import logo from '../../assets/images/logo_half.png';

import tools from '../../assets/images/cleaning tools.jpg';
import House from '../../assets/images/house_img.jpg';
import bath from '../../assets/images/bath.jpg';
import beth from '../../assets/images/beth.jpg';
import kitch from '../../assets/images/kitch.jpg';
import port from '../../assets/images/brazil.png'
import span from '../../assets/images/spain.png'


function HouseIN() {
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
            <h2>House Cleaning</h2>
                <img src={House} alt="asd" />
                    <article>
                        Is a House Cleaning Service Worth It?
                        You are the only person that can decide whether a house 
                        cleaning service is worth the money. Most people today just 
                        don't have the time to clean their own homes, on top of their 
                        responsibilities at work, as parents, and even to set aside time 
                        for themselves. You will have to decide whether you want to pay 
                        someone else to do the cleaning for you while you focus your 
                        time and attention elsewhere. In addition to giving you more time, 
                        a professional house cleaning service can bring you peace of mind 
                        because you know nothing will be overlooked and that your home 
                        will be properly cleaned and sanitized
                    </article>
         </div>

         <div className= "box_2" >
            <div className= "intro" >
                <h2>What's Included in a House Cleaning?</h2>
                <p> 
                    Here is what you can expect from a house cleaning 
                    from a CS Cleanning professional.has two types of cleaning: first cleaning and periodic cleaning 
                </p>
                <p>Periodic cleaning: this cleaning includes all items below and can be done: weekly, twice a week, biweekly, or monthly </p>
                <p>
                    First cleaning: The first cleaning is more thorough, all the furniture is removed from all corners of the wheel, 
                    windows are cleaned deeper, the window is cleaned inside and out, all the lights are cleaned by hand until we clean the laundry.
                </p>
                <button 
                    className="butt" 
                    type="submit" 
                    onClick={()=> handleNavigatePages("/in/estimate")}>Free Estimate</button>
            </div>
            <div className= "box_3_">

                <div className= "box_4_">
                    <img src={beth} alt="asd" />
                    <div className= "texts">
                        <h3>Bedroom, Living Room & Common Areas</h3>
                        <li>Dust all accessible surfaces</li>
                        <li>Wipe down all mirrors and glass fixtures</li>
                        <li>Clean all floor surfaces</li>
                        <li>Take out garbage and recycling</li>
                    </div>
                </div>
                <div className= "box_5_">
                    <img src={bath} alt="asd" />
                    <div className= "texts">
                        <h3>Bathroom Cleaning</h3>
                        <li>Wash and sanitize the toilet, shower, tub and sink</li>
                        <li>Dust all accessible surfaces</li>
                        <li>Wipe down all mirrors and glass fixtures</li>
                        <li>Clean all floor surfaces</li>
                        <li>Take out garbage and recycling</li>
                    </div>
                </div>
                <div className= "box_4_">
                    <img src={kitch} alt="asd" />
                    <div className= "texts">
                        <h3>Kitchen Cleaning</h3>
                        <li>Dust all accessible surfaces</li>
                        <li>Empty sink and load up dishwasher with dirty dishes</li>
                        <li>Wipe down exterior of stove, oven and fridge</li>
                        <li>Clean all floor surfaces</li>
                        <li>Take out garbage and recycling</li>
                    </div>
                </div>
                <div className= "box_5_">
                    <img src={tools} alt="asd" />
                         <div className= "texts">
                         <h3>Extras</h3>
                        <li>Inside cabinets</li>
                        <li>Inside fridge</li>
                        <li>Inside oven</li>
                        <li>Laundry wash & dry</li>
                        <li>Take out garbage and recycling</li>
                    </div>
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

export default HouseIN;