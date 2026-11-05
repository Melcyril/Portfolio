import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { TECH_SKILLS } from 'src/shared/skills-mock';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styles: [
  ]
})
export class SkillsComponent {
  techSkills = TECH_SKILLS;
}
