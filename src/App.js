import React from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import Content from './components/Content';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      current_page:'home',
      who:1
    };
  }
  update_current_page=(page)=>{
    this.setState({
      current_page:page
    });
  }

  render() {
    return (
      <div className="App">
        <Content who={this.state.who} current_page={this.state.current_page}/>
        <Menu current_page={this.state.current_page} onChangeCurrentPage={(page)=>this.update_current_page(page)}/>
      </div>
    );
  }
}