import { Component } from '@angular/core';
import { ScrollService } from 'src/app/service/scroll.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent {
  headerTitle: string = 'Cafe Bulevard';
  constructor(private scrollService: ScrollService) {}
  scrollToInfo = () => {
    const infoSection = document.getElementById('/');
    this.scrollService.scrollToSection(infoSection!);
  };
}
