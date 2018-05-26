import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  fontValue: string = "9px";
  size: number = 10;
  fontValidation: boolean = false;
  colorValidation: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.size++;
    this.fontValue = this.size + 'px';
  }

  changeFont() {
    this.fontValidation = !this.fontValidation;
  }

  changeColor() {
    this.colorValidation = !this.colorValidation;
  }

}
