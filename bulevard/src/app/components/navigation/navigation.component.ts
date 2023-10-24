import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  @Output() emitNavigationOption = new EventEmitter<string>();
  @Output() emitLandingDesignPageVisibility = new EventEmitter<boolean>();
  constructor() {}

  navLogoUrl: string = '../assets/bar/mug.png';
  socials = [
    {
      name: 'instagram',
      url: '../assets/socials/instagram.png',
    },
    {
      name: 'facebook',
      url: '../assets/socials/facebook.png',
    },
  ];
  navigate = (section: string) => {
    this.emitNavigationOption.emit(section);
  };
  openLanding = () => {
    this.emitLandingDesignPageVisibility.emit(true);
  };
}
