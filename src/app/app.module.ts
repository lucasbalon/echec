import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TournamentsComponent } from './components/tournaments/tournaments.component';
import {authInterceptor} from "./interceptor/auth.interceptor";
import {TableModule} from "primeng/table";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TagModule} from "primeng/tag";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    TournamentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    TableModule,
    BrowserModule,
    BrowserAnimationsModule,
    TagModule
  ],
  providers: [
    { provide : "urlBackEnd", useValue : "http://localhost:8080/api"},
    {provide: HTTP_INTERCEPTORS, useClass: authInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
