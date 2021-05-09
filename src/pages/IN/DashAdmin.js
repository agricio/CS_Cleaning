import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import '../../assets/css/DashAdmin.css';

import logo from '../../assets/images/logo_half.png';
import Deletelogo from '../../assets/images/delete.png';


function DashAdminIN() {
    const history = useHistory();
    const [ users, setUsers ] = useState([]);
    const [ estimates, setEstimates ] = useState([]);
    const [ user, setUser ] = useState(null);
    const [ dataEstimate, setDataEstimate ] = useState(null);
    const [ dataIdEstimate, setDataIdEstimate ] = useState(null);
    const [ estimate, setEstimate ] = useState(null);
    const [ menssage, setMessage ] = useState([]);

function handleNavigatePages(opc) {
    history.push(opc);
};

useEffect(() => {
    async function loadUsers() {
        const res = await api.get('/sessions');
        setUsers(res.data);
    }
    loadUsers();
}, []);

useEffect(() => {
    async function loadEstimates() {
        const res = await api.get('/estimate');
        setEstimates(res.data);
    }
    loadEstimates();
}, []);

async function handleUserAlertDelete(user){
    //e.preventDefault();
    setMessage('Deseja Mesmo deletar o Usuario');
    setUser(user);
    
}

async function handleUserDelete(id){
    //e.preventDefault();
    try {
        await api.delete(`/sessions/${id}`);
        setUser(null);
        alert('Usuário Removido!');
      } catch (error) {
        alert('Erro: Usuário não encontrado!\nTente mais tarde!');
        setUser(null);
      } finally {
        setUser(null);
    }
}

function handleEstimateView(estimate){
    //e.preventDefault();
        setEstimate(estimate);
}

function handleEstimateAlertDelete(id, name){
    //e.preventDefault();
    setMessage('Deseja deletar o Orçamento');  
    setDataIdEstimate(id);
    setDataEstimate(name);
}

function handleLogout() {
    localStorage.clear();
    history.push('/in/login');
}

async function handleEstimateDelete(id){
    //e.preventDefault();
    try {
        await api.delete(`/estimate/${id}`);
        setDataIdEstimate(null);
        alert('Estimate removed!');
      } catch (error) {
        setDataIdEstimate(null);
        alert('Failed to fetch students!\nTry again later!');
      } finally {
        setDataIdEstimate(null);
      }
}

return (
    <div className= "container">
        <div className= "header">
            <ul>
                <li><img src={logo} alt="AirCnC"/></li>
                <li onClick={()=> handleNavigatePages("/")}>Home</li>
                <li onClick={()=> handleLogout()}>logout</li>
            </ul>
        </div>
        <div className="blueLine"/>
        
        <div className= "division_0" >
            
            <div className= "session12X" ></div>
            <div className= "session13X" ></div>
            <div className= "User_data" >
            <h2>{`Welcome Admin: ${localStorage.getItem('userName')}`}</h2>
            </div>
        
            <div className="infogrid">

                <div className= "box_4_">
                    <h3>Lista de Usuarios</h3>
                    <div className= "teste0">
                        <table> 
                            <tr>
                                <th>Nome</th>
                                <th>e-mail</th>
                                <th></th>
                            </tr>
                        </table>
                    </div>
                <div  className= "teste">
                        <table cellspacing="0" cellpadding="1" border="1">
                                { users.map(user => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><img onClick={() => handleUserAlertDelete(user)} src={Deletelogo} alt="asd" /></td>
                            </tr> ))}
                        </table>
                 </div>
            </div>
                
                <div className= "box_4_">
                    <h3>Lista de Orçamentos</h3>
                    <div className= "teste0">
                        <table cellspacing="0" cellpadding="1" border="1"> 
                            <tr>
                                <th>Nome</th>
                                <th>e-mail</th>
                                <th>Telefone</th>
                                <th></th>
                            </tr>
                        </table>
                    </div>
                    <div  className= "teste">
                        <table cellspacing="0" cellpadding="1" border="1">
                                { estimates.map(estimate => (
                            <tr key={estimate._id}>
                                <td onClick={() => handleEstimateView(estimate)} >{estimate.firstName+` ${estimate.lastName}`}</td>
                                <td onClick={() => handleEstimateView(estimate)}>{estimate.email}</td>
                                <td onClick={() => handleEstimateView(estimate)}>{estimate.phoneNumber}</td>
                                <td><img onClick={() => handleEstimateAlertDelete(estimate._id, estimate.firstName)} src={Deletelogo} alt="asd" /></td>
                            </tr> ))}
                        </table>
                    </div>
                </div>
            </div>

        </div>

    { user &&  
        <div className="alert-container">
            <div className="alert-topBox">
                <strong>Alerta!</strong>
            </div>
            <div className="alert-box">
                <p>{`${menssage}: `}</p>
                <p>{user.name}</p>
            </div>
            <div className="alert-bottonBox2">
                <button type="button" onClick={ () => { setUser(null)} } >Fechar</button>
                <button type="button" onClick={ () => { handleUserDelete(user._id)} } >Deletar</button> 
            </div>
        </div>
    }

    { dataEstimate &&  
        <div className="alert-container">
            <div className="alert-topBox">
                <strong>Alerta!</strong>
            </div>
            <div className="alert-box">
                <p>{menssage}</p>
                <div><p className="alert-bold">Id</p><p>{`: ${dataIdEstimate}`}</p></div>
                <div><p className="alert-bold">Nome</p><p>{`: ${dataEstimate}`}</p></div>
            </div>
            <div className="alert-bottonBox2">
                <button type="button" onClick={ () => {setDataIdEstimate(null); setDataEstimate(null)} } >Fechar</button>
                <button type="button" onClick={ () => {handleEstimateDelete(dataIdEstimate)} } >Deletar</button> 
            </div>
        </div>
    }

    { estimate &&  
        <div className="alert-container">
            <div className="estimate-box">
                <div className="alert-topBox">
                    <strong>Orçamento</strong>
                </div>
                <div className="alert-table">
                    <ul>
                        <div><p className="alert-bold">Id</p><p>{`: ${estimate._id}`}</p></div>
                        <div><p className="alert-bold">Nome</p><p>{`: ${estimate.firstName}`}</p></div>
                        <div><p className="alert-bold">Sobrenome</p><p>{`: ${estimate.lastName}`}</p></div>
                        <div><p className="alert-bold">Telefone</p><p>{`: ${estimate.phoneNumber}`}</p></div>
                        <div><p className="alert-bold">e-mail</p><p>{`: ${estimate.email}`}</p></div>
                        <div><p className="alert-bold">Endereço</p><p>{`: ${estimate.address}`}</p></div>
                        <div><p className="alert-bold">Data</p><p>{`: ${estimate.date}`}</p></div>
                        <div><p className="alert-bold">Cep(zipcode)</p><p>{`: ${estimate.zipCode}`}</p></div>
                        <div><p className="alert-bold">Tipo de serviço</p><p>{`: ${estimate.typeService}`}</p></div>
                        <div><p className="alert-bold">Quartos</p><p>{`: ${estimate.bedrooms}`}</p></div>
                        <div><p className="alert-bold">Banheiros</p><p>{`: ${estimate.bathrooms}`}</p></div>
                        <div><p className="alert-bold">Descrição</p><p>{`: ${estimate.description}`}</p></div>
                    </ul>
                </div>
                <div className="alert-bottonBox">
                    <button type="button" onClick={ () => {setEstimate(null)} }>Fechar</button>
                </div>
            </div> 
        </div>
    }

        <div className= "footer" >
                <img src={logo} alt="asd" />
                <div className= "footer_navigation" >
                    <strong>Navigation</strong>
                    <li onClick={()=> handleNavigatePages("/")}>Home</li>
                    <li onClick={()=> handleNavigatePages("/in/login")}>Login</li>
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

export default DashAdminIN;