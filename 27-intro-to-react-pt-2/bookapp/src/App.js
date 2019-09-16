import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar.js';
import Books from './Books.js';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Books name="John Doe"/>
    </div>
  );
}

export default App;
