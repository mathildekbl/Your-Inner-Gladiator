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
        for (var x1 in sessions){
            stats["totalLength"] += sessions[x1]["distance"];
            stats["totalTime"] += sessions[x1]["duration"];
        }
        var listElements = [];
        for (var x2 in stats){
            listElements.push(<li key={x2}><span className="resultsLabel">{Dict.dict[x2]}</span><span className="resultsValue">{stats[x2]}</span></li>);
        }
        return(<ul>{listElements}</ul>);
    }
    render(){
        return (
            <div className="accomplishment">
                <h1>Vos exploits !</h1>
                <h4>{Members.getMemberData(this.props.who,"firstName")} voici vos incroyables perfs !</h4>
                <div className="show_accomplishment">
                    <div className="resultsBlock">
                        <div className="activityTitle">Vélo</div>
                        {this.getBikeStats(Bike.getMemberSessions(this.props.who))}
                    </div>
                </div>
            </div>
        );
    }
}