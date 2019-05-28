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
                counterDisplayValue: 0
            })
        })
    }

    render(){
        return(
            <main className="Counter-main">
                <h2 className="Counter-display">
                    Licznik: <span className="Counter-display--number">{this.state.counterDisplayValue}</span>
                </h2>
                {/* <CounterDisplay/> */}
                <ButtonPanel changeValue = {this.changeValue} resetInit = {this.resetInit} setZero = {this.setZero}/>
                <CounterStep/>
            </main>
        )
    }
}


export default Counter;

