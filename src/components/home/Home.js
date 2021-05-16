import React from "react";
import './Home.css';
import Members from "../../data/Members";

export default class Home extends React.Component{
    render(){
        return (
            <div className="content">
                <div className="header">
                    <h1>Bienvenue <br/>{Members.getMemberData(this.props.who,"firstName")} !</h1>
                </div>
                <div className="mainContent">
                    <div className="welcome">
                        <h2>Keep In Shape</h2>
                        <div className="welcomeText">
                            Nous faisons tout pour vous maintenir au top ! 
                            Pour cela nous utilisons nos objets intelligents : <br/>
                            <ul>
                                <li>Une balance pour suivre votre poids</li>
                                <li>Nos vélos pour avoir pleins de stats</li>
                            </ul>
                        </div>
                        <img src="../../img/drole.gif" alt="img"/>
                    </div>
                </div>
            </div>
        );
    }
}