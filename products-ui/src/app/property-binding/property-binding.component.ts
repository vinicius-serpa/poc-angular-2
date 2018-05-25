import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  showParagraph: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  show(): void {
    this.showParagraph = !this.showParagraph;
  }

}
