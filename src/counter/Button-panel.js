import React, {Component} from 'react';

class ButtonPanel extends Component {
    render(){
        return(
            <div className="Button-panel"> 
                <button onClick={this.props.changeValue} className="btn">Add 1</button>
                <button onClick={this.props.resetInit}  className="btn">ReInit</button>
                <button onClick={this.props.setZero}  className="btn">Reset</button>
            </div>
        )
    }
}

export default ButtonPanel