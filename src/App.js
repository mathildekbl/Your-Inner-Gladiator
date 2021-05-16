import React from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import Content from './components/Content';
import Log from './components/log/Log';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      current_page:'home',
      who:'2'
    };
  }
  update_current_page=(page)=>{
    this.setState({
      current_page:page
    });
  }
  update_who=(member)=>{
    this.setState({
      who:member
    });
  }

  render() {
    return (
      <div className="App">
        <div className="main">
          <Content who={this.state.who} current_page={this.state.current_page}/>
          <Menu current_page={this.state.current_page} onChangeCurrentPage={(page)=>this.update_current_page(page)}/>
        </div>
          <Log who={this.state.who} onChangeMember={(member)=>this.update_who(member)}/>
      </div>
    );
  }
}