import { Component, type OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import  { Router } from "@angular/router"
import { HeaderComponent } from "../header/header.component"
import { ProgressBarComponent } from "../progress-bar/progress-bar.component"


@Component({
  selector: 'app-basic-info',
  standalone: true,
  imports:[CommonModule, FormsModule, HeaderComponent, ProgressBarComponent],
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent  implements OnInit {
  selectedCourse = ""
  showPassword = false
  showConfirmPassword = false
  captchaText = ""

  formData = {
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    gender: "",
    cityName: "",
    state: "",
    captcha: "",
  }

  constructor(private router: Router) {}

  ngOnInit() {
    this.selectedCourse = localStorage.getItem("selectedCourse") || "B.Tech (Diploma Lateral Entry)"
    this.generateCaptcha()
  }

  togglePassword() {
    this.showPassword = !this.showPassword
  }

  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword
  }

  generateCaptcha() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    this.captchaText = ""
    for (let i = 0; i < 6; i++) {
      this.captchaText += chars.charAt(Math.floor(Math.random() * chars.length))
    }
  }

  refreshCaptcha() {
    this.generateCaptcha()
    this.formData.captcha = ""
  }

  goBack() {
    this.router.navigate(["/welcome"])
  }

  onSubmit() {
    if (this.formData.password !== this.formData.confirmPassword) {
      alert("Passwords do not match!")
      return
    }

    if (this.formData.captcha !== this.captchaText) {
      alert("Captcha is incorrect!")
      return
    }

    // Store form data and navigate to next step
    localStorage.setItem("basicInfo", JSON.stringify(this.formData))
     this.router.navigate(['/application-fee']);
    alert("Form submitted successfully! This would navigate to the Registration Fee page.")
  }


}
