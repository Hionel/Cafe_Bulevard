import { Component, OnInit } from '@angular/core';

import { images } from 'src/app/imageMockup/images';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  galleryTitle: string = 'The Gallery';
  gallerImages = [...images];
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.languageCode$.subscribe((code) => {
      code === 'en'
        ? (this.galleryTitle = 'The Gallery')
        : (this.galleryTitle = 'Galeria');
    });
  }
}
