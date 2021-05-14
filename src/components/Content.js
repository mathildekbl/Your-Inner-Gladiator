import React from "react";

export default class Conent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            who:this.props.who,
            page:this.props.current_page
        };
    }
}