import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  myClasses: string;
  isDeleted: boolean;
  myStyles: any;

  message: string;
  isVisible: boolean;
  items: any;
  selectedIndex: number;

  constructor() {
    this.selectedIndex = -1;
    this.items = ['black', 'blue', 'yellow'];
    this.isVisible = true;
    this.myClasses = 'user-class-1 user-class-2 user-class-3';
    this.isDeleted = true;
    this.myStyles = {
      'font-style': 'normal',
      'font-weight': 'bold',
      'font-size': '24px'
    };
    this.message = 'This is initial value.';
  }

  ngOnInit(): void {
  }

}
