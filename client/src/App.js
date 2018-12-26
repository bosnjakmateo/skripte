import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import Home from "./Components/Home";
import KolegijContent from "./Components/KolegijContent";
import { Provider } from 'react-redux';
import store from './store';
import AllKolegiji from"./Components/AllKolegiji";

class App extends Component {
  render() {
    return (
        <Provider store={ store }>
            <Router>
              <div className="App">
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Registration} />
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/svikolegiji" component={AllKolegiji}/>
                  <Route exact path="/kolegij" component={KolegijContent}/>
              </div>
            </Router>
        </Provider>
    );
  }
}

export default App;
