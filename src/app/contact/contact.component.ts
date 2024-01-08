import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('button') button!: ElementRef;

  constructor() { }

  ngOnInit(): void { }


  async sendMail() {
    console.log('sending mail', this.myForm);

    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let button = this.button.nativeElement;

    this.disableButtons(nameField, emailField, messageField, button)

    let fd = new FormData();
    fd.append('name', nameField.value)
    fd.append('email', emailField.value)
    fd.append('message', messageField.value)


    await fetch('https://oliverhaerle.at/send_mail/send_mail/send_mail.php', {
      method: 'POST',
      body: fd
    })

    setTimeout(() => {
      nameField.disabled = false;
      emailField.disabled = false;
      messageField.disabled = false;
      button.disabled = false;
    }, 3000);
  }

  disableButtons(nameField: { disabled: boolean; }, emailField: { disabled: boolean; }, messageField: { disabled: boolean; }, button: { disabled: boolean; }) {
    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    button.disabled = true;
  }

}
