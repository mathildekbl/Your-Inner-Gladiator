import React from "react";
import './Menu.css';
import Pages from "../../utils/Pages"

export default class Menu extends React.Component{
    go_to=(page)=>{ //Change the value of the current page
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
                <button id="home_button" onClick={()=>this.go_to("home")}>Accueil</button>
                <button id="last_session_button" onClick={()=>this.go_to("last_session")}>Ma dernière séance</button>
                <button id="accomplishment_button" onClick={()=>this.go_to("accomplishment")}>Mes accomplissements</button>
                <button id="progress_button" onClick={()=>this.go_to("progression")}>Mes progrès</button>
                <button id="profile_button" onClick={()=>this.go_to("profile")}>Profil</button>
            </div>
        );
    }
}