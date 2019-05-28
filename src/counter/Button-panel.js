import React, {Component} from 'react';

class ButtonPanel extends Component {
    render(){
        return(
            <div className="Button-panel"> 
                <button className="btn">Add 1</button>
                <button className="btn">ReInit</button>
                <button className="btn">Reset</button>
            </div>
        )
    }
}

export default ButtonPanel