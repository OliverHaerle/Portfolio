import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-LandingPage',
    standalone: true,
    imports: [CommonModule],
    template: '<section><h1>Portfolio</h1><h2>Oliver Härle</h2></section>',
    styleUrls: ['./landingPage.component.scss']
}) //decorator / typescript-specific


export class LandingPageComponent {

}