import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTrackComponent } from './image-track.component';

describe('ImageTrackComponent', () => {
  let component: ImageTrackComponent;
  let fixture: ComponentFixture<ImageTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageTrackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
