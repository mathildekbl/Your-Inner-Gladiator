import React from "react";
import Home from "./home/Home";
import LastSession from "./last_session/LastSession"
import Evolution from "./evolution/Evolution"
import Profile from "./profile/Profile"
import Error from "./error/Error"

import './Content.css';

export default class Content extends React.Component{
    render(){
        switch(this.props.current_page){
            case 'home':
                return(<Home who={this.props.who} />);
            case 'last_session':
                return(<LastSession who={this.props.who} />);
            case 'evolution':
                return(<Evolution who={this.props.who} />);
            case 'profile':
                return(<Profile who={this.props.who} />);
            default:
                return(<Error/>);
        }
    }
}