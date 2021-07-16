import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoggedGuard } from './guards/ LoggedGuard';
import { CursoListComponent } from './pages/curso-list/curso-list.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';

const routes: Routes = [
  {
    canActivate : [LoggedGuard],
    path: 'home',
    component: HomeComponent,

  },

  {
    canActivate : [LoggedGuard],
    path: 'cursos',
    pathMatch: 'full',
    component: CursoListComponent,

  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'logout',
    pathMatch: 'full',
    component: LogoutComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

const config: ExtraOptions = {
  useHash: true,
  onSameUrlNavigation: 'reload',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
