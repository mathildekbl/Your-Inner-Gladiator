import React from "react";
import './Progression.css';

export default class Profile extends React.Component{
    render(){
        return (
            <div className="content">
                <div className="header">
                    <h1>Vos progrès !</h1>
                    <div className="headerText">
                        S'entrainer c'est bien, mais progresser c'est encore mieux
                    </div>
                </div>
                <div className="mainContent">
                    <h2>Evolution des résultats</h2>
                </div>
            </div>
        );
    }
}