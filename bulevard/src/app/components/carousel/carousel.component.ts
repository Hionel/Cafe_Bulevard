import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  GalleryComponent,
  GalleryItem,
  GalleryState,
  ImageItem,
} from 'ng-gallery';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewInit, OnInit {
  @Input() carouselData!: any[];
  images!: GalleryItem[];
  currentIndex: number | undefined;
  @Input() showThumbnails?: boolean;
  @ViewChild(GalleryComponent) gallery!: GalleryComponent;
  constructor() {
    this.currentIndex = 0;
  }

  ngOnInit(): void {
    console.log(this.carouselData);
    this.images = this.carouselData.map(
      (data) => new ImageItem({ src: data.src })
    );
  }
  ngAfterViewInit(): void {
    // this.gallery.load([
    //   this.carouselData.map(
    //     (data) => new ImageItem({ src: data.src })
    //   ) as GalleryItem,
    // ]);
  }
  changeIndex = (galleryState: GalleryState) => {
    this.currentIndex = galleryState.currIndex;
  };
  changeTab = (index: number) => {
    this.gallery.set(index);
  };
}
