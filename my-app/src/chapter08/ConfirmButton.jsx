<<<<<<< HEAD
import React, {useState} from "react";
=======
import React from "react";
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4

class ConfirmButton extends React.Component{
    constructor(props){
        super(props);
<<<<<<< HEAD

        this.state={
            isConfirmed : false,
        };
        // this.handleConfirm=this.handleConfirm.bind(this);
        this.handleConfirm = () => {
            this.setState((prevState) => ({
                isConfirmed : !prevState.isConfirmed,
            }))
        }
    }

    handleConfirm(){
        this.setState((prevState) => ({
            isConfirmed : !prevState.isConfirmed,
        }));
    }

    render(){
        return(
            <button
                onClick={this.handleConfirm}
                disabled={this.state.isConfirmed}>
                {this.state.isConfirmed? "확인됨" : "확인하기"}
=======
        
        this.state={
            isConFirmed : false,
        };
        this.handleConfirm=this.handleConfirm.bind(this);

    }
    handleConfirm(){
        this.setState((prevState)=>({
            isConFirmed : !prevState.isConFirmed,
        }));
    }
    render(){
        return(
            <button onClick={this.handleConfirm} disabled={this.state.isConFirmed}>
                {this.state.isConFirmed? "확인됨" : "확인하기"}
>>>>>>> 6628a8a4fc4f49e495e27f9e1eb29df574b210a4
            </button>
        );
    }
}
export default ConfirmButton;