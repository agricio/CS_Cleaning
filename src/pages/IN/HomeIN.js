import React, { useState }  from 'react';
import { useHistory } from 'react-router-dom';

import '../../assets/css/HomeBR.css';

import logo from '../../assets/images/logo_half.png';
import backWithe from '../../assets/images/back_withe.png';
import houseVector from '../../assets/images/house_vector.png';
import buildVector from '../../assets/images/biuld_vector.png';
import officeVector from '../../assets/images/office_vector.png';
import constructVector from '../../assets/images/construct_vector.png';
import cleaningTools from '../../assets/images/cleaning tools.jpg';
import logoG from '../../assets/images/logo.png';
import port from '../../assets/images/brazil.png'
import span from '../../assets/images/spain.png'

function HomeIN() {
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
                    <li onClick={()=> handleNavigatePages("/in/estimate")}>Free Estimate</li>
                    <li onClick={()=> handleNavigatePages("/in/about")}>About</li>
                    <li onClick={()=> handleNavigatePages("/")}>login</li>
                    <li onClick={() => handleDivLenguages() }>Lenguage</li>
                </ul>
            <div className="language"></div>
        </div>
       <div className="blueLine"/>
        <div className= {div}>
             <ul>
                <li onClick={()=> handleNavigatePages("/br/home")}>
                    <img src={port} alt="usa" />
                    <span>Portuguese</span> 
                </li>
                <li onClick={()=> handleNavigatePages("/es/home")}>
                    <img src={span} alt="asd" />
                    <span>Spanish</span> 
                </li>
             </ul>
        </div>
      
        <div className= "fold">
            <img className= "boxWhite" src={backWithe} alt="AirCnC"/>
            <img className= "logo" src={logoG} alt="AirCnC"/>
            <strong>House Cleaning and Sanitation Services</strong>
            <p className= "contatos_fone">Contacts: (856) 577-2336</p>
            <p className= "contatos_email">nataliacrystina27@gmail.com</p>
        </div>

        <div className= "services">
            <h1>Our services</h1>
                 <article>We are highly rated professional cleaning service providers in New Jersey.
                    Our goal is to provide cleanliness to all the spaces we find. We guarantee excellent
                    cleaning service in the New Jersey area, every time, and the promise that our cleaners are
                    reliable and hardworking, for a mutual experience of respect and satisfaction.
               </article>
            <div className= "servicesOptions">
                <ul>
                        <li
                           onClick={()=> handleNavigatePages("/in/house")}
                            className=''>
                                <img src={houseVector} alt="asd" />
                                <span>Houses</span> 
                         </li>
                         <li
                            onClick={()=> handleNavigatePages("/in/apart")}
                            className=''>
                                <img src={buildVector} alt="asd" />
                                <span>Apartments</span> 
                         </li>
                         <li
                            onClick={()=> handleNavigatePages("/in/office")}
                            className=''>
                                <img src={officeVector} alt="asd" />
                                <span>Offices</span> 
                         </li>
                         <li 
                            onClick={()=> handleNavigatePages("/in/construct")}
                            className=''>
                                <img src={constructVector} alt="asd" />
                                <span>Post construction</span> 
                         </li>
                </ul>

            </div>
        </div>
         <div className= "about" >
            <img src={cleaningTools} alt="asd" />
            <div className= "about_text" >
                <h2>About Us</h2>
                    <article>It is scientifically proven that an environment
                             clean can brighten your mood, increase your
                            productivity and make great first impressions!

                            We know that not everyone loves to clean, but
                            we're sure we know what we do and
                            that's why we create a clean, tidy and
                            organized our full-time work to
                            help people to live and work smoothly.
                    </article>
                <button 
                    className="btn" 
                    type="submit" 
                    onClick={()=> handleNavigatePages("/in/about")}>See more</button>
            </div>
            
         </div>
         <div className= "customers">
            <h1>Clientes Felizes</h1>
            <div className= "customers-options">
                <ul>
                        <li
                            className='customer_inside'>
                                <img src={houseVector} alt="asd" />
                                <span>Casas</span>
                                <article>
                                        “Os faxineiros saem da minha casa em um
                                        forma notável, semana após semana.
                                        Life Maid Easy é excelente e confiável.
                                        Nós os recomendamos para amigos e
                                        toda vez que eles estão satisfeitos. Não vamos
                                        trabalhe com qualquer outra pessoa! ”
                                </article> 
                         </li>
                         <li
                            className='customer_inside'>
                                <img src={buildVector} alt="asd" />
                                <span>Apartamentos</span>
                                <article>
                                    “Os faxineiros saem da minha casa em um
                                    forma notável, semana após semana.
                                    Life Maid Easy é excelente e confiável.
                                    Nós os recomendamos para amigos e
                                    toda vez que eles estão satisfeitos. Não vamos
                                    trabalhe com qualquer outra pessoa! ”
                                </article>  
                         </li>
                         <li
                            className='customer_inside'>
                                <img src={officeVector} alt="asd" />
                                <span>Escritórios</span>
                                <article>“Os faxineiros saem da minha casa em um
                                        forma notável, semana após semana.
                                        Life Maid Easy é excelente e confiável.
                                        Nós os recomendamos para amigos e
                                        toda vez que eles estão satisfeitos. Não vamos
                                        trabalhe com qualquer outra pessoa! ”
                                </article>  
                         </li>
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

export default HomeIN;