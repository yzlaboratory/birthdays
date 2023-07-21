import { Component, OnInit } from '@angular/core';
import { Storage } from 'aws-amplify';
import { HeaderComponent } from './header/header.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { HeroLogoComponent } from './hero-logo/hero-logo.component';

@Component({
  selector: 'app',
  standalone: true,
  imports: [HeaderComponent, HeroBannerComponent, HeroLogoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
