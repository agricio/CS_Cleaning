import React, { useState }  from 'react';
import { useHistory } from 'react-router-dom';

import '../../assets/css/ApartBR.css';

import logo from '../../assets/images/logo_half.png';

import apart from '../../assets/images/apart.jpg';
import bath from '../../assets/images/bath.jpg';
import beth from '../../assets/images/beth.jpg';
import fRoom from '../../assets/images/fRoom.jpg';
import kitch from '../../assets/images/kitch.jpg';
import usa from '../../assets/images/united-states.png'
import por from '../../assets/images/brazil.png'

function ApartES() {
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
                    <li onClick={()=> handleNavigatePages("/")}>Presupuesto</li>
                    <li onClick={()=> handleNavigatePages("/es/about")}>Sobre nosotros</li>
                    <li onClick={()=> handleNavigatePages("/")}>login</li>
                    <li onClick={() => handleDivLenguages() }>Idioma</li>
                </ul>
            <div className="language"></div>
        </div>
       <div className="blueLine"/>
        <div className= {div}>
             <ul>
                <li onClick={()=> handleNavigatePages("/in/apart")}>
                    <img src={usa} alt="usa" />
                    <span>Inglés</span> 
                </li>
                <li onClick={()=> handleNavigatePages("/br/apart")}>
                    <img src={por} alt="por" />
                    <span>Portugués</span> 
                </li>
             </ul>
        </div>
        
         <div className= "box_main" >
                <h2>Limpieza y desinfección de apartamentos</h2>
                <img src={apart} alt="asd" />
                    <article>
                    En la primera limpieza, nuestros limpiadores de apartamentos limpiarán y desinfectarán a fondo su
                            Departamento, con especial atención a su cocina y baños.
                            En la segunda sesión de limpieza del apartamento, limpiaremos todo su apartamento; sin embargo,
                            esta vez, brindaremos servicios detallados en las áreas de dormir y de estar. Seguiremos manteniendo
                            este nivel de limpieza de detalles en todo el apartamento durante nuestras próximas visitas, proporcionando
                            servicios de limpieza profunda en forma rotativa.
                    </article>
         </div>

         <div className= "box_2" >
                <h2>
                    Siempre que limpiemos, proporcionaremos servicios de limpieza de apartamentos.
                    que incluyen lo siguiente:
                </h2>
            <div className= "box_3">

                <div className= "box_4">
                    <img src={bath} alt="asd" />
                    <div className= "texts">
                        <h3>Baños</h3>
                        <article>
                        Telas de araña removidas, quitando el polvo, pisos limpios,
                            baños limpios, espejos / accesorios cromados
                            puertas de ducha limpias y limpias, paredes de azulejos,
                            bañera / duchas limpias.
                    </article>
                    </div>
                </div>
                <div className= "box_5">
                    <img src={beth} alt="asd" />
                    <div className= "texts2">
                        <h3>Áreas para dormir</h3>
                        <article>
                        Superficies limpiadas a mano, suelos limpios, polvo
                                general, se quitaron las telarañas, puertas y
                                marcos de puertas limpios.
                        </article>
                    </div>
                </div>
                <div className= "box_4">
                    <img src={fRoom} alt="asd" />
                    <div className= "texts">
                        <h3>Áreas de estar</h3>
                            <article>
                            Superficies limpiadas a mano, quitadas las telarañas,
                                 puertas y marcos limpios, desempolvando
                                pisos en general, limpios ..
                            </article>
                    </div>
                </div>
                <div className= "box_5">
                    <img src={kitch} alt="asd" />
                         <div className= "texts2">
                            <h3>Cocina</h3>
                                <article>
                                Encimeras limpias, fuera del extractor limpio, arriba
                                    limpiar la parte superior y el frente de la estufa, limpiar las gotas / superficies de vidrio,
                                    fregaderos limpios y cromados, frentes de todos los electrodomésticos limpios,
                                    polvo general, telarañas quitadas, microondas limpio,
                                    Puertas y marcos de puertas limpias.
                         </article>
                    </div>
                </div>
            </div>
         </div>
       
         <div className= "footer" >
            <img src={logo} alt="asd" />
            <div className= "footer_navigation" >
            <strong>Navegación</strong>
                    <li onClick={()=> handleNavigatePages("/es/home")}>Home</li>
                    <li onClick={()=> handleNavigatePages("/")}>Presupuesto</li>
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

export default ApartES;