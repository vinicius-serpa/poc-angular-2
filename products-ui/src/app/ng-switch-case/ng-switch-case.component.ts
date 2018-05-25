import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-case',
  templateUrl: './ng-switch-case.component.html',
  styleUrls: ['./ng-switch-case.component.css']
})
export class NgSwitchCaseComponent implements OnInit {

  someNumber: number = 0;

  constructor() { }

  ngOnInit() {
  }

  increment(): void {
    this.someNumber++;
  }

}
