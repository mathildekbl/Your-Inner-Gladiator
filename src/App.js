import React from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import Home from './components/home/Home';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      current_page:'home',
      who:''
    };
  }
  update_current_page=(page)=>{
    this.setState({
      current_page:page
    })
  }

  render() {
    return (
      <div className="App">
        <Home who={this.state.who}/>
        <Menu current_page={this.state.current_page} onChangeCurrentPage={(page)=>this.update_current_page(page)}/>
      </div>
    );
  }
}