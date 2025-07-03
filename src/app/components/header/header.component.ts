import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavigationService } from '../../shared/navigate.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

   constructor(private router: Router,
    private navigationService: NavigationService
   ) {}
routetosyllabus(event?: Event) {
    if (event) event.preventDefault();
    this.navigationService.navigateTo('syllabus'); // ✅ works
}

routetoimpdates(event?: Event) {
  if (event) event.preventDefault();
  this.navigationService.navigateTo('impdates');
}

routetoNote(event?: Event) {
  if (event) event.preventDefault();
  this.navigationService.navigateTo('note');
}

}
