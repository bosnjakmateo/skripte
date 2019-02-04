import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import Home from "./Components/Home";
import Skripta from "./Components/Skripta";
import InstitutionLocation from "./Components/InstitutionLocation";
import Fields from "./Components/Fields";
import InstitutionFields from "./Components/InstitutionFields";
import KolegijContent from "./Components/KolegijContent";
import { Provider } from 'react-redux';
import store from './store';
import AllKolegiji from"./Components/AllKolegiji";
import LandingPage from"./Components/LandingPage";
import setAuthToken from './Utils/setAuthToken';
import { setCurrentUser, logoutUser } from './Actions/authActions';
import jwt_decode from 'jwt-decode';


// Check for token
if (localStorage.jwtToken) {
    // Set auth token header auth
    setAuthToken(localStorage.jwtToken);
    // Decode token and get user info and exp
    const decoded = jwt_decode(localStorage.jwtToken);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));

    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());
        // TODO: Clear current Profile

        // Redirect to login
        window.location.href = '/login';
    }
}


class App extends Component {
  render() {
    return (
        <Provider store={ store }>
                <Router>
                  <div className="App">
                      <Route exact path="/login" component={Login} />
                      <Route exact path="/register" component={Registration} />
                      <Route exact path="/" component={LandingPage}/>
                      <Route exact path="/home" component={Home}/>
                      <Route exact path="/institucije" component={AllKolegiji}/>
                      <Route path="/institucije/:institucija_id" component={InstitutionFields}/>
                      <Route path="/kolegij/:kolegij_id" component={KolegijContent}/>
                      <Route path="/skripta/:skripta_id" component={Skripta}/>
                      <Route exact path="/landing" component={LandingPage}/>
                      <Route exact path="/svikolegiji/lokacija" component={InstitutionLocation}/>
                      <Route path="/smjer/:smjer_id" component={Fields}/>
                  </div>
                </Router>
        </Provider>
    );
  }
}

export default App;