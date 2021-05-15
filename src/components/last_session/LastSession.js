import React from "react";
import './LastSession.css';
import Members from "../../data/Members";

export default class LastSession extends React.Component{
    render(){
        return (
            <div className="last_session">
                <h1>Ma dernière séance !</h1>
                <h4>{Members.getMemberData(this.props.who,"firstName")} voici vos résultats</h4>
                <div className="show_results">
                    Affiche stats
                </div>
            </div>
        );
    }
}