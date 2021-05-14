import React from "react";
import Home from "./home/Home";
import LastSession from "./last_session/LastSession"
import Error from "./error/Error"
import Accomplishment from "./accomplishment/Accomplishment"

export default class Conent extends React.Component{
    render(){
        switch(this.props.current_page){
            case 'home':
                return(<Home who={this.props.who} />);
                break;
            case 'last_session':
                return(<LastSession who={this.props.who} />);
                break;
            case 'accomplishment':
                return(<Accomplishment who={this.props.who} />);
                break;
            default:
                return(<Error/>);
        }
    }
}