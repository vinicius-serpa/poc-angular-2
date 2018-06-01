import { Component, OnInit } from '@angular/core';

import { Contact } from './contact';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  contact = new Contact('Vinicius', '55 15 991011084', 'vinicius.serpa@gmail.com');

  constructor() { }

  ngOnInit() {
  }

  sendData() {
    alert('name: ' + this.contact.name);
    alert('phone: ' + this.contact.phone);
    alert('email: ' + this.contact.email);
  }

}
