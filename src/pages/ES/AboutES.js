import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import '../../assets/css/AboutBR.css';

import logo from '../../assets/images/logo_half.png';

import avatar from '../../assets/images/avatar_vector.png';
import crachar from '../../assets/images/cracha_vector.png';
import clock from '../../assets/images/clock_vector.png';
import vac from '../../assets/images/vac_vector.png';
import selo from '../../assets/images/selo_verctor.png';
import seloG from '../../assets/images/selo.png';
import usa from '../../assets/images/united-states.png'
import por from '../../assets/images/brazil.png'



function AboutES() {
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
                <li onClick={()=> handleNavigatePages("/in/about")}>
                    <img src={usa} alt="usa" />
                    <span>Inglés</span> 
                </li>
                <li onClick={()=> handleNavigatePages("/br/about")}>
                    <img src={por} alt="por" />
                    <span>Portugués</span> 
                </li>
             </ul>
        </div>
        <div className= "division_0" >
            <div className= "session12" >
                <h2>Sobre nosotros</h2>
                <l>¡Nuestro amor por la limpieza se manifiesta!</l>
                    <article>
                    Somos una empresa de limpieza propiedad de mujeres que tiene toda la vida
                        de experiencia de limpieza detrás de nosotros. Vimos la necesidad de proporcionar un
                        Servicio de limpieza confiable, eficiente y de calidad para clientes que poseen y
                        administrar propiedades residenciales. Todo comienza con buena moral, entrenamiento y supervisión.
                        del equipo. Amamos a nuestro equipo y recompensamos el buen desempeño para mantenerlo motivado.
                        Estamos comprometidos a brindar solo el mejor servicio de limpieza a nuestros clientes.
                        Nos encanta limpiar y poner amor en nuestra limpieza. Sabemos que no a todo el mundo le gusta
                        limpiar, pero estamos seguros de que a todo el mundo le encanta un espacio limpio. Por eso lo hacemos
                        nuestro trabajo de tiempo completo ayudando a las personas a vivir en espacios más limpios. Iremos a tu
                        propiedad, ya sea una casa, una oficina, con una sonrisa y una esponja, y no nos iremos hasta que su
                        la casa está tan limpia como nos gustaría que estuvieran nuestras casas. Tratamos cada espacio con
                        respeto e integridad, para que se sienta bien viviendo y trabajando en ella.
                    </article>
                <img src={avatar} alt="asd" />
            </div>

            <div className= "session2" >
                <div className= "icon">
                    <img src={crachar} alt="asd" />
                    <strong>Consolidado y asegurado</strong>
                </div>
                <div className= "icon">
                    <img src={selo} alt="asd" />
                    <strong>Amable y profesional</strong>
                </div>
                <div className= "icon">
                    <img src={vac} alt="asd" />
                    <strong>Materiales de limpieza premium</strong>
                </div>
                <div className= "icon">
                    <img src={clock} alt="asd" />
                    <strong>A tiempo, cada vez</strong>
                </div>

            </div>

            <div className= "seloG" >
                    <img  src={seloG} alt="asd" />
            </div>
         </div>
       
            <div className= "footer" >
                <img src={logo} alt="asd"/>
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

export default AboutES;