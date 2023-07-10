import { AppRoutingModule } from './app/app-routing.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './app/home/home.component';

import { RegisterComponent } from './app/account/register.component';
import { LoginComponent } from './app/account/login.component';
@NgModule({
    imports: [BrowserModule, AppRoutingModule],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
