import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  showName: boolean = true;
  courses: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  show(): void {
    this.showName = !this.showName;
  }

  getValue(): boolean {
    return this.showName;
  }

  addCourse(): void {
    this.courses.push("course");
  }

}
