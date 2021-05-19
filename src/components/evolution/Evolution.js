import React from "react";
import './Evolution.css';

import Running from "../../data/Running";
import Facts from "../../data/Facts";
import Members from "../../data/Members";
import Weight from "../../data/Weight";

import Dict from "../../utils/Dictionnary";
import Converter from "../../utils/Converter";

import fitImg from '../../img/Fit.png';
import fatImg from '../../img/Fat.png';
import strongImg from '../../img/Strong.png';

export default class Evolution extends React.Component{
    getRunningInfo(){
        let stats = Running.getTotalStats(this.props.who);
        let content = [];
        content.push(<div className="numberOfSessions">Nombre de séances : {stats["nbSessions"]}</div>);
        let listElements = [];
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
        let member = Members.getMember(this.props.who);
        let weight = Weight.getCurrentWeight(this.props.who);
        if (weight===-1){return(<div className="visualResult"><h2>Etat de Forme</h2><h4>Il va falloir affronter la balance ...</h4></div>);}
        let imc = weight/(member["height"]/100)**2;
        let text;
        let image;
        if (imc<20){
            text="Il va falloir prendre un peu de masse pour en imposer ! Charger plus lourd la prochaine fois";
            image=fitImg;
        }
        else if (imc<25){
            text="Vous êtes au top mais on ne se repose pas sur ses lauriers. On continue l'entraînement !";
            image=strongImg;
        }
        else {
            text="Des abdos sont présents sous ce ventre, il faut perdre le poids en trop. On axe sur le cardio";
            image=fatImg;
        }
        return(<div className="visualResult"><h2>Etat de Forme</h2><h4>{text}</h4><img src={image} alt="Gladiator Pic"/><h2>IMC : {imc.toFixed(2)}</h2></div>);
    }
    getDetailsPoids(){
        let weightHistory = Weight.getWeightHistory(this.props.who);
        let content = [];
        let listElements = [];
        if (weightHistory.length===0){
            return (<div className="resultsBlock"><h2>Suivi du poids</h2>
                <h4>... Pour affronter la vérité</h4>
            </div>);
        }
        for (var i=0; i<weightHistory.length;i++){
                listElements.push(<li key={"w"+i}>
                    <span className="label">{Converter.format("date",weightHistory[i]["date"])}</span>
                    <span className="value">{Converter.format("weight",weightHistory[i]["weight"])}</span>
                </li>);
        }
        content.push(<ul className="fancyList">{listElements}</ul>);
        content.push(<h4>{this.weightToGoal(weightHistory[0]["weight"])}</h4>);
        return (<div className="resultsBlock"><h2>Suivi du poids</h2>{content}</div>);
        

    }
    weightToGoal(weight){
        let gap = weight -  Members.getMember(this.props.who)["targetWeight"];
        if (gap<0){return "Il te reste "+-gap+" kg à prendre. Il va falloir soulever !";}
        if (gap===0){return "C'est beau un gladiateur qui réussi ses objectifs";}
        return"Il faut perdre ses "+Converter.format("weight",gap)+" en trop. HOP HOP au boulot !";
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
                    {this.getDetailsPoids()}
                    {this.getRunningInfo()}
                </div>
            </div>
        );
    }
}