import React from "react";
import './Home.css';
import Members from "../../data/Members";

export default class Home extends React.Component{
    render(){
        return (
            <div className="content">
                <div className="header">
                    <h1>Bienvenue <br/>{Members.getMemberData(this.props.who,"firstName")} !</h1>
                </div>
                <div className="mainContent">
                    <div className="welcome">
                        <h2>Bienvenue dans l'arène</h2>
                        <div className="welcomeText">
                            Parce que ton plus grand ennemi c'est ta détermination !
                            Nous allons t'aider à obtenir ton physique optimal
                            Pour cela notre écurie dispose d'outils de pointes <br/>
                            <ul>
                                <li>Une balance pour suivre ton poids</li>
                                <li>Des vélos pour enregistrer tes épopés</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}