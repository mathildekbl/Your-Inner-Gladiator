import React from "react";
import './Evolution.css';

import Running from "../../data/Running";
import Facts from "../../data/Facts";
import Members from "../../data/Members";

import Dict from "../../utils/Dictionnary";
import Converter from "../../utils/Converter";

import fitImg from '../../img/Fit.png';
import fatImg from '../../img/Fat.png';
import strongImg from '../../img/Strong.png';

export default class Evolution extends React.Component{
    getRunningInfo(){
        var stats = Running.getTotalStats(this.props.who);
        var content = [];
        content.push(<div className="numberOfSessions">Nombre de séance {stats["nbSessions"]}</div>);
        var listElements = [];
        for (var statKey in stats){
            if (statKey!=="nbSessions"){
                listElements.push(<li key={statKey}>
                    <span className="label">{Dict.dict[statKey]}</span>
                    <span className="value">{Converter.format(statKey,stats[statKey])}</span>
                </li>);
            }
        }
        content.push(<ul className="fancyList">{listElements}</ul>);
        content.push(<div className="fact">{Facts.getDistFact(stats["totalLength"])}</div>);
        return (<div className="resultsBlock"><h2>Course à Pied</h2>{content}</div>);
    }
    getVisualResult(){
        var member = Members.getMember(this.props.who);
        var imc = member["currentWeight"]/(member["height"]/100)**2;
        var text;
        var image;
        if (imc<20){
            text="Il va falloir prendre un peu de masse pour en imposer ! Charger plus lourd la prochaine fois";
            image=fitImg;
        }
        else if (imc<25){
            text="Vous êtes au top mais on ne se repose sur ses lauriers. On continue l'entraînement !";
            image=strongImg;
        }
        else {
            text="Des abdos sont présents sous ce ventre, il faut perdre le poids en trop. On axe sur le cardio";
            image=fatImg;
        }
        return(<div className="visualResult"><h2>Etat de Forme</h2><h4>{text}</h4><img src={image} alt="Gladiator Pic"/><p>IMC : {imc.toFixed(2)}</p></div>);
    }
    render(){
        return (
            <div className="content">
                <div className="header">
                    <h1>Résultats de vos héroïques séances !</h1>
                    <div className="headerText">
                        Les chiffres ne mentent pas !
                    </div>
                </div>
                <div className="mainContent">
                    {this.getVisualResult()}
                    {this.getRunningInfo()}
                </div>
            </div>
        );
    }
}