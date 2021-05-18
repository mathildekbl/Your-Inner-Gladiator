import React from "react";
import './Accomplishment.css';

import Members from "../../data/Members";
import Bike from "../../data/Bike";
import Facts from "../../data/Facts";

import Dict from "../../utils/Dictionnary";
import Converter from "../../utils/Converter";

export default class Accomplishment extends React.Component{
    getBikeInfo(){
        var stats = Bike.getTotalStats(this.props.who);
        
        var content = [];
        content.push(<div className="numberOfSessions">Nombre de séance {stats["nbSessions"]}</div>);

        var listElements = [];
        listElements.push(<li key="totalLength"><span className="label">{Dict.dict["totalLength"]}</span><span className="value">{Converter.distanceFormat(stats["totalLength"])}</span></li>);
        listElements.push(<li key="totalTime"><span className="label">{Dict.dict["totalTime"]}</span><span className="value">{Converter.timeFormat(stats["totalTime"])}</span></li>);
        listElements.push(<li key="totalKcal"><span className="label">{Dict.dict["totalKcal"]}</span><span className="value">{Converter.kcalFormat(stats["totalKcal"])}</span></li>);
        listElements.push(<li key="averageBPM"><span className="label">{Dict.dict["averageBPM"]}</span><span className="value">{Converter.BPMformat(stats["averageBPM"])}</span></li>);
        
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