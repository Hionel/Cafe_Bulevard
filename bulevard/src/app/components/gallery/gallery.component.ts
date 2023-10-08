import { Component, OnInit } from '@angular/core';

import { images } from 'src/app/imageMockup/images';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  galleryTitle: string = 'The Gallery';
  galleryTipText: string = 'Click and drag to see some of our drinks';

  ngOnInit(): void {}
}
