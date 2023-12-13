import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './landingPage/landingPage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillSetComponent } from './skill-set/skill-set.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, LandingPageComponent, NavbarComponent, AboutMeComponent, SkillSetComponent]
})
export class AppComponent {
  title = 'Portfolio';
}
