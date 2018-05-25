import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  people: any [] = [
    { id: 1, name:'João' },
    { id: 2, name:'Maria' },
    { id: 3, name:'Thiago' },
    { id: 4, name:'Evelin' }
  ];

  constructor() { }

  ngOnInit() {
  }

  save(index: number, person: any): number {
    return person.id;
  }

  update() {
    this.people = [
      {id:1, name:'João'},
      {id:2, name:'Maria'},
      {id:3, name:'Thiago'},
      {id:4, name:'Evelin'},
      {id:5, name:'Teodoro'}
    ];
  }

}
