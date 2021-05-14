import React from "react";
import './Accomplishment.css';

export default class Accomplishment extends React.Component{
    render(){
        return (
            <div className="accomplishment">
                <h1>Vos exploits !</h1>
                <h4>{this.props.who} voici vos incroyables perfs !</h4>
                <div className="show_accomplishment">
                    Affiche Records
                </div>
            </div>
        );
    }
}