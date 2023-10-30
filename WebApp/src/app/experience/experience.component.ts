import { Component } from '@angular/core';

@Component({
  selector: 'sani-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  skills: Skill[] = [
    { title: 'Frontend Developer', imageSrc: 'skills/html.png' },
    { title: 'Backend Developer', imageSrc: 'skills/react.png' },
    { title: 'UI Designer', imageSrc: 'uiImage.png' },
    { title: 'Frontend Developer', imageSrc: 'frontendImage.png' },
    { title: 'Backend Developer', imageSrc: 'backendImage.png' },
    { title: 'UI Designer', imageSrc: 'uiImage.png' }
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