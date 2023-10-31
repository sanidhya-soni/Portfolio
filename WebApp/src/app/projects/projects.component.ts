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
      "title": "Logistics Optimization Strategies in Fresh Fruit Supplychain",
      "imageSrc": "projects/project.png",
      "description": "This is a project made to learn the latest languages by building an app.",
      "skills": [
        "Java",
        "Data Structures",
        "OOPS",
        "Algorithms"
      ],
      "demo": "https://www.example.com",
      "source": "https://github.com/sanidhya-soni/Minor-Project-1"
    },
    {
      "title": "Microservice Based SaaS Application for Unified Communication in Campus",
      "imageSrc": "projects/project.png",
      "description": "This is a project made to learn the latest languages by building an app.",
      "skills": [
        "AWS ECS (Docker)",
        "DynamoDb",
        "AWS S3",
        "Jenkins",
        "NodeJS"
      ],
      "demo": "https://www.example.com",
      "source": "https://github.com/sanidhya-soni/Minor-Project-2"
    },
    {
      "title": "Manas - Disease Prediction System",
      "imageSrc": "projects/project.png",
      "description": "This is a project made to learn the latest languages by building an app.",
      "skills": [
        "Docker",
        "Jenkins",
        "Flask",
        "Python"
      ],
      "demo": "https://www.example.com",
      "source": "https://github.com/sanidhya-soni/Manas-Hackathon-2.0"
    }
  ];
}
