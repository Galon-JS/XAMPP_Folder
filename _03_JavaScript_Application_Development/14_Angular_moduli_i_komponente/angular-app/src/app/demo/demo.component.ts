import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {

  sayHello() {
    alert('Heloo');
  }
  // message: string;
  
  constructor() {
    // this.message = 'This is initial value';
  }

  ngOnInit(): void {}
}
// export class DemoComponent implements OnInit {
//   name: string;
//   name2: string;
//   user: any;

//   userClasses: any;
//   userClasses2: any;

//   width: string;
//   width2: number;
//   userStyles: string;

//   constructor() {
//     this.name = 'Ana';
//     this.name2 = 'Tanja';
//     this.user = {
//       id: 1,
//       name: 'Vanja',
//       email: 'vanja@gmail.com',
//       balance: 124367.675474,
//       code: 'a4fg56',
//       isDeleted: true
//     }
//     this.userClasses = ['user-class-1','user-class-2','user-class-3']
//     this.userClasses2 = {
//       'user-class-1': true,
//       'user-class-2': false,
//       'user-class-3': true
//     }
//     this.width = '100px'
//     this.width2 = 100
//     this.userStyles = 'width: 200px; height: 100px'
//   }

//   ngOnInit(): void {}
// }
