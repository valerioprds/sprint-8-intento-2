import { AppRoutingModule } from './app/app-routing.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { JwtInterceptor } from './app/_helpers/jwt.interceptor';
import { ErrorInterceptor } from './app/_helpers/error.interceptor';
import { AppComponent } from './app.component';
import { HomeComponent } from './app/home/home.component';

import { RegisterComponent } from './app/account/register.component';
import { LoginComponent } from './app/account/login.component';
import { fakeBackendProvider } from './app/_helpers';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
],
  bootstrap: [AppComponent],
})
export class AppModule {}