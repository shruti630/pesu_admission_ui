import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { routeConfig } from './route-config';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(private router: Router) {}

  navigateTo(page: keyof typeof routeConfig): void {
    console.log('Navigating to:', page);
    const route = routeConfig[page];
    if (route) {
      this.router.navigateByUrl(route);
    } else {
     // console.error(No route found for: ${page});
    }
  }
}
