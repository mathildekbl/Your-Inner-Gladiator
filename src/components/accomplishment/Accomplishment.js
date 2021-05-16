import React from "react";
import './Accomplishment.css';

import Members from "../../data/Members";
import Bike from "../../data/Bike";

import Dict from "../../utils/Dictionnary";
import Converter from "../../utils/Converter";

export default class Accomplishment extends React.Component{
    getBikeStats(sessions){
        /*
        Prevoir si sessions est vide, deux cas :
            -> Le membre n'est pas identifié   -> Mettre un message "On ne vous reconnaît pas ..."
            -> Le membre n'a pas fait de session vélo -> "Encourager à commencer les séances vélo"
        */
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
        listElements.push(<li key="totalLength"><span className="label">{Dict.dict["totalLength"]}</span><span className="value">{Converter.distanceFormat(stats["totalLength"])}</span></li>);
        listElements.push(<li key="totalTime"><span className="label">{Dict.dict["totalTime"]}</span><span className="value">{Converter.timeFormat(stats["totalTime"])}</span></li>);

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