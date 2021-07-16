import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
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
import { CursoListComponent } from './pages/curso-list/curso-list.component';
import {CardModule} from 'primeng/card';
import {ToolbarModule} from 'primeng/toolbar'
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button'
import{DialogModule} from 'primeng/dialog'
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {CalendarModule} from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import {FormsModule as ngFormsModule} from '@angular/forms';
import {ConfirmPopupModule} from 'primeng/confirmpopup';

registerLocaleData(localePt);

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
    LogoutComponent,
    CursoListComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    HttpClientModule,
    ToastModule,
    BrowserAnimationsModule,
    CardModule,
    ToolbarModule,
    TableModule,
    ButtonModule,
    DialogModule,
    ConfirmDialogModule,
    CalendarModule,
    DropdownModule,
    InputNumberModule,
    FormsModule,
    ngFormsModule,
    ConfirmPopupModule,
    ToastModule




  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'},LoggedGuard,RestApiService,HttpClient,AbstractService,ToastModule,ConfirmationService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
