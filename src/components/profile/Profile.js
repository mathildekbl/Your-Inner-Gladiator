import React from "react";
import './Profile.css';
import Members from "../../data/Members";
import Dict from "../../data/Dictionnary";

export default class Profile extends React.Component{
    generateProfile(memberData){
        var x;
        var listElements = [];
        for (x in memberData){
            listElements.push(<li><span className="profileLabel">{Dict.dict[x]}</span><span className="profileValue">{memberData[x]}</span></li>);
        }
        return(<ul>{listElements}</ul>);
        
    }

    render(){
        
        return (
            <div className="profile">
                <h1>Votre Profil !</h1>
                {this.generateProfile(Members.getMember(this.props.who))}
            </div>
        );
    }
}