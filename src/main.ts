import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { AppComponent } from './app/app.component';

@Component({
  selector: 'my-app',
  standalone: true,
  template: ` <app></app> `,
  imports: [CommonModule, AppComponent],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
