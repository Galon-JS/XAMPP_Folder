import React from "react"
import ReactDOM from "react-dom"
import User from "./User"
import UserCode from "./UserCode"

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: 'Ana Todoric',
            email: 'todoric!@gmail.com',
            balance: '42156.15246',
            code: '5n4t6z'
        }
        this.generateCode = this.generateCode.bind(this)
    }
    generateCode() {
        this.setState({ code: Math.random().toString(36).substring(7) })
    }
    render() {
        return (
            <div>
                <User user={this.state} />
                <UserCode generateCode={this.generateCode} />
            </div>
        )
    }
}

export default App