import { Component } from '@angular/core';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss'],
})
export class SocialsComponent {
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
}
