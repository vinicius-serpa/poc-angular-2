import { Component } from '@angular/core';

import { AlertService } from './alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Central Database';
  picture: string = 'favicon.ico';
  development: string[] = ['Angular', 'JavaScript', 'TypeScript', 'HTML', 'CSS'];
  value: string;

  constructor(private service: AlertService) { }

  alertMessage(): void {
    this.service.alertMessage();
  }

  getValue(value) {
    this.value = value;
  }
}
