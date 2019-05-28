import React, {Component} from "react";
import CounterDisplay from "./counter/Counter-display.js"
import ButtonPanel from "./counter/Button-panel.js"
import CounterStep from "./counter/Counter-step.js"

class Counter extends Component{
    render(){
        return(
            <main className="Counter-main">
                <CounterDisplay/>
                <ButtonPanel/>
                <CounterStep/>

            </main>
        )
    }
}


export default Counter;

