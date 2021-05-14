import React from "react";
import './Home.css';

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            who:this.props.who
        };
    }
    render(){
        return (
            <div className="main_content">
                <h1>Bienvenue Visiteur !</h1>
                <h4> Voici ton évolution</h4>
                <img src="img\strong.png" alt="muscle" className="evolution"/>
                <div id="general_comment">
                    <div id="title_general_comment">BRAVO !</div>
                    <div id="text_general_comment">Vous avez bien travaillé !</div>
                </div>
            </div>
        );
    }
}