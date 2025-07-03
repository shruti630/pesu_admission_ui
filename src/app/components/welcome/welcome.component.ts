import { Component, type OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import  { Router } from "@angular/router"
import { HeaderComponent } from "../header/header.component"
import { ProgressBarComponent } from "../progress-bar/progress-bar.component"

@Component({
  selector: "app-welcome",
  standalone: true,
  imports: [CommonModule, HeaderComponent, ProgressBarComponent],
  template: `
    <app-header></app-header>
    
    <div class="welcome-section">
      <div class="container">
        <app-progress-bar [currentStep]="1"></app-progress-bar>
        
        <div class="welcome-content">
          <div class="welcome-illustration">
            <img src="assets/AdmReg_Banner.png?height=300&width=500" alt="Registration Illustration" class="illustration-img">
          </div>
          
          <div class="welcome-text">
            <h1 class="welcome-title">Welcome</h1>
            <p class="welcome-subtitle">Let's get you registered for Admissions 2025</p>
            <p class="course-info">
              Course: <span class="course-name">{{ selectedCourse }}</span>
            </p>
          </div>
        </div>
        
        <div class="navigation-buttons">
          <button class="back-button btn btn-primary" (click)="goBack()">BACK</button>
          <button class="next-button btn btn-primary" (click)="goNext()">NEXT</button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
    .welcome-section {
      min-height: calc(100vh - 80px);
      background-color: #f8f9fa;
      padding: 40px 0;
      display: flex;
      align-items: center;
    }

    .welcome-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin: 40px 0;
    }

    .illustration-img {
      width: 100%;
      max-width: 500px;
      height: auto;
      margin-bottom: 40px;
    }

    .welcome-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #2c3e50;
      margin-bottom: 20px;
    }

    .welcome-subtitle {
      font-size: 1.2rem;
      color: #7f8c8d;
      margin-bottom: 20px;
    }

    .course-info {
      font-size: 1rem;
      color: #666;
    }

    .course-name {
      color: #e67e22;
      font-weight: 600;
    }

    .navigation-buttons {
      display: flex;
      justify-content: space-between;
      margin-top: 40px;
    }

    @media (max-width: 768px) {
      .welcome-title {
        font-size: 2rem;
      }

      .navigation-buttons {
        flex-direction: column;
        gap: 15px;
      }
    }
  `,
  ],
})
export class WelcomeComponent implements OnInit {
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
