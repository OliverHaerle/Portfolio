import { Component, ElementRef, OnInit, Renderer2, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})

export class ContactComponent implements OnInit {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('button') button!: ElementRef;
  @ViewChild('contactMessage') contactMessage!: ElementRef;
  @ViewChild('privacyCheck') privacyCheck!: ElementRef;
  @ViewChild('isRequiredMessage') isRequiredMessage!: ElementRef;
  unchecked: string = "../../assets/img/form/unchecked.svg";
  checked: string = "../../assets/img/form/checked.svg";
  isChecked: boolean = false;
  sendingConditionsMet: string = 'nameFieldModel.length >= 1 && emailFieldModel.length >= 1 && messageModel.length >= 1 && isChecked == true'


  nameFieldModel: string = '';
  emailFieldModel: string = '';
  messageModel: string = '';

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void { }

  async sendMail() {

    let nameField = this.nameFieldModel;
    let emailField = this.emailFieldModel;
    let messageField = this.messageModel;
    // let button = this.button.nativeElement;

    // nameField.disabled = true;
    // emailField.disabled = true;
    // messageField.disabled = true;
    // button.disabled = true;

    let fd = new FormData();
    fd.append('name', nameField)
    fd.append('email', emailField)
    fd.append('message', messageField)


    await fetch('https://oliverhaerle.at/send_mail/send_mail/send_mail.php', {
      method: 'POST',
      body: fd
    })
      .catch(error => {
        console.error('Fetch Error:', error);
      });

    this.animation();
    // setTimeout(() => {
    //   nameField.disabled = false;
    //   emailField.disabled = false;
    //   messageField.disabled = false;
    //   // button.disabled = false;
    // }, 1000);
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
    if (this.unchecked == "../../assets/img/form/unchecked.svg") {
      this.unchecked = this.checked
      this.isChecked = true
    } else {
      this.unchecked = "../../assets/img/form/unchecked.svg"
      this.isChecked = false
    }
  }
}

// checkPrivacyPolicy() {
//   let privacyCheck = this.privacyCheck.nativeElement;
//   if (this.unchecked == "../../assets/img/form/checked.svg") {
//     this.animation();
//     this.renderer.addClass(privacyCheck, 'd-none')
//   } else {
//     this.renderer.addClass(privacyCheck, 'showPrivacyCheck')
//     this.renderer.removeClass(privacyCheck, 'd-none')
//   }
// }


// checkSendingConditions() {
//   if (this.button.nativeElement.classList.contains('active-button')) {
//     this.sendMail();
//     this.animation();
//   }
// }

// disableButtons(nameField: { disabled: boolean; }, emailField: { disabled: boolean; }, messageField: { disabled: boolean; }, button: { disabled: boolean; }) {
//   nameField.disabled = true;
//   emailField.disabled = true;
//   messageField.disabled = true;
//   button.disabled = true;
// }