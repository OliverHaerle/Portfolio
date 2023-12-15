import { Component } from '@angular/core';


@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {

  // constructor() {}

  skillIcons1 = [
    'skill-icon1.svg',
    'skill-icon2.svg',
    'skill-icon3.svg',
    'skill-icon4.svg',
    'skill-icon5.svg',
  ];

  description1 = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML',
    'Scrum',

  ];

  skillicons2 = [
    'skill-icon6.svg',
    'skill-icon7.svg',
    'skill-icon8.svg',
    'skill-icon9.svg',
    'skill-icon10.svg',
  ];

  description2 = [
    'Firebase',
    'GIT',
    'CSS',
    'Test-Api',
    'Material design',
  ]

}

