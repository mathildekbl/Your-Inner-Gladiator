import React from "react";
import './Home.css';
import Members from "../../data/Members";

export default class Home extends React.Component{
    render(){
        return (
            <div className="home">
                <h1>Bienvenue {Members.getMemberData(this.props.who,"firstName")} !</h1>
                <h4> Voici ton évolution</h4>
                <img src="img\strong.png" alt="muscle" className="evolution"/>
                <div className="general_comment">
                    <div className="title_general_comment">BRAVO !</div>
                    <div className="text_general_comment">Vous avez bien travaillé !</div>
                </div>
            </div>
        );
    }
}