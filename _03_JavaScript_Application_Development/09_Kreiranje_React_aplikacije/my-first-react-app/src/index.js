import React from 'react';
import ReactDOM from 'react-dom';

// let age = 18
// const elem = (age > 17) ? <div>You are welcome !</div> : <div>You can't enter !</div>
// ReactDOM.render(elem, document.getElementById('root'))

// function makeMessage(age) {
// 	if (age > 17) {
// 		return <div>You are welcome !</div>
// 	} else {
// 		return <div>You can't enter !</div>
// 	}
// }

// ReactDOM.render(makeMessage(18), document.getElementById('root'))

// const elem = <ul>
//   <li>Amaranth</li>
//   <li>Auburn</li>
//   <li>Chestnut</li>
//   <li>Frostbite</li>
// </ul>
// ReactDOM.render(elem, document.getElementById('root'))

const colors = ['Amaranth', 'Auburn', 'Chestnut', 'Frostbite']
const elem = <ul>
  {
    colors.map((value, index) => {
      return <li key={index}>{value}</li>
    })
  }
</ul>
ReactDOM.render(elem, document.getElementById('root'))

// const user = {
//   firstName: 'Ana',
//   lastName: 'Todoric',
//   fullName: function () {
//     return this.firstName + ' ' + this.lastName
//   }
// }
// const elem = <h1 className="heading" id="my-heading">{user.fullName()}</h1>
// ReactDOM.render(elem, document.getElementById('root'))

// const content = "I am React Element"
// const elem = <h1 className="heading" id="my-heading">{content}</h1>
// ReactDOM.render(elem, document.getElementById('root'))

// const elem = <h1 className="heading" id="my-heading">I am React Element</h1>
// ReactDOM.render(elem, document.getElementById('root'))

// ReactDOM.render(
  // React.createElement('div', null, 'Hello world!'),
  // document.getElementById('root')
// );

// let elem = React.createElement(
  // 'h1',
  // {
    // className: 'heading',
    // id: 'my-heading',
  // },
  // 'I am React Element'
// )
// ReactDOM.render(elem, document.getElementById('root'))
