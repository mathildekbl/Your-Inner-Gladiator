import React from "react";
import './Evolution.css';

import Members from "../../data/Members";
import Bike from "../../data/Bike";
import Facts from "../../data/Facts";

import Dict from "../../utils/Dictionnary";
import Converter from "../../utils/Converter";

export default class Evolution extends React.Component{
    getBikeInfo(){
        var stats = Bike.getTotalStats(this.props.who);
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
        return (<div className="resultsBlock"><h2>Vélo</h2>{content}</div>);
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
                    {this.getBikeInfo()}
                </div>
            </div>
        );
    }
}