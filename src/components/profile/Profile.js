import React from "react";
import './Profile.css';
import Members from "../../data/Members";
import Dict from "../../utils/Dictionnary";

export default class Profile extends React.Component{
    generateProfile(memberData){
        var x;
        var listElements = [];
        for (x in memberData){
            listElements.push(<li key={x}><span className="label">{Dict.dict[x]}</span><span className="value">{memberData[x]}</span></li>);
        }
        return(<ul className="fancyList">{listElements}</ul>);
        
    }
    render(){ 
        return (
            <div className="content">
                <div className="header">
                    <h1>Votre Profil !</h1>
                </div>
                <div className="mainContent">
                    <div className="profile">
                        <h2>Profil</h2>
                        {this.generateProfile(Members.getMember(this.props.who))}
                    </div>
                </div>
            </div>
        );
    }
}