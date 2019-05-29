import React, {Component} from "react";
import CounterDisplay from "./counter/Counter-display.js"
import ButtonPanel from "./counter/Button-panel.js"
import CounterStep from "./counter/Counter-step.js"

class Counter extends Component{
    constructor(props){
        super(props);
        let initValue = 1;
        this.state = {
            counterDisplayValue: Number(this.props.initValue),
            stepValue: 1
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

    getInputValue = (stepValueNew)=> {
        this.setState((prevState)=> {
            return({
                stepValue: Number(stepValueNew),

            })
        })
    }

    addSteps = (stepValueNew)=> {
        this.setState((prevState)=> {
            console.log(this.stepValue)
            return({
                counterDisplayValue: Number(prevState.counterDisplayValue) + Number(this.state.stepValue)

            })
        })
    }

    render(){
        return(
          
            <main className="Counter-main">
                <h2 className="Counter-display">
                    Licznik: <span className="Counter-display--number">{this.state.counterDisplayValue}</span>
                </h2>
                <ButtonPanel changeValue = {this.changeValue} resetInit = {this.resetInit} setZero = {this.setZero}/>
                <CounterStep stepValue = {this.state.stepValue} getInputValue = {this.getInputValue} addSteps = {this.addSteps}/>
            </main>
        )
    }
}


export default Counter;

