import { ElementRef, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private isManualScrolling = true;

  constructor(private router: Router) {}

  public scrollToSection = (section: HTMLElement) => {
    this.isManualScrolling = false;
    if (section.id === 'menu') {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
      return this.router.navigate([`${section.id}`]);
    }

    setTimeout(() => {
      this.isManualScrolling = true;
    }, 750);

    return this.router.navigate([`${section.id}`]);
  };

  public updateUrlBasedOnManualScroll(sectionId: string) {
    if (this.isManualScrolling) {
      this.router.navigate([sectionId]);
    }
  }

  public isElementInViewport(el: HTMLElement) {
    const clientRect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    return (
      clientRect.bottom >= 0 &&
      clientRect.top <= windowHeight - (75 * windowHeight) / 100
    );
  }
}
