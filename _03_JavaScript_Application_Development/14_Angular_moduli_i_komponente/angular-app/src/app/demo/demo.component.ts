import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  name: string;

  constructor() {

    this.name = "Ana";

   }

  ngOnInit(): void {
  }

}
