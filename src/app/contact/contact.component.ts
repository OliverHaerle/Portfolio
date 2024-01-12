import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

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
  @ViewChild('contactMessage') contactMessage!: ElementRef;
  @ViewChild('privacyCheck') privacyCheck!: ElementRef;
  imageUrl: string = "../../assets/img/unchecked.svg";

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void { }

  check() {
    let privacyCheck = this.privacyCheck.nativeElement;
    if (this.imageUrl == "../../assets/img/checked.svg") {
      this.animation();
      this.renderer.addClass(privacyCheck, 'd-none')
    } else {
      this.renderer.addClass(privacyCheck, 'showPrivacyCheck')
      this.renderer.removeClass(privacyCheck, 'd-none')
    }
  }

  async sendMail() {
    this.check();

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
      .catch(error => {
        console.warn('Fetch Error:', error);
      });


    setTimeout(() => {
      nameField.disabled = false;
      emailField.disabled = false;
      messageField.disabled = false;
      button.disabled = false;
    }, 1000);
  }

  disableButtons(nameField: { disabled: boolean; }, emailField: { disabled: boolean; }, messageField: { disabled: boolean; }, button: { disabled: boolean; }) {
    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    button.disabled = true;
  }

  animation() {
    let message = this.contactMessage.nativeElement;
    this.renderer.addClass(message, 'flyIn')

    setTimeout(() => {
      this.renderer.addClass(message, 'flyOut')
    }, 2500);
    setTimeout(() => {
      this.renderer.removeClass(message, 'flyIn');
      this.renderer.removeClass(message, 'flyOut');
    }, 3000);
  }

  tickTheBox() {
    if (this.imageUrl == "../../assets/img/unchecked.svg") {
      this.imageUrl = "../../assets/img/checked.svg"
    } else {
      this.imageUrl = "../../assets/img/unchecked.svg"
    }
  }
}

