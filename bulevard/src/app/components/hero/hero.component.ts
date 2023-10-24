import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  heroData: any;
  backgroundImages: any[] = [
    {
      src: '../assets/bar/heroImages/bumbuBottle.jpeg',
    },
    {
      src: '../assets/bar/heroImages/shelfSpirits.jpeg',
    },
    {
      src: '../assets/bar/heroImages/bar1.jpeg',
    },
    {
      src: '../assets/bar/heroImages/bar2.jpeg',
    },
  ];

  constructor(private dataService: DataService) {
    this.dataService.getHeroData().subscribe((data) => {
      this.heroData = data.heroData;
    });
  }
  ngOnInit(): void {}
}
