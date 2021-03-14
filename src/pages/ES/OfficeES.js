import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import '../../assets/css/OfficeBR.css';

import logo from '../../assets/images/logo_half.png';
import office from '../../assets/images/office.jpg';
import usa from '../../assets/images/united-states.png'
import por from '../../assets/images/brazil.png'

function OfficeES() {
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
             <li onClick={()=> handleNavigatePages("/in/apart")}>
                    <img src={usa} alt="usa" />
                    <span>Inglés</span> 
                </li>
                <li onClick={()=> handleNavigatePages("/br/apart")}>
                    <img src={por} alt="asd" />
                    <span>Portugués</span> 
                </li>
             </ul>
        </div>
        <div className= "division_0" >
            <div className= "division_1" >
                <h2>Limpeza Comercial e Escritorio</h2>
                <img src={office} alt="asd" />
                <article>
                Las apariencias lo son todo. Si tiene una empresa, quiere asegurarse de que sus clientes
                    la mejor primera impresión posible. Proporcionarles un espacio comercial limpio y ordenado es
                    un gran comienzo. La mayoría de las personas dejan sus primeras impresiones de inmediato y
                    Los negocios sucios o desagradables pueden dejarles una impresión negativa. Ofrecemos limpiezas
                    piso a techo para pequeñas propiedades comerciales y de oficinas.
                </article>
            </div>

            <div className= "division_2" >
                <h2>
                Ofrecemos limpieza, según los requisitos del lugar de trabajo,
                    Nuestras especificaciones de limpieza incluyen, pero no se limitan a:
                </h2>

                <div className= "division_3">
                    <h3>Servicios de tratamiento de suelos</h3>
                    <article>
                    A menudo, los suelos son la primera impresión que
                        un cliente tiene una instalación. Creemos que
                        El mantenimiento proactivo y continuo del suelo conduce a una
                        apariencia y resultados comerciales de primera clase
                        superior.
                    </article>
                    <h3>Limpieza profunda de cocina</h3>
                    <article>
                    Limpiamos y desinfectamos a fondo el equipo
                        y superficies a medida que eliminamos la grasa y otros desechos.
                        Con tecnologías de vanguardia, nuestros equipos pueden cambiar
                        la apariencia de su departamento de alimentación y nutrición.
                    </article>
                    <h3>Equipo de limpieza profunda</h3>
                    <article>
                    Nuestro servicio principal ofrece un enfoque amigable
                        del medio ambiente. Nuestro proceso de 3 pasos utiliza vapor
                        vapor sobrecalentado para limpiar profundamente y
                        mantener equipos móviles e inamovibles
                    </article>
                    <h3>Limpieza de elevación profunda</h3>
                    <article>
                    Nuestro programa de limpieza de ascensores es una solución
                        integral para ascensores sucios. Nuestros equipos se van
                        las cabinas del ascensor y las vías libres de suciedad y
                        escombros. Nuestro proceso también funciona con escaleras
                         y pasarelas móviles.
                    </article>
                </div>
            </div>
         </div>
       
         <div className= "footer" >
            <img src={logo} alt="asd" />
            <div className= "footer_navigation" >
                        <strong>Navegação</strong>
                        <li onClick={()=> handleNavigatePages("/es/home")}>Home</li>
                        <li onClick={()=> handleNavigatePages("/es/estimate")}>Presupuesto</li>
                        <li onClick={()=> handleNavigatePages("/es/about")}>Sobre nosotros</li>
                        <li onClick={()=> handleNavigatePages("/")}>Login</li>
                  </div>
            <div className= "footer_navigation_information" >
                <strong>Informações de contato:</strong>
                <p>Serviços de limpeza e higienização doméstica</p>
                <p>Teléfono: (856) 577-2336</p>
                <a href = "mailto:nataliacrystina27@gmail.com?subject = Feedback&body = Message">e-mail: nataliacrystina27@gmail.com</a>
            </div>
         </div>
    </div>
  );
}

export default OfficeES;