import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  classBindingValue: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  changeClassBinding(): void {
    this.classBindingValue = !this.classBindingValue;
  }

  classes(): any {
    
    let values = {
      'bg-color': this.classBindingValue,
      'word-color': this.classBindingValue,
      'word-style': this.classBindingValue,
      'paragraph-border': this.classBindingValue
    }

    return values;
  }

}
