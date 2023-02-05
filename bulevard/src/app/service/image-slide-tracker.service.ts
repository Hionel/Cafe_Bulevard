import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageSlideTrackerService {
  constructor() {}
  trackMouseAt: number = 0;
  trackPrevPercentage: string = '0';
  trackNextPercentage!: number;
  trackPercentage!: number;
  imageTrackPercentage!: string;
  transform!: string;
  mouseDown(e: MouseEvent) {
    return (this.trackMouseAt = e.clientX);
  }

  mouseMove(e: MouseEvent) {
    if (this.trackMouseAt === 0) {
      return;
    }
    const mouseDelta = this.trackMouseAt - e.clientX;
    const maxDelta = window.innerWidth / 2;
    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained =
      parseFloat(this.trackPrevPercentage) - percentage;
    this.trackNextPercentage = Math.max(
      Math.min(nextPercentageUnconstrained, 0),
      -100
    );
    this.trackPercentage = this.trackNextPercentage;
    this.imageTrackPercentage = String(
      100 + Math.max(Math.min(this.trackNextPercentage, 0), -100)
    );
    this.transform = `translate(${this.trackNextPercentage}%, -50%)`;
  }

  mouseUp() {
    this.trackMouseAt = 0;
    this.trackPrevPercentage = String(this.trackPercentage);
  }
}
