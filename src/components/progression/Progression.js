import React from "react";
import './Progression.css';
import Members from "../../data/Members";

export default class Profile extends React.Component{
    render(){
        return (
            <div className="progression">
                <h1>Vos progrès !</h1>
                <div className="show_progression">
                    Progression de {Members.getMemberData(this.props.who,"firstName")}
                </div>
            </div>
        );
    }
}