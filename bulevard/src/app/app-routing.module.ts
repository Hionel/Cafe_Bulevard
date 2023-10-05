import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeroComponent } from './components/hero/hero.component';
import { LandingDesignComponent } from './components/landing-design/landing-design.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      {
        path: '',
        component: LandingDesignComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
        children: [
          {
            path: '',
            component: HeroComponent,
          },
          {
            path: 'gallery',
            component: GalleryComponent,
          },
          {
            path: 'menu',
            component: MenuComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
