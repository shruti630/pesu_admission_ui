import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-application-fee',
  templateUrl: './termsAndCondition.component.html',
  styleUrls: ['./termsAndConditions.component.css'],
  imports: [HeaderComponent]
})
export class TermsAndCondition {
  onPayNow() {
    // Redirect to actual payment gateway URL
    window.location.href = 'https://secure.payu.in/_payment'; // Replace with real one
  }
}
