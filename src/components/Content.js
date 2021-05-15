import React from "react";
import Home from "./home/Home";
import LastSession from "./last_session/LastSession"
import Accomplishment from "./accomplishment/Accomplishment"
import Progression from "./progression/Progression"
import Profile from "./profile/Profile"
import Error from "./error/Error"

export default class Conent extends React.Component{
    render(){
        switch(this.props.current_page){
            case 'home':
                return(<Home who={this.props.who} />);
            case 'last_session':
                return(<LastSession who={this.props.who} />);
            case 'accomplishment':
                return(<Accomplishment who={this.props.who} />);
            case 'progression':
                return(<Progression who={this.props.who} />);
            case 'profile':
                return(<Profile who={this.props.who} />);
            default:
                return(<Error/>);
        }
    }
}