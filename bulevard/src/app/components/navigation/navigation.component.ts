import { Component } from '@angular/core';
import { ScrollService } from 'src/app/service/scroll.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  constructor(private scrollService: ScrollService) {}
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
    this.scrollService.navigateHome(section);
  };
}
