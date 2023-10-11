import { Component, OnInit } from '@angular/core';

import { images } from 'src/app/imageMockup/images';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  galleryTitle: string = 'The Gallery';
  gallerImages = [...images];

  ngOnInit(): void {
    // console.log('images inside gallery component log:');
    // console.log(this.images);
  }
}
