import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgForm],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {


  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(formData: any): void {
    // This function will be called when the form is submitted
    // You can access form data here and perform necessary actions
    console.log('Form submitted:', formData);
    // You can implement the logic to send the form data to your server or perform other actions.
  }
}




// import { Component } from '@angular/core';
// // import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-contact',
//   templateUrl: './contact.component.html',
//   styleUrls: ['./contact.component.scss']
// })
// export class ContactComponent {

//   constructor() { }

//   onSubmit(formData: any): void {
//     // This function will be called when the form is submitted
//     // You can access form data here and perform necessary actions
//     console.log('Form submitted:', formData);
//     // You can implement the logic to send the form data to your server or perform other actions.
//   }
// }
