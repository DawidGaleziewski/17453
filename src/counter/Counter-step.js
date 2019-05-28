import React, {Component} from 'react';

class CounterStep extends Component{

        
    getValue = () => {
        console.log('step' + this.step)
    }

    render(){
        return(
            <div className="Counter-step">
                <h1>test</h1>
                <span className="Step-label">Krok:</span>
                <input ref={(c) => this.step = c} className="Step-input" type="number"/>

                <button onClick={()=>(this.props.getInputValue(this.step.value))}  className="btn">Add X</button>
            </div>
        )
    }
}

export default CounterStep;