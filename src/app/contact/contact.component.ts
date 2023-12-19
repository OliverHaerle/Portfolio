import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [HttpService]
})
export class ContactComponent {
  htmlContent: SafeHtml = '';

  constructor(private http: HttpService, private sanitizer: DomSanitizer) { }

  contact: any = {
    name: '',
    email: '',
    message: ''
  }

  async onSubmit() {
    this.http.sendMail(this.contact).subscribe((result: string) => {
      console.log('result', result);
      this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(result);
    }, (error: { error: { message: any; }; status: any; }) => {
      {
        if (error instanceof ErrorEvent) {
          // A client-side or network error occurred.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          console.error(
            `Backend returned code ${error.status}, `
          );
        }
      }
    }
    );
    // await fetch('https://formsubmit.co/Oliver.haerle@outlook.com', {
    //   method: 'Post',
    //   body: this.contact
    // })
  }
}
