import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('myForm') myForm: any;
  name!: string;

  constructor() {
  }

  ngOnInit(): void {
  }
  

  sendMail() {
    console.log('sending mail', this.myForm)
  }

}
