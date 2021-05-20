import React from "react";
import './Home.css';
import Members from "../../data/Members";

import helmetImg from "../../img/GladiatorHelmet.png";

export default class Home extends React.Component{
    render(){
        return (
            <div className="content">
                <div className="header">
                    <h1>Your inner gladiator</h1>
                </div>
                <div className="mainContent">
                    <div className="welcome">
                        <h2> Ave {Members.getMemberData(this.props.who,"firstName")}! </h2>
                        <div className="welcomeText">
                            Parce que ton plus grand ennemi c'est ta détermination,
                            nous allons t'aider à obtenir ton physique optimal!
                            Pour cela notre écurie dispose d'outils de pointes: <br/>
                            <ul>
                                <li>Une balance pour suivre ton poids</li>
                                <li>Des tapis de course pour enregistrer tes épopées</li>
                                <li>Et bien d'autres à venir ...</li>
                            </ul>
                            <img src={helmetImg} alt="logo"/><br/>
                            Ceux qui vont suer vous saluent !
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}