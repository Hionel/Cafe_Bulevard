import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ScrollService } from 'src/app/service/scroll.service';

interface ISection {
  id: string;
  ref: HTMLElement;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit, OnChanges {
  @ViewChild('heroSection', { static: true }) heroSectionRef?: ElementRef;
  @ViewChild('menuSection', { static: true }) menuSectionRef?: ElementRef;
  @ViewChild('gallerySection', { static: true })
  gallerySectionRef?: ElementRef;

  @Input() inputScrollToSection?: string;

  private sections: ISection[] | undefined;

  constructor(private scrollService: ScrollService) {}
  ngAfterViewInit(): void {
    this.scrollService.scrollToSection(this.heroSectionRef?.nativeElement);
    this.sections = [
      { id: '/', ref: this.heroSectionRef?.nativeElement },
      { id: 'menu', ref: this.menuSectionRef?.nativeElement },
      { id: 'gallery', ref: this.gallerySectionRef?.nativeElement },
    ];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['inputScrollToSection'] && this.sections) {
      const newValue = changes['inputScrollToSection'].currentValue;
      for (const section of this.sections!) {
        if (section.id === newValue)
          this.scrollService.scrollToSection(section.ref);
      }
    }
  }

  manualScroll(event: Event) {
    for (const section of this.sections!) {
      if (this.scrollService.isElementInViewport(section.ref)) {
        this.scrollService.updateUrlBasedOnManualScroll(section.id);
      }
    }
  }
}
