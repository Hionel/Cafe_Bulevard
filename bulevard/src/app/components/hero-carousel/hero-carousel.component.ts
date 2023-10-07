import { Component } from '@angular/core';
import { cilArrowLeft, cilArrowRight } from '@coreui/icons';

@Component({
  selector: 'app-hero-carousel',
  templateUrl: './hero-carousel.component.html',
  styleUrls: ['./hero-carousel.component.scss'],
})
export class HeroCarouselComponent {
  icons = { cilArrowLeft, cilArrowRight };

  slides: any[] = [
    {
      src: '../assets/bar/bumbuBottle.jpeg',
    },
    {
      src: '../assets/bar/shelfSpirits.jpeg',
    },
    {
      src: '../assets/bar/negroni1.jpeg',
    },
  ];
}
