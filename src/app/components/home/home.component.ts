import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProgramSelectionComponent } from '../program-selection/program-selection.component';
import { ImportantDatesComponent } from '../important-dates/important-dates.component';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,CommonModule,RouterModule, ProgramSelectionComponent, ImportantDatesComponent, ProgressBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor() {
    // Initialization logic can go here if needed
  }

  // Any additional methods or properties can be added here

}
