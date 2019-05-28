import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header.js'
import Counter from './Counter.js'

function App() {
  return (
    <div className="App">
      <Header/>
      <Counter initValue = "18"/>
    </div>
  );
}

export default App;
