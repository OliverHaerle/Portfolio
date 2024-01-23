import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {



  constructor() { }

  ngOnInit(): void { }

  showMenu() {
    document.getElementById('burger-menu')?.classList.toggle('d-none');
  }

  showMenuDelayed() {
    setTimeout(() => {
      this.showMenu();
    }, 500);
  }
}
