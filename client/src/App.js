import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
        <Provider store={ store }>
            <Router>
              <div className="App">
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Registration} />
              </div>
            </Router>
        </Provider>
    );
  }
}

export default App;
