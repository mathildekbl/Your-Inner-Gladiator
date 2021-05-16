import React from 'react';
import './Log.css';
import Members from '../../data/Members';

export default class Log extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          value:this.props.who
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    getMemberListOption(){
        var x;
        var listElements = [];
        for (x in Members.member){
            if (x===this.props.who){
                listElements.push(<option key={"member"+x} value={x} selected>{Members.getMemberData(x,"firstName")+"  "+Members.getMemberData(x,"lastName")}</option>);
            }
            else {
                listElements.push(<option key={"member"+x} value={x}>{Members.getMemberData(x,"firstName")+"  "+Members.getMemberData(x,"lastName")}</option>);
            }   
        }
        return(<select value={this.state.value} onChange={this.handleChange} name="members">{listElements}</select>);
    }
    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.onChangeMember(this.state.value);
    }
    render(){
        return (
            <div className="footer">
                <form onSubmit={this.handleSubmit}>
                    <label>Choisissez votre profil</label>
                    {this.getMemberListOption()}
                    <input type="submit" value="Log in"/>
                </form>
            </div>
        );
    }
}