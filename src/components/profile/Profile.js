import React from "react";
import './Profile.css';

import Members from "../../data/Members";

import Dict from "../../utils/Dictionnary";
import Converter from "../../utils/Converter";

export default class Profile extends React.Component{
    generateProfile(memberData){
        /*
        Prevoir si sessions est vide, deux cas :
            -> Le membre n'est pas identifié   -> Mettre un message "On ne vous reconnaît pas ..."
        */
        var x;
        var listElements = [];
        for (x in memberData){
            listElements.push(<li key={x}>
                <span className="label">{Dict.dict[x]}</span>
                <span className="value">{Converter.format(x,memberData[x])}</span>
            </li>);
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