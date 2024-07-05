import React from "react";
<<<<<<< HEAD
class Toggle extends React.Component {
    constructor(props){
        super(props);

        this.state = {isToggle: true};

        this.handleClick = this.handleClick.bind(this);
    }

        handleClick(){
            this.setState(prevState => ({
                isToggleOn: !prevState.isToggleOn
            }));
    }
    render() {
        return(
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? '켜짐': '꺼짐'}
=======

class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn:true};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    render(){
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? '켜짐' : '꺼짐'}
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
            </button>
        );
    }

}
export default Toggle;