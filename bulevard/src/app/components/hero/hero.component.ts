import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  heroData = {
    closing: {
      programTitle: 'OPEN HOURS',
      programDays: 'Everyday',
      programText: '9:00 - 23:00',
      address: 'Bulevardul Nicolae Iorga Nr. 52',
      number: '0722 995 232',
      text: `Come and Toast the Passing Years in our Cozy Cafè or Scroll Down for More`,
    },
  };
  backgroundImages: any[] = [
    {
      src: '../assets/bar/bumbuBottle.jpeg',
    },
    {
      src: '../assets/bar/shelfSpirits.jpeg',
    },
    {
      src: '../assets/bar/bar1.jpeg',
    },
    {
      src: '../assets/bar/bar2.jpeg',
    },
  ];

  constructor() {
    // console.log('backgroundImages inside hero component log:');
    // console.log(this.backgroundImages);
  }
}
