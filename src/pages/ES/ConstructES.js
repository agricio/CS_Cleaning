import React, { useState }  from 'react';
import { useHistory } from 'react-router-dom';

import '../../assets/css/ConstructBR.css';

import logo from '../../assets/images/logo_half.png';

import construct from '../../assets/images/construct.jpg';
import usa from '../../assets/images/united-states.png'
import por from '../../assets/images/brazil.png'
function ConstructES() {
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
                <li onClick={()=> handleNavigatePages("/in/construct")}>
                    <img src={usa} alt="usa" />
                    <span>Inglés</span> 
                </li>
                <li onClick={()=> handleNavigatePages("/br/construct")}>
                    <img src={por} alt="por" />
                    <span>Portugués</span> 
                </li>
             </ul>
        </div>
        
         <div className= "session11" >
                <h2>Limpieza posterior a la construcción</h2>
                <img src={construct} alt="asd" />
                    <article>
                    La limpieza post-construcción es un servicio de limpieza que se realiza en edificios nuevos o rehabilitados.
                            De la propia palabra, “post-construcción”, se entiende que esta limpieza se realiza después de la parte de la
                            construcción. Un contratista de construcción puede realizar una limpieza general de escombros, pero el
                            la limpieza detallada ya no es parte de su trabajo. Este tipo de limpieza se realiza en todo
                            la instalación, de arriba a abajo; no significa simplemente barrer el piso, limpiar la alfombra y
                            otras áreas visibles. A continuación se muestran algunos de los requisitos de limpieza que deben cumplirse.
                            asistió:
                    </article>
         </div>

         <div className= "box2" >
                <h2>
                Ofrecemos limpieza, según los requisitos del lugar de trabajo,
                    Nuestras especificaciones de limpieza incluyen, pero no se limitan a:
                 </h2>

                <div className= "text_box">
                    <ul>
                            <li>Eliminación y eliminación de escombros</li>
                            <li>Polvo alto y bajo</li>
                            <li>Limpieza local</li>
                            <li>Higienización y desinfección</li>
                            <li>Limpieza en húmedo / limpieza de paredes, techos, lámparas, rodapiés, puertas, herrajes y marcoss</li>
                            <li>Limpieza / sellado de lechada</li>
                            <li>Cuidados com pisos (varrer - aspirar - esfregar - esfregar - polir - polir - tira de vedação / cera, etc.)</li>
                            <li>Limpieza de detalles como bordes, esquinas, rendijas, aberturas, plafones, etc.</li> 
                            <li>Eliminación de adhesivos y accesorios de pulido</li> 
                            <li>Limpieza de armarios / cajones / armarios / estantes / golpes y golpes</li> 
                            <li>Limpieza de vidrio</li>
                            <li>Cuidado del suelo de piedra</li>
                            <li>Electrodomésticos para sala de descanso / cocina</li> 
                            <li>Eliminación de manchas de pintura, grasa y calafateo</li>
                            <li>Limpieza de instalaciones eléctricas e hidráulicas</li>
                            <li>Aspirar / teñir / limpiar alfombras</li>
                            <li>Limpieza de ventanas y marcos de ventanas / alféizares (interiores y exteriores)</li>
                    </ul>
                   
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

export default ConstructES;