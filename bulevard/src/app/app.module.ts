import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeroComponent } from './components/hero/hero.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MenuComponent } from './components/menu/menu.component';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/home/home.component';
import { LandingDesignComponent } from './components/landing-design/landing-design.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { CarouselComponent } from './components/carousel/carousel.component';

import { SocialsComponent } from './components/navigation/socials/socials.component';
import { LanguageComponent } from './components/navigation/language/language.component';

const modules = [
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  HttpClientModule,
  FormsModule,
];

const materialModules = [
  MatSidenavModule,
  MatDialogModule,
  MatSelectModule,
  MatFormFieldModule,
];
const components = [
  AppComponent,
  LandingPageComponent,
  LandingDesignComponent,
  NavigationComponent,
  HeroComponent,
  GalleryComponent,
  MenuComponent,
  CategoryComponent,
  HomeComponent,
  HomeHeaderComponent,
  CarouselComponent,
  LanguageComponent,
  SocialsComponent,
];
@NgModule({
  declarations: [...components],
  imports: [...modules, materialModules],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
