import React from 'react';
import './App.css';

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="main_content">
          <h1>Bienvenue Visiteur !</h1>
          <h4> Voici ton évolution</h4>
          <img src="img\strong.png" alt="muscle" className="evolution"/>
          <div id="general_comment">
            <div id="title_general_comment">BRAVO !</div>
            <div id="text_general_comment">Vous avez bien travaillé !</div>
          </div>
        </div>
        <div className="menu">
          <input type="button" value="Accueil" id="home_button"/>
          <input type="button" value="Ma dernière séance" id="last_session_button"/>
          <input type="button" value="Mes accomplissements" id="accomplishment_button"/>
          <input type="button" value="Mes progrès" id="progress_button"/>
          <input type="button" value="Profil" id="profile_button"/>
        </div>
      </div>
    );
  }
}