import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent {
  @ViewChild('h3') h3!: ElementRef;

  constructor(private renderer: Renderer2) { }

  dnone() {
    let h3 = this.h3.nativeElement;
    this.renderer.addClass(h3, 'd-none');
  }
  d: any;

}
