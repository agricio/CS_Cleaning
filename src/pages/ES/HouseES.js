import React, { useState }  from 'react';
import { useHistory } from 'react-router-dom';

import '../../assets/css/House.css';

import logo from '../../assets/images/logo_half.png';

import tools from '../../assets/images/cleaning tools.jpg';
import House from '../../assets/images/house_img.jpg';
import bath from '../../assets/images/bath.jpg';
import beth from '../../assets/images/beth.jpg';
import kitch from '../../assets/images/kitch.jpg';
import por from '../../assets/images/brazil.png'
import usa from '../../assets/images/united-states.png'


function HouseES() {
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
                <li onClick={()=> handleNavigatePages("/in/house")}>
                    <img src={usa} alt="usa" />
                    <span>Inglés</span> 
                </li>
                <li onClick={()=> handleNavigatePages("/br/house")}>
                    <img src={por} alt="por" />
                    <span>Portugués</span> 
                </li>
             </ul>
        </div>
        
         <div className= "box_main" >
            <h2>Limpieza de la casa </h2>
                <img src={House} alt="asd" />
                    <article>
                    ¿Vale la pena un servicio de limpieza de la casa?
                         Eres la única persona que puede decidir si una casa
                         el servicio de limpieza vale la pena el dinero. La mayoría de la gente de hoy solo
                         no tienen tiempo para limpiar sus propias casas, además de sus
                         responsabilidades en el trabajo, como padres, e incluso para apartar tiempo
                         para ellos mismos. Tendrás que decidir si quieres pagar
                         otra persona que haga la limpieza por usted mientras usted enfoca su
                         tiempo y atención en otros lugares. Además de darte más tiempo,
                         un servicio profesional de limpieza de la casa puede brindarle tranquilidad
                         porque sabes que nada se pasará por alto y que tu casa
                         se limpiará y desinfectará adecuadamente 
                    </article>
         </div>

         <div className= "box_2" >
            <div className= "intro" >
                <h2>¿Qué se incluye en la limpieza de la casa? </h2>
                <p> 
                Esto es lo que puede esperar de una limpieza de la casa por parte de un profesional 
                de CS Cleaning. Tiene dos tipos de limpieza: primera limpieza y limpieza periódica  
                </p>
                <p>Limpieza periódica: esta limpieza incluye todos los elementos a continuación y se puede realizar: semanal, dos veces por semana, quincenal o mensual </p>
                <p>
                    Primera limpieza: La primera limpieza es más profunda, se quitan todos los muebles de todos los rincones de la rueda,
                    Las ventanas se limpian más profundamente, la ventana se limpia por dentro y por fuera, todas las luces se limpian a mano hasta que limpiamos la ropa. 
                </p>
                <button 
                    className="butt" 
                    type="submit" 
                    onClick={()=> handleNavigatePages("/in/estimate")}>Estimación gratuíta</button>
            </div>
            <div className= "box_3_">

                <div className= "box_14_">
                    <img src={beth} alt="asd" />
                    <div className= "texts">
                        <h3>Dormitorio, sala de estar y áreas comunes </h3>
                        <li>Desempolvar todas las superficies accesibles </li>
                        <li>Limpie todos los espejos y accesorios de vidrio </li>
                        <li>Limpiar todas las superficies del piso </li>
                        <li>Sacar basura y reciclar </li>
                    </div>
                </div>
                <div className= "box_5_">
                    <img src={bath} alt="asd" />
                    <div className= "texts">
                        <h3>Limpieza de baños </h3>
                        <li>Lavar y desinfectar el inodoro, la ducha, la bañera y el lavabo.</li>
                        <li>Desempolvar todas las superficies accesibles </li>
                        <li>Limpie todos los espejos y accesorios de vidrio </li>
                        <li>Limpiar todas las superficies del piso </li>
                        <li>Sacar basura y reciclar </li>
                    </div>
                </div>
                <div className= "box_14_">
                    <img src={kitch} alt="asd" />
                    <div className= "texts">
                        <h3>Limpieza de cocina </h3>
                        <li>Desempolvar todas las superficies accesibles </li>
                        <li>Vacíe el fregadero y cargue el lavavajillas con platos sucios </li>
                        <li>Limpie el exterior de la estufa, el horno y el refrigerador. </li>
                        <li>Limpiar todas las superficies del piso </li>
                        <li>Sacar basura y reciclar </li>
                    </div>
                </div>
                <div className= "box_5_">
                    <img src={tools} alt="asd" />
                         <div className= "texts">
                         <h3>Extras</h3>
                        <li>Armarios interiores</li>
                        <li>Refrigerador interior</li>
                        <li>Horno interior</li>
                        <li>Lavado y secado de ropa</li>
                        <li>Sacar basura y reciclar </li>
                    </div>
                </div>
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

export default HouseES;