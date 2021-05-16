import React from "react";
import './Accomplishment.css';

import Members from "../../data/Members";
import Bike from "../../data/Bike";

import Dict from "../../utils/Dictionnary";

export default class Accomplishment extends React.Component{
    getBikeStats(sessions){
        var stats={
            "totalLength":0,
            "totalTime":0
        }
        /* Calcul des totaux*/
        for (var x1 in sessions){
            stats["totalLength"] += sessions[x1]["distance"];
            stats["totalTime"] += sessions[x1]["duration"];
        }
        
        /*Generer code HTML */
        var listElements = [];
        for (var x2 in stats){
            listElements.push(<li key={x2}><span className="label">{Dict.dict[x2]}</span><span className="value">{stats[x2]}</span></li>);
        }
        return(<ul className="fancyList">{listElements}</ul>);
    }
    render(){
        return (
            <div className="content">
                <div className="header">
                    <h1>Vos exploits !</h1>
                    <div className="headerText">
                        {Members.getMemberData(this.props.who,"firstName")} voici vos incroyables perfs !
                    </div>
                </div>
                <div className="mainContent">
                    <div className="resultsBlock">
                        <h2>Vélo</h2>
                        <div className="numberOfSessions">
                            Nombre de séance {Bike.getNumberOfSessions(this.props.who)}
                        </div>
                        {this.getBikeStats(Bike.getMemberSessions(this.props.who))}
                    </div>
                </div>
            </div>
        );
    }
}