import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

  @Input() menu: string[];
  @Output() selectedName = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendName(value) {
    this.selectedName.emit(value);
  }

}
