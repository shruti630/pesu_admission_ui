import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

export const routeConfig = {
  syllabus: '/syllabus',
  impdates: '/impdates',
  // ...
};

@Component({
  selector: 'app-wellcome',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ProgressBarComponent],
  templateUrl: './wellcome.component.html',
  styleUrl: './wellcome.component.css'
})
export class WellcomeComponent  implements OnInit {
  selectedCourse = ""

  constructor(private router: Router) {}

  ngOnInit() {
    this.selectedCourse = localStorage.getItem("selectedCourse") || "B.Tech (Diploma Lateral Entry)"
  }

  goBack() {
    this.router.navigate(["/course-selection"])
  }

  goNext() {
    this.router.navigate(["/basic-info"])
  }
}


