import React from "react";
import './LastSession.css';

import Members from "../../data/Members";
import Running from "../../data/Running";
import Facts from "../../data/Facts";

import Converter from "../../utils/Converter";
import Dict from "../../utils/Dictionnary";

export default class LastSession extends React.Component{
    getLastRunningSession(){
        var session = Running.getLastSession(this.props.who);
        if (Object.keys(session).length===0){
            return (<div className="lastRunningSession">On t'attend avec impatience !</div>)
        }
        var content = [];

        content.push(<h4>Séance du {Converter.format("date",session["date"])}</h4>);

        var listElements = [];
        for (var statKey in session){
            if (["nbSessions","memberId","date"].indexOf(statKey)===-1){
                listElements.push(<li key={statKey}>
                    <span className="label">{Dict.dict[statKey]}</span>
                    <span className="value">{Converter.format(statKey,session[statKey])}</span>
                </li>);
            }
        }
        content.push(<ul className="fancyList">{listElements}</ul>);
        content.push(<div className="fact">{Facts.getDistFact(session["distance"])}</div>);

        return (<div className="lastRunningSession"><h2>Course à pied</h2>{content}</div>);
    }

    render(){
        return (
            <div className="content">
                <div className="header">
                    <h1>Ma dernière séance </h1>
                    <div className="headerText">
                        {Members.getMemberData(this.props.who,"firstName")} voici vos résultats
                    </div>
                </div>
                <div className="mainContent">
                    {this.getLastRunningSession()}
                </div>
            </div>
        );
    }
}