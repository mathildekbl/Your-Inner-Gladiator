import React from "react";
import './Menu.css';
import Pages from "../../utils/Pages"

export default class Menu extends React.Component{
    go_to=(page)=>{ //Change la page active
      if (page in Pages.pages){
        this.props.onChangeCurrentPage(page);
      }
      else {
        console.log("The page"+page+"doesn't exist");
      }
    }
    render(){
        return (
            <div className="Menu">
                <button id="home_button" onClick={()=>this.go_to("home")}>{Pages.pages["home"]}</button>
                <button id="last_session_button" onClick={()=>this.go_to("last_session")}>{Pages.pages["last_session"]}</button>
                <button id="progress_button" onClick={()=>this.go_to("evolution")}>{Pages.pages["evolution"]}</button>
                <button id="profile_button" onClick={()=>this.go_to("profile")}>{Pages.pages["profile"]}</button>
            </div>
        );
    }
}