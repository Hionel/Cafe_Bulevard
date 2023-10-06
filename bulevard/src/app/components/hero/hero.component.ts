import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit, OnDestroy {
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
  backgroundImages: string[] = [
    '../assets/bar/bumbuBottle.jpeg',
    '../assets/bar/shelfSpirits.jpeg',
    '../assets/bar/negroni1.jpeg',
    '../assets/bar/bar1.jpeg',
    '../assets/bar/bar2.jpeg',
  ];

  currentBackgroundIndex: number = 0;
  currentBackground: string = this.backgroundImages[0];
  interval: any;
  ngOnInit(): void {
    this.startBackgroundInterval();
  }
  ngOnDestroy(): void {
    this.clearBackgroundInterval();
  }
  changeBackground(index: number) {
    if (index !== this.currentBackgroundIndex) {
      this.animateBackgroundTransition(index);
    }
  }

  private animateBackgroundTransition(newIndex: number) {
    const isDirectionLeftToRight = newIndex > this.currentBackgroundIndex;

    // Apply the enter animation class
    this.currentBackgroundIndex = newIndex;
    this.currentBackground = this.backgroundImages[newIndex];
    this.clearBackgroundInterval(); // Clear the interval to prevent automatic changes during animation

    // After a short delay, apply the exit animation class
    setTimeout(() => {
      // Clear the exit animation class and restart the interval
      this.clearBackgroundInterval();
      this.startBackgroundInterval();
    }, 1000); // Delay for the enter animation duration
  }

  private startBackgroundInterval() {
    this.interval = setInterval(() => {
      const nextIndex =
        (this.currentBackgroundIndex + 1) % this.backgroundImages.length;
      this.changeBackground(nextIndex);
    }, 10000); // Change background every 10 seconds (10000 milliseconds).
  }

  private clearBackgroundInterval() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
