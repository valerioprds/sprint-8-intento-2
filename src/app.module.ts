import { HomeComponent } from './app/home/home.component';
import { AppRoutingModule } from './app/app-routing.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { JwtInterceptor } from './app/_helpers/jwt.interceptor';
import { ErrorInterceptor } from './app/_helpers/error.interceptor';
import { AppComponent } from './app.component';

import { RegisterComponent } from './app/account/register.component';
import { LoginComponent } from './app/account/login.component';
import { fakeBackendProvider } from './app/_helpers';
import { StarshipComponent } from './app/starship/starships/starships.component';
import { FichaComponent } from './app/ficha/ficha.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PilotsComponent } from './app/ficha/pilots/pilots.component';
import { HeaderComponent } from './app/header/header.component';
import { FilmsComponent } from './app/ficha/films/films.component';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    StarshipComponent,
    FichaComponent,
    PilotsComponent,
    HeaderComponent,
    FilmsComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
