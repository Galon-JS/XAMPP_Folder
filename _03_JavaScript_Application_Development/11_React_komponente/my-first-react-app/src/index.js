import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById('root'))

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