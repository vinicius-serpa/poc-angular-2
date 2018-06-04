import { Component, OnInit } from '@angular/core';

import { NameTechService } from './name-tech.service';
import { MyLogService } from './my-log.service';

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.css'],
  providers: [NameTechService, MyLogService]
})
export class DiComponent implements OnInit {

  technologies: string[];

  constructor(myService: NameTechService) {    
    this.technologies = myService.getNomesTec();
  }

  ngOnInit() {
  }

}
