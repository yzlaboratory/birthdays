import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { Amplify } from 'aws-amplify';
import { AppComponent } from './app.component';
import awsconfig from '../aws-exports';
import { BirthdaycardComponent } from './gallery/ui/birthdaycard/birthdaycard.component';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, BirthdaycardComponent, AmplifyAuthenticatorModule],
})
export class AppModule {}
