import React from 'react';
import './App.css';

export default class App extends React.Component {

  render() {
    return (
      <div className="App">

        <h1>Bienvenue Visiteur !</h1>

        <h4> Voici ton évolution</h4>

        <img src="img\strong.png" alt="muscle" className="evolution"/>

        <div id="comment">BRAVO !</div>

      </div>
    );
  }
}