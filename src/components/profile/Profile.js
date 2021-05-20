import React from "react";
import './Profile.css';

import Members from "../../data/Members";

import Dict from "../../utils/Dictionnary";
import Converter from "../../utils/Converter";

export default class Profile extends React.Component{
    generateProfile(){
        // Récup des données
        var memberData = Members.getMember(this.props.who)
        // Si pas de données
        if (Object.keys(memberData).length===0){
            return (<div className="unknownMember">Etes-vous un vrai gladiateur ?</div>)
        }
        //Va contenir le HTML de la liste
        let listElements = [];
        for (let x in memberData){
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
                    <h1>Profil</h1>
                </div>
                <div className="mainContent">
                    <div className="profile">
                        <h2>FICHE SPORTIVE</h2>
                        {this.generateProfile()}
                    </div>
                </div>
            </div>
        );
    }
}