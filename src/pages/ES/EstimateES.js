import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import api from '../../services/api';

import '../../assets/css/EstimateBR.css';

import logo from '../../assets/images/logo_half.png';


import por from '../../assets/images/brazil.png'
import usa from '../../assets/images/united-states.png'
import calen from '../../assets/images/calendar.png'
import phone from '../../assets/images/phone.png'
import woman from '../../assets/images/womam_verctor.png'
import selo from '../../assets/images/selo_small.png'
import shild from '../../assets/images/shild_small.png'
import hands from '../../assets/images/hands.png'
import equal from '../../assets/images/equal_small.png'


function EstimateES() {
    const [startDate, setStartDate] = useState(new Date());
    const [ div, setDiv ] = useState(['none']);
    const history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [typeService, setTypeService] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [date, setDate] = useState('');
    const [address, setAddress] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [bathrooms, setBathrooms] = useState('');
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

async function handleRegister(e){
    e.preventDefault();


    setDate(startDate.toDateString());

    const response = await api.post('/nouser/estimate', {
        firstName,
        lastName,
        email,
        address,
        zipCode,
        date,
        phoneNumber,
        typeService,
        bedrooms,
        bathrooms,
        description
    });

    const mailSend = await api.post('/mail', {
        firstName,
        lastName,
        email,
        address,
        zipCode,
        date,
        phoneNumber,
        typeService,
        bedrooms,
        bathrooms,
        description
    });

        alert(`Thank you ${response.firstName}! successful registration. We will contact you as soon as possible thanks!`);

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
                <li onClick={()=> handleNavigatePages("/in/estimate")}>
                    <img src={usa} alt="usa" />
                    <span>Ingl??s</span> 
                </li>
                <li onClick={()=> handleNavigatePages("/br/estimate")}>
                    <img src={por} alt="por" />
                    <span>Portugu??s</span> 
                </li>
             </ul>
        </div>

        <div className= "division_0" >
            
            <div className= "session12" >
                <h2>Estimaci??n libre</h2>
            </div>
            <div className= "session13" ></div>

            <div className= "form_box" >
             <div className= "form_contanier">
                 <form onSubmit={handleRegister}>

                 <div className= "imput" >
                            <input placeholder="First Name"
                                id="firstName"
                                type="text"
                                value={firstName}
                                required 
                                onChange={e => setFirstName(e.target.value)} 
                            />
                        </div>

                        <div className= "imput" >
                            <input placeholder="Last Name"
                                type="text"
                                id="lastName"
                                value={lastName}
                                required 
                                onChange={e => setLastName(e.target.value)} 
                            />
                        </div>

                        <div className= "imput" >
                            <input type="email"
                                id="email" 
                                placeholder="E-mail"
                                value={email}
                                required 
                                onChange={e => setEmail(e.target.value)} 
                            />
                        </div>

                        <div className= "imput" >
                            <input type="text" 
                                placeholder="Addrees"
                                id="adrees"
                                value={address}
                                required 
                                onChange={e => setAddress(e.target.value)} 
                            />
                        </div>

                        <div className= "imput" >
                            <input type="text" placeholder="Zip code"
                                id="zipconde"
                                pattern="[0-9]*"
                                value={zipCode}
                                required 
                                onChange={e => setZipCode(e.target.value)} 
                            />
                        </div>

                        <div className= "imput" >
                            <DatePicker 
                                selected={startDate}
                                dateFormat="MM/dd/yyyy"
                                minDate={new Date()}
                                onSelect={date => {
                                        setStartDate(date)
                                } }
                            />
                        </div>

                        <div className= "imput" >
                            <input type="text"
                                    id="Phone" 
                                    name="phone" 
                                    placeholder="Phone: ***-***-****"
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                    required 
                                value={phoneNumber}
                                onChange={e => setPhoneNumber(e.target.value)} 
                            />
                        </div>

                        <div className= "select" >
                            <select required value={typeService}  onChange={e => setTypeService(e.target.value)}>
                                <option value={typeService}>{typeService}</option>
                            <optgroup label="_________"></optgroup>
                                <option value="House Cleaning">Limpieza de la casa</option>
                                <option value="House First Clean">Casa primera limpia</option>
                                <option value="Apartments">Apartamentos</option>
                                <option value="Offices">Oficinas</option>
                                <option value="Pos Construction">Pos construcci??n</option>
                            </select>
                        </div>

                        <div className= "select" >
                            <select required value={bedrooms} onChange={e => setBedrooms(e.target.value)}>
                            <option value={bedrooms}>{bedrooms}</option>
                            <optgroup label="_________"></optgroup>
                                <option value="bedroom 1">1 Cuarto</option>
                                <option value="bedrooms 2">2 Cuartos</option>
                                <option value="bedrooms 3">3 Cuartos</option>
                                <option value="bedrooms 4">4 Cuartos</option>
                                <option value="bedrooms 4">4 Cuartos</option>
                                <option value="bedrooms 5">5 Cuartos</option>
                                <option value="bedrooms 6">6 Cuartos</option>
                            </select>
                        </div>

                        <div className= "select" >
                            <select required value={bathrooms} onChange={e => setBathrooms(e.target.value)}>
                            <option value={bathrooms}>{bathrooms}</option>
                            <optgroup label="_________"></optgroup>
                                <option value="bathroom 1">1 cuarto de ba??o</option>
                                <option value="bathrooms 2">2 cuartos de ba??o</option>
                                <option value="bathrooms 3">3 cuartos de ba??o</option>
                                <option value="bathrooms 4">4 cuartos de ba??o</option>
                                <option value="bathrooms 4">4 cuartos de ba??o</option>
                                <option value="bathrooms 5">5 cuartos de ba??o</option>
                                <option value="bathrooms 6">6 cuartos de ba??o</option>
                            </select>
                        </div>

                        <div className= "select" >
                            <textarea placeholder="Description"
                                value={description}
                                onChange={e => setDescription(e.target.value)} 
                             />
                        </div>

                        <div className= "select" >
                            <button className="button" type="submit">Submit</button>  
                        </div>
                    </form>
                </div>

            </div>
        

            <div className= "services_"></div>
        </div>
        <div className= "services_works">
            <h3>How NC Cleaning Works?</h3>
            <div className= "services_works_grid">
                    <div className= "services_works_object">
                        <img src={calen} alt="asd" />
                        <p>Visit our website  </p>
                        <p>Access our website, inform us yours data and the size of your house, office or apartment</p>
                    </div>
                    <div className= "services_works_object">
                        <img src={phone} alt="asd" />
                        <p>Book instantly</p>
                        <p>By: phone, email or SMS. We'll confirm your appointment and payment form.</p>
                    </div>
                    <div className= "services_works_object">
                        <img src={woman} alt="asd" />
                        <p>Your pro arrives</p>
                        <p>An experienced, fully-equipped clear professional will show up on time at your doorstep!</p>
                    </div>
            </div>
        </div>

        <div className= "services_quality">
            <h3>The most trusted name in home cleaning </h3>
            <p>
                It works like this: just access our website, inform us your data and the size of your house, 
                office or apartment, and we will contact you to send a professional of high level domestic 
                cleaning services to work.
            </p>       
            <div className= "services_quality_grid">
                <div className= "services_quality_object">
                    <div className= "services_quality_top">
                        <img src={selo} alt="asd" />
                        <strong>Flexible</strong>
                    </div>
                    <p>
                    It always helps to have a service professional who is able to react and respond
                    to your work needs, whatever they may be. It turns out that after doing tasks and household repairs
                    jobs like the professional Santos handyman, you become very adaptable. We are confident that we will be
                    able to do a job that meets your needs and your budget.
                    </p>
                </div>
                <div className= "services_quality_object">
                    <div className= "services_quality_top">
                        <img src={shild} alt="asd" />
                        <strong>Reliable </strong>
                    </div>
                    <p>
                    When you schedule a cleaner or maid service through Handy to come to your home, 
                    you can rest assured knowing that someone will be at your home ready to go at the 
                    time you specified. They???ll help return your bedrooms, bathrooms, kitchen, living 
                    room, and more to the like-new condition that you remember from when you first moved in! 
                    </p>
                </div>
                <div className= "services_quality_object">
                    <div className= "services_quality_top">
                        <img src={hands} alt="asd" />
                        <strong>Convenient</strong>
                    </div>
                    <p>
                    Late nights at work preventing you from keeping your apartment tidy? Too busy taking
                     the kids to school, practices, and playdates to vacuum the floors? We know life can 
                     be crazy and unpredictable, and when you???re tired and overworked, the last thing 
                     anybody wants to do is clean their home. Whatever the reason you???re looking for home
                      cleaning help, Handy has you covered..
                    </p>
                </div>
                <div className= "services_quality_object">
                    <div className= "services_quality_top">
                        <img src={equal} alt="asd" />
                        <strong>Flexible</strong>
                    </div>
                    <p>
                    With CS Cleaning, it???s easy to schedule and reschedule bookings. Just open the site and 
                    choose the date and time that works best for you. Or maybe your home needs an extra deep 
                    clean with some special attention - you can use the app to add extras to your booking, 
                    like laundry, inside the cabinets, inside the refrigerator, and more. Make Handy your #1 
                    cleaning services provider, whether you???re looking for a house cleaning, apartment cleaning, 
                    maid service, or more! 
                    </p>
                </div>
            </div>
        </div>


        <div className= "footer" >
                <img src={logo} alt="asd" />
                <div className= "footer_navigation" >
                            <strong>Navigation</strong>
                            <li onClick={()=> handleNavigatePages("/es/home")}>Home</li>
                            <li onClick={()=> handleNavigatePages("/es/estimate")}>Free Estimate</li>
                            <li onClick={()=> handleNavigatePages("/es/about")}>About US</li>
                            <li onClick={()=> handleNavigatePages("/es/login")}>Login</li>
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

export default EstimateES;