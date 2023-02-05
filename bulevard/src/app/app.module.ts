import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ImageTrackComponent } from './components/image-track/image-track.component';

const modules = [BrowserModule, AppRoutingModule, BrowserAnimationsModule];

@NgModule({
  declarations: [AppComponent, LandingPageComponent, ImageTrackComponent],
  imports: [...modules],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
