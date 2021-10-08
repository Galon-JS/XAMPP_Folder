import React from "react";
import ReactDOM from "react-dom";

class SayHelloWorld extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
            code: Math.random().toString(36).substring(7),
            name: 'Ana',
            email: 'ana@gmail.com',
            balance: 15999.35777
        }
        
        this.generateCode = this.generateCode.bind(this)
    }

    generateCode() {
        this.setState({ code: Math.random().toString(36).substring(7)})        
    }

    render() {
        return (<div>
            <h1>Your code is: {this.state.code}</h1>
            <h1>Hello {this.state.name}</h1> 
            <button onClick={this.generateCode}>Generate New Code</button>
        </div>)
    }

    // render() {
    //     return <h1>Hello {this.state.code}</h1> 
    // }
}
ReactDOM.render(<SayHelloWorld />, document.getElementById('root'))

// class SayHelloWorld extends React.Component {
//     render() {
//         return <h1> Hello World REACT!!!</h1> 
//     }
// }
// ReactDOM.render(<SayHelloWorld />, document.getElementById('root'))

// function SayHelloWorld() {
//     return <h1> Hello World REACT!!!</h1>;
// }
// ReactDOM.render(SayHelloWorld(), document.getElementById('root'))

// const elem = <SayHelloWorld />
// ReactDOM.render(elem, document.getElementById('root'))

// function SayHello(props) {
//     return <h1> Hello {props.name}</h1>
// }
// function App() {
//     return (<div>
//         <SayHello name="Ana" />
//         <SayHello name="Vanja" />
//         <SayHello name="Manja" />
//     </div>)
// }
// ReactDOM.render(<App />, document.getElementById('root'))