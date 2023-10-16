import {
  AfterViewInit,
  Component,
  ElementRef,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements AfterViewInit {
  isNavigationOpen: boolean = false;
  @Output() sectionToScrollTo?: string;
  @Output() landingDesignPageVisibility?: boolean;
  @ViewChild('landingDesignContainer') landingDesignContainer?: ElementRef;
  landingDesignPage?: HTMLElement;

  ngAfterViewInit(): void {
    this.landingDesignPage = this.landingDesignContainer?.nativeElement;
  }

  receiveLandingState = (state: boolean) => {
    this.landingDesignPageVisibility = state;
    this.landingDesignPageVisibility
      ? this.openLandingDesignPage()
      : this.closeLandingDesignPage();
  };
  receiveSection = (section: string) => {
    this.sectionToScrollTo = section;
  };
  onNavToggle = () => {
    this.isNavigationOpen = !this.isNavigationOpen;
  };

  closeLandingDesignPage = () => {
    this.landingDesignPage?.classList.remove('openLanding');
    this.landingDesignPage?.classList.add('closeLanding');
    setTimeout(() => {
      this.landingDesignPage?.classList.add('hidden');
    }, 500);
  };
  openLandingDesignPage = () => {
    this.landingDesignPage?.classList.remove('hidden');
    this.landingDesignPage?.classList.remove('closeLanding');
    this.landingDesignPage?.classList.add('openLanding');
    setTimeout(() => {
      this.receiveSection('/');
      this.onNavToggle();
    }, 500);
  };
}
