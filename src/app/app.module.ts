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



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LogoutModalComponent,
    ScrollToTopComponent,
    FooterComponent,
    TopBarComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
