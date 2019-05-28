import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Aplikacja Licznika w ReactJS</h1>
      </header>
      <main className="Counter-main">

          <h2 className="Counter-display">
            Licznik: <span className="Counter-display--number">15</span>
          </h2>
          <div className="Button-panel"> 
              <button className="btn">Add 1</button>
              <button className="btn">ReInit</button>
              <button className="btn">Reset</button>
          </div>
          <div className="Counter-step">
            <span className="Step-label">Krok:</span>
            <input className="Step-input" type="number"/>
          </div>

          
      </main>
    </div>
  );
}

export default App;
