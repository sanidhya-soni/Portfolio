import { Component, Input } from '@angular/core';
import { Project } from '../project.modal';

@Component({
  selector: 'sani-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input()
  project!: Project; // Use the Project interface
}
