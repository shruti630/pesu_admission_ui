import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-syllabus',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.css']
})
export class SyllabusComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/course-selection']);
  }
}
