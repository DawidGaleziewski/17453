import React, {Component} from "react";
import CounterDisplay from "./counter/Counter-display.js"
import ButtonPanel from "./counter/Button-panel.js"
import CounterStep from "./counter/Counter-step.js"

class Counter extends Component{
    constructor(props){
        super(props);
        let initValue = 0;
        this.state = {
            counterDisplayValue: Number(this.props.initValue),
            stepValue: 0
        }
    }
    
    changeValue = () => {
        this.setState((prevState) =>{
            return({
                counterDisplayValue: prevState.counterDisplayValue +1
            })
        })
    }

    resetInit = () => {
        this.setState(()=> {
            return ({
                counterDisplayValue: Number(this.props.initValue)
            })
        })
    }

    setZero = () => {
        this.setState(()=> {
            return({
                counterDisplayValue: 0,
            })
        })
    }


    // Here more changes need to be made
    getInputValue = (stepValueNew)=> {
        console.log(stepValueNew)
        console.log(this.state.stepValue)
        // console.log(this.stepValue)
        this.setState((stepValueNew)=> {
            return({
                stepValue: stepValueNew
            })
        })
    }

    render(){
        // console.log(this.state.stepValue)
        return(
          
            <main className="Counter-main">
                <h2 className="Counter-display">
                    Licznik: <span className="Counter-display--number">{this.state.counterDisplayValue}</span>
                </h2>
                {/* <CounterDisplay/> */}
                <ButtonPanel changeValue = {this.changeValue} resetInit = {this.resetInit} setZero = {this.setZero}/>
                <CounterStep stepValue = {this.state.stepValue} getInputValue = {this.getInputValue}/>
            </main>
        )
    }
}


export default Counter;

