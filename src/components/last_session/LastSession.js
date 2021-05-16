import React from "react";
import './LastSession.css';
import Members from "../../data/Members";

export default class LastSession extends React.Component{
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
                    <div className="statsLastSession">
                        Affiche stats
                    </div>
                </div>
            </div>
        );
    }
}