import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

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

import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeHeaderComponent } from './components/home-header/home-header.component';

const modules = [
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  HttpClientModule,
];

const materialModules = [MatSidenavModule];
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
];
@NgModule({
  declarations: [...components],
  imports: [...modules, materialModules],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
