import { Injectable } from '@angular/core';

import { MyLogService } from './my-log.service';

@Injectable()
export class NameTechService {

  constructor(private myLog: MyLogService) { }

  getNomesTec(): string[] {
    
    this.myLog.setLog('consultou o array de tecnologias');

    return ['Angular 2', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Desenvolvendo com Angular 2'];
  }

}
