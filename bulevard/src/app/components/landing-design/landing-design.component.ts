import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import * as Hammer from 'hammerjs';

@Component({
  selector: 'app-landing-design',
  templateUrl: './landing-design.component.html',
  styleUrls: ['./landing-design.component.scss'],
})
export class LandingDesignComponent implements AfterViewInit {
  @Output() emitLandingDesignPageState = new EventEmitter<boolean>();
  @ViewChild('landingDesignPage') landingDesignPage?: ElementRef;
  constructor() {}
  ngAfterViewInit(): void {
    const hammer = new Hammer.Manager(this.landingDesignPage?.nativeElement);
    hammer.add(
      new Hammer.Swipe({
        direction: Hammer.DIRECTION_VERTICAL,
        threshold: 10,
      })
    );
    hammer.on('swipeup', () => {
      this.emitLandingDesignPageState.emit(false);
    });
  }
  landingPageBackgroundUrl: string = '../assets/oils/abstract.jpg';
  landingPageLogoUrl: string = '../assets/bar/landing_logo.png';
  navigateHome = () => {
    this.emitLandingDesignPageState.emit(false);
  };
}
