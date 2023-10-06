import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from 'src/app/service/scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('heroSection', { static: true }) heroSectionRef?: ElementRef;
  @ViewChild('menuSection', { static: true }) menuSectionRef?: ElementRef;
  @ViewChild('gallerySection', { static: true }) gallerySectionRef?: ElementRef;

  constructor(private scrollService: ScrollService, private router: Router) {
    const section = this.router.url.split('/');
    const lastPart = section[section.length - 1];
    this.scrollService.navigateHome(lastPart);
  }
  manualScroll(event: Event) {
    const sections = [
      { id: '/', ref: this.heroSectionRef },
      { id: 'menu', ref: this.menuSectionRef },
      { id: 'gallery', ref: this.gallerySectionRef },
    ];

    for (const section of sections) {
      if (this.scrollService.isElementInViewport(section.ref!.nativeElement)) {
        this.scrollService.updateUrlBasedOnManualScroll(section.id);
      }
    }
  }
}
