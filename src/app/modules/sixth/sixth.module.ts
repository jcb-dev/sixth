import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './sixth-routing.module';
import { BannerComponent } from './components/banner/banner.component';
import { SliderComponent } from './components/slider/slider.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { BioComponent } from './components/bio/bio.component';
import { PoemsComponent } from './pages/poems/poems.component';

@NgModule({
  declarations: [HomeComponent, BannerComponent, SliderComponent, BioComponent, PoemsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class SixthModule { }
