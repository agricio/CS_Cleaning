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
import usa from '../../assets/images/united-states.png'
import por from '../../assets/images/brazil.png'

function HomeES() {
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
                    <li onClick={()=> handleNavigatePages("/es/home")}>Home</li>
                    <li onClick={()=> handleNavigatePages("/es/estimate")}>Presupuesto</li>
                    <li onClick={()=> handleNavigatePages("/es/about")}>Sobre nosotros</li>
                    <li onClick={()=> handleNavigatePages("/")}>login</li>
                    <li onClick={() => handleDivLenguages() }>Idioma</li>
                </ul>
            <div className="language"></div>
        </div>
        
       <div className="blueLine"/>
        <div className= {div}>
             <ul>
                <li onClick={()=> handleNavigatePages("/")}>
                    <img src={usa} alt="usa" />
                    <span>Inglés</span> 
                </li>
                <li onClick={()=> handleNavigatePages("/br/home")}>
                    <img src={por} alt="por" />
                    <span>Portugués</span> 
                </li>
             </ul>
        </div>
      
        <div className= "fold">
            <img className= "boxWhite" src={backWithe} alt="AirCnC"/>
            <img className= "logo" src={logoG} alt="AirCnC"/>
            <strong>Servicios de limpieza y saneamiento del hogar</strong>
            <p className= "contatos_fone">Contactos: (856) 577-2336</p>
            <p className= "contatos_email">nataliacrystina27@gmail.com</p>
        </div>

        <div className= "services">
            <h1>Nuestros servicios</h1>
                 <article>Somos proveedores de servicios de limpieza profesionales altamente calificados en Nueva Jersey.
                    Nuestro objetivo es brindar limpieza a todos los espacios que encontramos. Garantizamos excelente
                    servicio de limpieza en el área de Nueva Jersey, en todo momento, y la promesa de que nuestros limpiadores
                    confiable y trabajador, para una experiencia mutua de respeto y satisfacción
               </article>
            <div className= "servicesOptions">
                <ul>
                        <li
                           onClick={()=> handleNavigatePages("/es/house")}
                            className=''>
                                <img src={houseVector} alt="asd" />
                                <span>Casas</span> 
                         </li>
                         <li
                            onClick={()=> handleNavigatePages("/es/apart")}
                            className=''>
                                <img src={buildVector} alt="asd" />
                                <span>Apartamentos</span> 
                         </li>
                         <li
                            onClick={()=> handleNavigatePages("/es/office")}
                            className=''>
                                <img src={officeVector} alt="asd" />
                                <span>Oficinas</span> 
                         </li>
                         <li 
                            onClick={()=> handleNavigatePages("/es/construct")}
                            className=''>
                                <img src={constructVector} alt="asd" />
                                <span>Post construcción</span> 
                         </li>
                </ul>

            </div>
        </div>
         <div className= "about" >
            <img src={cleaningTools} alt="asd" />
            <div className= "about_text" >
                <h2>Sobre nosotros</h2>
                    <article>
                            Está científicamente probado que un entorno
                             limpiar puede alegrar tu estado de ánimo, aumentar tu
                            productividad y obtenga excelentes primeras impresiones!

                            Sabemos que no a todo el mundo le encanta limpiar, pero
                            estamos seguros de que sabemos lo que hacemos y
                            por eso creamos un ambiente limpio, ordenado y
                            organizamos nuestro trabajo a tiempo completo para
                            ayudar a las personas a vivir y trabajar sin problemas.
                    </article>
                <button 
                    className="btn" 
                    type="submit" 
                    onClick={()=> handleNavigatePages("/about")}>Sepa mas</button>
            </div>
            
         </div>
         <div className= "customers">
            <h1>Clientes felices</h1>
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
                    <strong>Navegación</strong>
                    <li onClick={()=> handleNavigatePages("/es/home")}>Home</li>
                    <li onClick={()=> handleNavigatePages("/es/estimate")}>Presupuesto</li>
                    <li onClick={()=> handleNavigatePages("/es/about")}>Sobre nosotros</li>
                    <li onClick={()=> handleNavigatePages("/")}>login</li>
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

export default HomeES;