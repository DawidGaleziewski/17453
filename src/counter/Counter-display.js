import React, {Component} from "react"

class CounterDisplay extends Component {
    render(){
        return(
            <h2 className="Counter-display">
                Licznik: <span className="Counter-display--number">15</span>
            </h2>
        )
    }
}

export default CounterDisplay;


