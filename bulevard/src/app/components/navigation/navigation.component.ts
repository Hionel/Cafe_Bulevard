import { Component } from '@angular/core';
import { ScrollService } from 'src/app/service/scroll.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  constructor(private scrollService: ScrollService) {}
  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    else {
      this.scrollService.scrollToSection(section);
    }
  }
}
