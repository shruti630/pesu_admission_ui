import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { CommonModule } from "@angular/common"
import  { Router } from "@angular/router"
import { RouterModule } from '@angular/router';
import Typed from 'typed.js';
import { isPlatformBrowser } from '@angular/common';
import { ProgramSelectionComponent } from '../program-selection/program-selection.component';
import { ProgressBarComponent } from "../progress-bar/progress-bar.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-course-selection',
  standalone: true,
  imports: [CommonModule, RouterModule, ProgressBarComponent, HeaderComponent],
  templateUrl: './course-selection.component.html',
  styleUrls: ['./course-selection.component.css']
})

export class CourseSelectionComponent {
   @ViewChild('typedElement', { static: false }) typedElement!: ElementRef;
  constructor(private route: Router,@Inject(PLATFORM_ID) private platformId: Object) {}

  selectCourse(courseName: string) {
    // Store selected course in localStorage or service
    localStorage.setItem("selectedCourse", courseName)
    this.route.navigate(["/welcome"])
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const options = {
        strings: ['Registration', 'Now Open'],
        typeSpeed: 60,
        backSpeed: 30,
        loop: true,
        showCursor: true,
        cursorChar: '|'
      };
      new Typed(this.typedElement.nativeElement, options);
    }
  }

  scrollToTop() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}

