import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ImageTrackComponent } from './components/image-track/image-track.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeroComponent } from './components/hero/hero.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MenuComponent } from './components/menu/menu.component';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/home/home.component';
import { LandingDesignComponent } from './components/landing-design/landing-design.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { CarouselComponent } from './components/carousel/carousel.component';

import { GALLERY_CONFIG, GalleryConfig, GalleryModule } from 'ng-gallery';

const modules = [
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  HttpClientModule,
  FormsModule,
  GalleryModule,
];

const materialModules = [MatSidenavModule, MatDialogModule];
const components = [
  AppComponent,
  LandingPageComponent,
  LandingDesignComponent,
  ImageTrackComponent,
  NavigationComponent,
  HeroComponent,
  GalleryComponent,
  MenuComponent,
  CategoryComponent,
  HomeComponent,
  HomeHeaderComponent,
  CarouselComponent,
];
@NgModule({
  declarations: [...components],
  imports: [...modules, materialModules],
  providers: [
    {
      provide: GALLERY_CONFIG,
      useValue: {
        autoHeight: true,
        imageSize: 'cover',
      } as GalleryConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
