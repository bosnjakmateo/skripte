import React, { Component } from 'react';
import './App.css';
import Login from "./Components/Login";
import Registration from "./Components/Registration";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Registration/>
      </div>
    );
  }
}

export default App;
