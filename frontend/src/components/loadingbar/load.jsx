import React, { Component } from 'react'


class Load extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            value: props.value
        }
        
    }
    render() { 
        return (
            <div className="bar">
                <div className="name">{ this.state.name }</div>
                <div className="border">
                    <div className="done" style={{"--i": this.state.value}}>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Load;
