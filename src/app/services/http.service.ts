import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

private api = 'https://formsubmit.co/Oliver.haerle@outlook.com'
// private api = 'https://oliver-haerle.developerakademie.net/Portfolio/send_mail/send_mail.php'
// private api = 'https://formspree.io/f/mqkrzqqa'
// private api = 'https://formspree.io/f/xvoepogo'

  constructor(private http: HttpClient) {}
  sendMail(input: any) {
    console.log(input)
    return this.http.post(this.api, 'test', {responseType: 'text'})
      // map(
      //   (response) => {
      //     if (response) {
      //       return response;
      //     }
      //   },
      //   (error:any) => {
      //     return error;
      //   }
      // )
  }
}
