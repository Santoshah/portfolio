import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { MatSliderModule } from '@angular/material/slider';
import {  MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../@shared/shared.module';
import { HomeTopComponent } from './home-top/home-top.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeTopComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatButtonModule
    
  ]
})
export class HomeModule { }
