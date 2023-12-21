import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './landingPage/landingPage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillSetComponent } from './skill-set/skill-set.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { JoinComponent } from './join/join.component';
import { PolloLocoComponent } from './pollo-loco/pollo-loco.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule,
    RouterOutlet,
    LandingPageComponent,
    NavbarComponent,
    AboutMeComponent,
    SkillSetComponent,
    MyWorkComponent,
    PokedexComponent,
    JoinComponent,
    PolloLocoComponent,
    FooterComponent,
    FormsModule,
    ContactComponent,
    HttpClientModule,
    ]
})

export class AppComponent {
  title = 'Portfolio';
}
