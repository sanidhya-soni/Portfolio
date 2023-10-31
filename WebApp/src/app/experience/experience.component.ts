import { Component } from '@angular/core';

@Component({
  selector: 'sani-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  skills: Skill[] = [
    { title: 'AWS', imageSrc: 'skills/aws.png' },
    { title: 'Docker', imageSrc: 'skills/docker.png' },
    { title: 'Jenkins', imageSrc: 'skills/jenkins.png' },
    { title: 'Java', imageSrc: 'skills/java.png' },
    { title: 'Angular', imageSrc: 'skills/angular.png' },
    { title: 'Typescript', imageSrc: 'skills/typescript.png' }
  ];

  history: ExperienceItem[] = [
    {
      organisation: 'Company A',
      role: 'Frontend Developer',
      startDate: '2019',
      endDate: '2022',
      imageSrc: 'companyALogo.png',
      experiences: [
        'Experience 1 at Company A',
        'Experience 2 at Company A'
      ]
    },
    {
      organisation: 'Company A',
      role: 'Frontend Developer',
      startDate: '2019',
      endDate: '2022',
      imageSrc: 'companyALogo.png',
      experiences: [
        'Experience 1 at Company A',
        'Experience 2 at Company A'
      ]
    },
    {
      organisation: 'Company B',
      role: 'Backend Developer',
      startDate: '2017',
      endDate: '2019',
      imageSrc: 'companyBLogo.png',
      experiences: [
        'Experience 1 at Company B',
        'Experience 2 at Company B'
      ]
    }
  ];

  getImageUrl(imageSrc: string): string {
    // Replace with your logic to get image URLs
    return 'assets/' + imageSrc;
  }
}

interface Skill {
  title: string;
  imageSrc: string;
}

interface ExperienceItem {
  organisation: string;
  role: string;
  startDate: string;
  endDate: string;
  imageSrc: string;
  experiences: string[];
}