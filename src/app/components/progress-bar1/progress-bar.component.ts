import { Component, Input } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-progress-bar",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="progress-bar">
      <div class="progress-line"></div>
      <div class="progress-line-active" [style.width.%]="getProgressWidth()"></div>
      
      <div class="progress-step">
        <div class="progress-circle" [class.active]="currentStep >= 1" [class.inactive]="currentStep < 1">
          ✓
        </div>
        <span class="progress-label" [class.active]="currentStep >= 1" [class.inactive]="currentStep < 1">
          Welcome
        </span>
      </div>
      
      <div class="progress-step">
        <div class="progress-circle" [class.active]="currentStep >= 2" [class.inactive]="currentStep < 2">
          ✓
        </div>
        <span class="progress-label" [class.active]="currentStep >= 2" [class.inactive]="currentStep < 2">
          Basic Info
        </span>
      </div>
      
      <div class="progress-step">
        <div class="progress-circle" [class.active]="currentStep >= 3" [class.inactive]="currentStep < 3">
          3
        </div>
        <span class="progress-label" [class.active]="currentStep >= 3" [class.inactive]="currentStep < 3">
          Registration Fee
        </span>
      </div>
      
      <div class="progress-step">
        <div class="progress-circle" [class.active]="currentStep >= 4" [class.inactive]="currentStep < 4">
          4
        </div>
        <span class="progress-label" [class.active]="currentStep >= 4" [class.inactive]="currentStep < 4">
          Registration
        </span>
      </div>
    </div>
  `,
  styles: [
    `
    .progress-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 30px 0;
      position: relative;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .progress-step {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      z-index: 2;
      flex: 1;
    }

    .progress-circle {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      margin-bottom: 8px;
      font-size: 14px;
    }

    .progress-circle.active {
      background-color: #4caf50;
      color: white;
    }

    .progress-circle.inactive {
      background-color: #e0e0e0;
      color: #999;
    }

    .progress-label {
      font-size: 12px;
      text-align: center;
      max-width: 80px;
    }

    .progress-label.active {
      color: #4caf50;
      font-weight: 600;
    }

    .progress-label.inactive {
      color: #999;
    }

    .progress-line {
      position: absolute;
      top: 20px;
      left: 20px;
      right: 20px;
      height: 2px;
      background-color: #e0e0e0;
      z-index: 1;
    }

    .progress-line-active {
      position: absolute;
      top: 20px;
      left: 20px;
      height: 2px;
      background-color: #4caf50;
      z-index: 1;
      transition: width 0.3s ease;
    }
  `,
  ],
})
export class ProgressBarComponent {
  @Input() currentStep = 1

  getProgressWidth(): number {
    return ((this.currentStep - 1) / 3) * 100
  }
}
