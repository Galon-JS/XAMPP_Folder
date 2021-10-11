import React from "react"
import ReactDOM from "react-dom"

class UserCode extends React.Component {

    render() {
        return (
            <div>
                <p>Change user code</p>
                <button onClick={this.props.generateCode}>Generate new code</button>
            </div>        
        )
    }
}

export default UserCode