import { Injectable } from '@angular/core';

@Injectable()
export class MyLogService {

  constructor() { }

  setLog(msg:string) {
    console.log(msg);
  }
  
}
