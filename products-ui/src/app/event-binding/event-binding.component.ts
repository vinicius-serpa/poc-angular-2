import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  buttonEnabled: boolean = false;
  values: string[] = [];
  age: number = 0;

  constructor() { }

  ngOnInit() {
  }

  myClick() {
    console.log("click event triggered");
  }

  digit($event) {
    console.log($event);
  }

  digitVarTemplate(value) {
    console.log(value);
  }

  passValidation(value) {
    if (value.length < 5) {
      this.buttonEnabled = false;
    } else {
      this.buttonEnabled = true;
    }
  }

  savePass(pass) {
    alert("Saved!");
  }

  add(content: string): void {
    this.values.push(content);
  }

  checkAge(value): void {
    let year = new Date().getFullYear();
    this.age = year - value;
  }

}
