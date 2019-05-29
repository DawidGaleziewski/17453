import React, {Component} from 'react';

class CounterStep extends Component{

    render(){
        console.log(this.props.stepValue)
        return(
            <div className="Counter-step">
                <h1>test</h1>
                <span className="Step-label">Krok:</span>
                <input onChange={()=>(this.props.getInputValue(this.step.value))} defaultValue="1" ref={(c) => this.step = c} className="Step-input" type="number"/>

                <button onClick={this.props.addSteps}  className="btn">Add {this.props.stepValue}</button>
            </div>
        )
    }
}

export default CounterStep;