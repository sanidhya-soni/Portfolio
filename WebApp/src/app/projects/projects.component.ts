import { Component } from '@angular/core';
import { Project } from './project.modal';

@Component({
  selector: 'sani-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      "title": "Project A",
      "imageSrc": "projects/project.png",
      "description": "This is a project made to learn the latest languages by building an app.",
      "skills": [
        "React",
        "Express",
        "Node"
      ],
      "demo": "https://www.example.com",
      "source": "https://www.github.com"
    },
    {
      "title": "Project B",
      "imageSrc": "projects/project.png",
      "description": "This is a project made to learn the latest languages by building an app.",
      "skills": [
        "React",
        "Express",
        "Node",
        "Sass"
      ],
      "demo": "https://www.example.com",
      "source": "https://www.github.com"
    },
    {
      "title": "Project C",
      "imageSrc": "projects/project.png",
      "description": "This is a project made to learn the latest languages by building an app.",
      "skills": [
        "React",
        "Express",
        "Node"
      ],
      "demo": "https://www.example.com",
      "source": "https://www.github.com"
    }
  ];
}
