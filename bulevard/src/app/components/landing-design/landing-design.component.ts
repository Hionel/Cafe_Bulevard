import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-design',
  templateUrl: './landing-design.component.html',
  styleUrls: ['./landing-design.component.scss'],
})
export class LandingDesignComponent {
  constructor(private router: Router) {}
  landingPageBackgroundUrl: string = '../assets/oils/abstract.jpg';
  landingPageLogoUrl: string = '../assets/bar/landing_logo.png';
  navigateHome = () => {
    this.router.navigate(['/home']);
  };
}
