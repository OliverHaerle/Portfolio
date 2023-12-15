import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  name!: string;
  email!: string;
  message!: string;

  @ViewChild('myForm') myForm: any;


  constructor() { }

  ngOnInit() { }

  sendMail(event){
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("YOUR_URL", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        window.location.href = "./send_mail.html";
    }).catch((error) => {
        console.log(error);
    });
}

}
