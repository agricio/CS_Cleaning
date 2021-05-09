import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { isAuthenticated } from './middlewares/Auth';

import HomeIN from './pages/IN/HomeIN';
import OfficeIN from './pages/IN/OfficeIN';
import ConstructIN from './pages/IN/ConstructIN';
import ApartIN from './pages/IN/ApartIN';
import HouseIN from './pages/IN/HouseIN';
import AboutIN from './pages/IN/AboutIN';
import EstimateIN from './pages/IN/EstimateIN';
import LoginIN from './pages/IN/LoginIN';
import SignUpIN from './pages/IN/SignUpIN';
import UserDashIN from './pages/IN/UserDashIN';
import DashAdmin from './pages/IN/DashAdmin';

import HomeBR from './pages/BR/HomeBR';
import OfficeBR from './pages/BR/OfficeBR';
import ConstructBR from './pages/BR/ConstructBR';
import HouseBR from './pages/BR/HouseBR';
import ApartBR from './pages/BR/ApartBR';
import AboutBR from './pages/BR/AboutBR';
import EstimateBR from './pages/BR/EstimateBR';
import LoginBR from './pages/BR/LoginBR';
import SignUpBR from './pages/BR/SignUpBR';

import HomeES from './pages/ES/HomeES';
import OfficeES from './pages/ES/OfficeES';
import ConstructES from './pages/ES/ConstructES';
import HouseES from './pages/ES/HouseES';
import ApartES from './pages/ES/ApartES';
import AboutES from './pages/ES/AboutES';
import EstimateES from './pages/ES/EstimateES';
import LoginES from './pages/ES/LoginES';
import SignUpES from './pages/ES/SignUpES';


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
);

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomeIN}/>
                <Route path="/in/office" exact component={OfficeIN}/>
                <Route path="/in/construct" exact component={ConstructIN}/>
                <Route path="/in/apart" exact component={ApartIN}/>
                <Route path="/in/house" exact component={HouseIN}/>
                <Route path="/in/about" exact component={AboutIN}/>
                <Route path="/in/estimate" exact component={EstimateIN}/>
                <Route path="/in/login" exact component={LoginIN}/>
                <Route path="/in/signup" exact component={SignUpIN}/>
                <PrivateRoute path="/in/userdash" exact component={UserDashIN}/>
                <PrivateRoute path="/dashboard" exact component={DashAdmin}/>

                <Route path="/br/home" exact component={HomeBR}/>
                <Route path="/br/office" exact component={OfficeBR}/>
                <Route path="/br/construct" exact component={ConstructBR}/>
                <Route path="/br/house" exact component={HouseBR}/>
                <Route path="/br/apart" exact component={ApartBR}/>
                <Route path="/br/about" exact component={AboutBR}/>
                <Route path="/br/estimate" exact component={EstimateBR}/>
                <Route path="/br/signup" exact component={SignUpBR}/>
                <Route path="/br/login" exact component={LoginBR}/>

                <Route path="/es/home" exact component={HomeES}/>
                <Route path="/es/office" exact component={OfficeES}/>
                <Route path="/es/construct" exact component={ConstructES}/>
                <Route path="/es/house" exact component={HouseES}/>
                <Route path="/es/apart" exact component={ApartES}/>
                <Route path="/es/about" exact component={AboutES}/>
                <Route path="/es/estimate" exact component={EstimateES}/>
                <Route path="/es/signup" exact component={SignUpES}/>
                <Route path="/es/login" exact component={LoginES}/>
            </Switch>
        </BrowserRouter>
    );
}