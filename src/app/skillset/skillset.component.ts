import { Component } from '@angular/core';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.scss']
})
export class SkillsetComponent {
  skillIcons1 = [
    'skill-icon1.svg',
    'skill-icon2.svg',
    'skill-icon3.svg',
    'skill-icon4.svg',
    'skill-icon5.svg',
    'skill-icon6.svg',
    'skill-icon7.svg',
    'skill-icon8.svg',
    'skill-icon9.svg',
    'skill-icon10.svg',
  ];

  description1 = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML',
    'Scrum',
    'Firebase',
    'GIT',
    'CSS',
    'Test-Api',
    'Material design',

  ];
}
