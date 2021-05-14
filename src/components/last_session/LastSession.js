import React from "react";
import './LastSession.css';

export default class LastSession extends React.Component{
    render(){
        return (
            <div className="last_session">
                <h1>Ma dernière séance !</h1>
                <h4>{this.props.who} voici vos résultats</h4>
                <div className="show_results">
                    Affiche stats
                </div>
            </div>
        );
    }
}