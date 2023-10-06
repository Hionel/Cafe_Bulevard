import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private isManualScrolling = true;

  constructor(private router: Router) {}
  public navigateHome = (sectionId: string) => {
    this.router.navigate(['/home']).then(() => {
      const section = document.getElementById(sectionId);
      if (!section) return;
      else {
        this.scrollToSection(section);
      }
    });
  };

  public scrollToSection = (section: HTMLElement) => {
    this.isManualScrolling = false;
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });

    setTimeout(() => {
      this.isManualScrolling = true;
    }, 1500);

    return this.router.navigate([`/home/${section.id}`]);
  };

  public updateUrlBasedOnManualScroll(sectionId: string) {
    if (this.isManualScrolling) {
      this.router.navigate([`/home/${sectionId}`]);
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

  //   private scrollToSectionHook() {
  //     this.router.events.subscribe(event => {
  //         if (event instanceof NavigationEnd) {
  //             const tree = this.router.parseUrl(this.router.url);
  //             if (tree.fragment) {
  //                 const element = document.querySelector('#' + tree.fragment);
  //                 if (element) {
  //                     setTimeout(() => {
  //                         element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  //                     }, 500 );
  //                 }
  //             }
  //          }
  //     });
  // }
}
