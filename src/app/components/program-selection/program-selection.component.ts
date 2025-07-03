import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Program {
  name: string;
}

interface ProgramCategory {
  name: string;
  programs: Program[];
}

@Component({
  selector: 'app-program-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './program-selection.component.html',
  styleUrls: ['./program-selection.component.css']
})
export class ProgramSelectionComponent {
  programCategories: ProgramCategory[] = [
    {
      name: 'Engineering',
      programs: [{ name: 'B.Tech (Diploma Lateral Entry)' }, { name: 'M.Tech' }]
    },
    {
      name: 'Medicine',
      programs: [{ name: 'MBBS' }]
    },
    {
      name: 'Management and Commerce',
      programs: [
        { name: 'BBA (Gen / Hons)' },
        { name: 'BBA (Sports Management)' },
        { name: 'BBA (Hons) Business Analytics' },
        { name: 'BBA (Hospitality and Event Management)' },
        { name: 'B.Com (Hons) CMA' },
        { name: 'B.Com (Hons) ACCA' },
        { name: 'B.Com (Gen / Hons)' },
        { name: 'B.Com (Evening College)' },
        { name: 'MBA' }
      ]
    },
    // Add other categories from the image...
  ];

  constructor() { }
}
