import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import api from '../../services/api';

import '../../assets/css/EstimateBR.css';

import logo from '../../assets/images/logo_half.png';

import eng from '../../assets/images/united-states.png'
import span from '../../assets/images/spain.png'
import calen from '../../assets/images/calendar.png'
import phone from '../../assets/images/phone.png'
import woman from '../../assets/images/womam_verctor.png'
import selo from '../../assets/images/selo_small.png'
import shild from '../../assets/images/shild_small.png'
import hands from '../../assets/images/hands.png'
import equal from '../../assets/images/equal_small.png'

function EstimateBR() {
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

        alert(`Obrigado ${response.firstName}! registro feito com sucesso. Entraremos em contato com voce assim que possivel, obrigado!`);

}


  return (
    <div className= "container">

        <div className= "header">
            <ul>
                <li><img src={logo} alt="AirCnC"/></li>
                <li onClick={()=> handleNavigatePages("/")}>Home</li>
                <li onClick={()=> handleNavigatePages("/in/estimate")}>Or??amento</li>
                <li onClick={()=> handleNavigatePages("/in/about")}>Sobre</li>
                <li onClick={()=> handleNavigatePages("/in/login")}>login</li>
                <li onClick={() => handleDivLenguages() }>Linguagen</li>
            </ul>
        </div>
        <div className="blueLine"/>
        <div className= {div}>
            <ul>
                <li onClick={()=> handleNavigatePages("/in/estimate")}>
                    <img src={eng} alt="usa" />
                    <span>Ingl??s</span> 
                </li>
                <li onClick={()=> handleNavigatePages("/es/estimate")}>
                    <img src={span} alt="asd" />
                    <span>Espanhol</span> 
                </li>
            </ul>
        </div>

        <div className= "division_0" >
            
            <div className= "session12" >
                <h2>Or??amento</h2>
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
                                <option value="House Cleaning">Limpeza de Casa</option>
                                <option value="House First Clean">Limpeza de casa primeira vez</option>
                                <option value="Apartments">Apartameont</option>
                                <option value="Offices">Escrit??rios</option>
                                <option value="Pos Construction">Pos Constru????o</option>
                            </select>
                        </div>

                        <div className= "select" >
                            <select required value={bedrooms} onChange={e => setBedrooms(e.target.value)}>
                            <option value={bedrooms}>{bedrooms}</option>
                            <optgroup label="_________"></optgroup>
                                <option value="bedroom 1">1 quarto</option>
                                <option value="bedrooms 2">2 quartos</option>
                                <option value="bedrooms 3">3 quartos</option>
                                <option value="bedrooms 4">4 quartos</option>
                                <option value="bedrooms 4">4 quartos</option>
                                <option value="bedrooms 5">5 quartos</option>
                                <option value="bedrooms 6">6 quartos</option>
                            </select>
                        </div>

                        <div className= "select" >
                            <select required value={bathrooms} onChange={e => setBathrooms(e.target.value)}>
                            <option value={bathrooms}>{bathrooms}</option>
                            <optgroup label="_________"></optgroup>
                                <option value="bathroom 1">1 banheiro</option>
                                <option value="bathrooms 2">2 banheiros</option>
                                <option value="bathrooms 3">3 banheiros</option>
                                <option value="bathrooms 4">4 banheiros</option>
                                <option value="bathrooms 4">4 banheiros</option>
                                <option value="bathrooms 5">5 banheiros</option>
                                <option value="bathrooms 6">6 banheiros</option>
                            </select>
                        </div>

                        <div className= "select" >
                            <textarea placeholder="Descri????o"
                                value={description}
                                onChange={e => setDescription(e.target.value)} 
                             />
                        </div>

                        <div className= "select" >
                            <button className="button" type="submit">Enviar</button>  
                        </div>
                    </form>
                </div>

            </div>
        

            <div className= "services_"></div>
        </div>
        <div className= "services_works">
            <h3>Como funciona a limpeza NC?</h3>
            <div className= "services_works_grid">
                    <div className= "services_works_object">
                        <img src={calen} alt="asd" />
                        <p>Visite o nosso site</p>
                        <p>Acesse nosso site, informe-nos seus dados e o tamanho de sua casa, escrit??rio ou apartamento</p>
                    </div>
                    <div className= "services_works_object">
                        <img src={phone} alt="asd" />
                        <p>Reserve instantaneamente</p>
                        <p>Por: telefone, email ou SMS. Confirmaremos sua consulta e forma de pagamento.</p>
                    </div>
                    <div className= "services_works_object">
                        <img src={woman} alt="asd" />
                        <p>Seu profissional chega</p>
                        <p>Um profissional experiente e totalmente equipado chegar?? pontualmente ?? sua porta!</p>
                    </div>
            </div>
        </div>

        <div className= "services_quality">
            <h3>O nome mais confi??vel em limpeza dom??stica</h3>
            <p>
                Funciona assim: basta acessar nosso site, informar seus dados e o tamanho de sua casa,
                escrit??rio ou apartamento, e entraremos em contato para enviar um profissional de alto n??vel dom??stico
                servi??os de limpeza para trabalhar.
            </p>       
            <div className= "services_quality_grid">
                <div className= "services_quality_object">
                    <div className= "services_quality_top">
                        <img src={selo} alt="asd" />
                        <strong>Flex??vel</strong>
                    </div>
                    <p>
                    Sempre ajuda ter um profissional de servi??o que ?? capaz de reagir e responder
                    ??s suas necessidades de trabalho, sejam elas quais forem. Acontece que depois de fazer tarefas e reparos dom??sticos
                    trabalhos como o faz-tudo profissional de Santos, voc?? se torna muito adapt??vel. Estamos confiantes de que seremos
                    capaz de fazer um trabalho que atenda ??s suas necessidades e ao seu or??amento.
                    </p>
                </div>
                <div className= "services_quality_object">
                    <div className= "services_quality_top">
                        <img src={shild} alt="asd" />
                        <strong>De confian??a</strong>
                    </div>
                    <p>
                    Quando voc?? programa um servi??o de limpeza ou empregada por meio do Handy para ir ?? sua casa,
                    voc?? pode ficar tranquilo sabendo que algu??m estar?? em sua casa pronto para ir ao
                    hora que voc?? especificou. Eles ajudar??o a devolver seus quartos, banheiros, cozinha, sala
                    quarto, e mais para a condi????o de novo que voc?? se lembra de quando se mudou pela primeira vez!
                    </p>
                </div>
                <div className= "services_quality_object">
                    <div className= "services_quality_top">
                        <img src={hands} alt="asd" />
                        <strong>Conveniente</strong>
                    </div>
                    <p>
                    Tarde da noite no trabalho impedindo voc?? de manter seu apartamento arrumado? Muito ocupado tirando
                     as crian??as para a escola, treinos e encontros para passar o aspirador no ch??o? N??s sabemos que a vida pode
                     ser louco e imprevis??vel, e quando voc?? est?? cansado e sobrecarregado, a ??ltima coisa
                     qualquer um quer fazer ?? limpar sua casa. Seja qual for o motivo pelo qual voc?? est?? procurando por uma casa
                      ajuda de limpeza, Handy cuida de voc?? ..their home. Whatever the reason you???re looking for home
                      cleaning help, Handy has you covered..
                    </p>
                </div>
                <div className= "services_quality_object">
                    <div className= "services_quality_top">
                        <img src={equal} alt="asd" />
                        <strong>Flex??vel</strong>
                    </div>
                    <p>
                    Com o CS Cleaning, ?? f??cil agendar e reprogramar reservas. Basta abrir o site e
                    escolha a data e a hora mais adequadas para voc??. Ou talvez sua casa precise de uma profundidade extra
                    limpe com aten????o especial - voc?? pode usar o aplicativo para adicionar extras ?? sua reserva,
                    como lavanderia, dentro dos arm??rios, dentro da geladeira e muito mais. Fa??a do Handy o seu # 1
                    prestador de servi??os de limpeza, se voc?? est?? procurando uma limpeza dom??stica, limpeza de apartamento,
                    servi??o de limpeza, ou mais! more! 
                    </p>
                </div>
            </div>
        </div>


        <div className= "footer" >
            <img src={logo} alt="asd" />
            <div className= "footer_navigation" >
                        <strong>Navega????o</strong>
                        <li onClick={()=> handleNavigatePages("/br/home")}>Home</li>
                        <li onClick={()=> handleNavigatePages("/br/estimate")}>Or??amento</li>
                        <li onClick={()=> handleNavigatePages("/br/about")}>Sobre N??s</li>
                        <li onClick={()=> handleNavigatePages("/br/login")}>Login</li>
                  </div>
            <div className= "footer_navigation_information" >
                <strong>Informa????es de contato:</strong>
                <p>Servi??os de limpeza e higieniza????o dom??stica</p>
                <p>Telefone: (856) 577-2336</p>
                <a href = "mailto:nataliacrystina27@gmail.com?subject = Feedback&body = Message">e-mail: nataliacrystina27@gmail.com</a>
            </div>
         </div>
    </div>
  );
}

export default EstimateBR;