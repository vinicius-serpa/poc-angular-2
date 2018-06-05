import { Injectable, Optional } from '@angular/core';

import { MyLogService } from './my-log.service';

@Injectable()
export class NameTechService {

  constructor(@Optional() private myLog: MyLogService) { }

  getNomesTec(): string[] {
    
    if (this.myLog) {
      this.myLog.setLog('consultou o array de tecnologias');
    }

    return ['Angular 2', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Desenvolvendo com Angular 2'];
  }

}
