import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  galleryTitle: string = 'The Gallery';
  galleryText: string = 'Click and drag to see some of our drinks';
}
