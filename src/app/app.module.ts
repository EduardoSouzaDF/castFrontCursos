import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './pages/layout/sidebar/sidebar.component';
import { LogoutModalComponent } from './pages/layout/logout-modal/logout-modal.component';
import { ScrollToTopComponent } from './pages/layout/scroll-to-top/scroll-to-top.component';
import { FooterComponent } from './pages/layout/footer/footer.component';
import { TopBarComponent } from './pages/layout/top-bar/top-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';


import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {PasswordModule} from 'primeng/password';
import { LoggedGuard } from './guards/ LoggedGuard';
import { RestApiService } from './service/rest-api.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { AbstractService } from './service/abstract.service';
import { HttpClientModule } from '@angular/common/http';
import {ToastModule} from 'primeng/toast';
import {ConfirmationService, MessageService} from 'primeng/api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LogoutComponent } from './pages/logout/logout.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LogoutModalComponent,
    ScrollToTopComponent,
    FooterComponent,
    TopBarComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    HttpClientModule,
    ToastModule,
    BrowserAnimationsModule


  ],
  providers: [LoggedGuard,RestApiService,HttpClient,AbstractService,ToastModule,ConfirmationService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
