import React, {Component} from 'react';

class CounterStep extends Component{
    render(){
        return(
            <div className="Counter-step">
                <span className="Step-label">Krok:</span>
                <input className="Step-input" type="number"/>
            </div>
        )
    }
}

export default CounterStep;