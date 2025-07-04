import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { ProgressBarComponent } from "../progress-bar/progress-bar.component";

@Component({
  selector: 'app-application-fee',
  templateUrl: './termsAndCondition.component.html',
  styleUrls: ['./termsAndConditions.component.css'],
  imports: [HeaderComponent, ProgressBarComponent]
})
export class TermsAndCondition {
  constructor(private router: Router) {}

  onPayNow() {
    // Redirect to actual payment gateway URL
    window.location.href = 'https://secure.payu.in/_payment'; // Replace with real one
  }

  goBack() {
    this.router.navigate(['/welcome']);
  }
}
