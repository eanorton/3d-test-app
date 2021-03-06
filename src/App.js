import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SpinningCube from './Components/SpinningCube';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">C U B E</h1>
        </header>

        <div className="app-intro">
          <SpinningCube width={800} height={600}/>
        </div>
      </div>
    );
  }
}

export default App;
