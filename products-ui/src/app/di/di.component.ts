import { Component, OnInit } from '@angular/core';

import { NameTechService } from './name-tech.service';
import { MyLogService } from './my-log.service';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.css'],
  providers: [NameTechService, MyLogService]
})
export class DiComponent implements OnInit {

  technologies: string[];

  constructor(private myService: NameTechService, private myAlert: AlertService) {    
    this.technologies = myService.getNomesTec();
    this.myAlert.alertMessage();
  }

  ngOnInit() {
  }

}
