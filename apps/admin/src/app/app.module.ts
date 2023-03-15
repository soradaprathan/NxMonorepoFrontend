import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes';
import { DashboardComponent } from './pages/dashboard/dashboard.component';



@NgModule({
  declarations: [AppComponent, DashboardComponent],
    imports: [BrowserModule, RouterModule.forRoot([], {initialNavigation: 'enabledNonBlocking'})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
