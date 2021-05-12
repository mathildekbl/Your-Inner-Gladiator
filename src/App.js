import React from 'react';
import './App.css';

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="content">
          <h1>Bienvenue Visiteur !</h1>
          <h4> Voici ton évolution</h4>
          <img src="img\strong.png" alt="muscle" className="evolution"/>
          <div id="comment">BRAVO !</div>
        </div>
        <div className="menu">
          <ul>
            <li><input type="button" value="Accueil"/></li>
            <li><input type="button" value="Ma dernière séance"/></li>
            <li><input type="button" value="Mes accomplissements"/></li>
            <li><input type="button" value="Mes progrès"/></li>
            <li><input type="button" value="Profil"/></li>
          </ul>
        </div>
      </div>
    );
  }
}