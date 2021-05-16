import React from "react";
import './Home.css';
import Members from "../../data/Members";

export default class Home extends React.Component{
    render(){
        return (
            <div className="home">
                <h1>Bienvenue <br/>{Members.getMemberData(this.props.who,"firstName")} !</h1>
                <div className="welcomeText">
                    
                </div>
            </div>
        );
    }
}