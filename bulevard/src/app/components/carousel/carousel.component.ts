import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import * as Hammer from 'hammerjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewInit {
  @Input() carouselData!: any[];
  @Input() showThumbnails: boolean | undefined;
  @Input() showControls: boolean | undefined;
  @Input() autoPlay: boolean | undefined;
  @Input() autoPlayInterval: number | undefined;
  @ViewChild('carouselContainer') carouselContainer: ElementRef | undefined;
  @ViewChildren('carouselItem') carouselItemsQueryList:
    | QueryList<ElementRef>
    | undefined;

  carouselItemsArray: HTMLElement[] | undefined;
  currentIndex: number = 0;

  constructor() {}

  ngAfterViewInit(): void {
    this.carouselItemsArray = this.carouselItemsQueryList!.map(
      (item) => item.nativeElement
    );

    const hammer = new Hammer.Manager(this.carouselContainer?.nativeElement);
    hammer.add(
      new Hammer.Swipe({
        direction: Hammer.DIRECTION_HORIZONTAL,
        threshold: 10,
      })
    );
    hammer.on('swipeleft', () => this.slideCarousel('right'));
    hammer.on('swiperight', () => this.slideCarousel('left'));

    if (this.autoPlay) {
      setInterval(() => {
        this.autoPlayFunction();
      }, this.autoPlayInterval);
    }
  }

  slideCarousel = (direction: string) => {
    if (direction === 'left') {
      this.currentIndex =
        (this.currentIndex - 1 + this.carouselData.length) %
        this.carouselData.length;
    } else if (direction === 'right') {
      this.currentIndex = (this.currentIndex + 1) % this.carouselData.length;
    }
    console.log(this.currentIndex);
    this.updateSlidesPositions(this.currentIndex);
  };

  changeTab = (index: number) => {
    this.currentIndex = index;
    this.updateSlidesPositions(index);
  };

  isHidden(index: number): boolean {
    const numSlides = this.carouselData.length;
    const distance = Math.min(
      Math.abs(index - this.currentIndex),
      Math.abs(index + numSlides - this.currentIndex),
      Math.abs(index - numSlides - this.currentIndex)
    );
    return distance > 1;
  }

  updateSlidesPositions = (newCurrentIndex: number) => {
    this.carouselItemsArray?.forEach((element, index) => {
      let newPosition = (index - newCurrentIndex) * 100;

      if (newPosition < -100 * (this.carouselData.length / 2)) {
        newPosition += this.carouselData.length * 100;
      } else if (newPosition > 100 * (this.carouselData.length / 2)) {
        newPosition -= this.carouselData.length * 100;
      }

      element.style.transform = `translateX(${newPosition}%)`;
    });
  };

  autoPlayFunction = () => {
    this.currentIndex++;
    if (this.currentIndex === this.carouselData.length) {
      this.currentIndex = 0;
    }
    this.updateSlidesPositions(this.currentIndex);
  };
}
