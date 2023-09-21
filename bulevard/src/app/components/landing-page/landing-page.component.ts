import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ScrollService } from 'src/app/service/scroll.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements AfterViewInit {
  heroBackgroundUrl: string = '../assets/oils/abstract.jpg';
  @ViewChild('heroSection', { static: true }) heroSectionRef?: ElementRef;
  @ViewChild('menuSection', { static: true }) menuSectionRef?: ElementRef;
  @ViewChild('gallerySection', { static: true }) gallerySectionRef?: ElementRef;
  @ViewChild('contactSection', { static: true }) contactSectionRef?: ElementRef;

  constructor(private scrollService: ScrollService) {}
  ngAfterViewInit(): void {}

  manualScroll(event: Event) {
    const sections = [
      { id: '/', ref: this.heroSectionRef },
      { id: 'menu', ref: this.menuSectionRef },
      { id: 'gallery', ref: this.gallerySectionRef },
      { id: 'contact', ref: this.contactSectionRef },
    ];

    for (const section of sections) {
      if (this.scrollService.isElementInViewport(section.ref!.nativeElement)) {
        this.scrollService.updateUrlBasedOnManualScroll(section.id);
      }
    }
  }
}
