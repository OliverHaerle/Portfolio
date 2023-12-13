import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {

  constructor() {
    console.log('bibi')
  }

  skillIcons = [
    'skill-icon1',
    'skill-icon2',
    'skill-icon3',
    'skill-icon4',
    'skill-icon5',
    'skill-icon6',
    'skill-icon7',
    'skill-icon8',
    'skill-icon9',
    'skill-icon10'
  ]

  description = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML',
    'Scrum',
    'Firebase',
    'GIT',
    'CSS',
    'Test-Api',
    'Material design'
  ]
}

