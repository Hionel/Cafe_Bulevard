import { Component } from '@angular/core';
import { images, Iimages } from 'src/app/imageMockup/images';
import { trigger, transition, animate, style } from '@angular/animations';
import { ImageSlideTrackerService } from 'src/app/service/image-slide-tracker.service';
@Component({
  selector: 'app-image-track',
  templateUrl: './image-track.component.html',
  styleUrls: ['./image-track.component.scss'],
  animations: [
    trigger('animateObjectPosition', [
      transition(':enter', [
        style({
          objectPosition: '100% center',
          animationFillMode: 'forwards',
        }),
        animate('1200ms', style({ objectPosition: '{{objectPosition}}' })),
      ]),
    ]),
  ],
})
export class ImageTrackComponent {
  imageTrackPercentage!: string;
  transform!: string;
  imagesList: Iimages[] = images;
  constructor(public trackSlider: ImageSlideTrackerService) {}
  ngOnInit(): void {
    this.imageTrackPercentage = '100';
  }
  mouseDown(event: MouseEvent) {
    this.trackSlider.mouseDown(event);
  }
  mouseMove(event: MouseEvent) {
    this.trackSlider.mouseMove(event);
    this.imageTrackPercentage = this.trackSlider.imageTrackPercentage;
    this.transform = this.trackSlider.transform;
  }

  mouseUp() {
    this.trackSlider.mouseUp();
  }
}
