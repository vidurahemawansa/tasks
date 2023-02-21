import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AuthModule} from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-clqpfsy6d6v8qggc.uk.auth0.com',
      clientId: '7iOePlIvkLSV1aloR4XZRFJm8zArj1ZR',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
