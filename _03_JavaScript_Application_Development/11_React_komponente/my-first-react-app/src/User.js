import React from "react"
import ReactDOM from 'react-dom'

class User extends React.Component {

    render(){
        return (
            <div>
                <p>{ this.props.user.name }</p>
                <p>{ this.props.user.email }</p>
                <p>{ this.props.user.balance }</p>
                <p>{ this.props.user.code }</p>
            </div>
        )
    }
}

export default User