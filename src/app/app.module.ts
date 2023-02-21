import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NgToastModule } from 'ng-angular-popup';

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
