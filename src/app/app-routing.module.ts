import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AnnunciComponent } from './components/annuncio/annunci/annunci.component';
import { AnnuncioShowComponent } from './components/annuncio/annuncio-show/annuncio-show.component';
import { AnnuncioNewComponent } from './components/annuncio/annuncio-new/annuncio-new.component';
import { AnnuncioEditComponent } from './components/annuncio/annuncio-edit/annuncio-edit.component';
import { AcquistiComponent } from './components/annuncio/acquisti/acquisti.component';
import { AuthGuard } from './_guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard] },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'annunci', component: AnnunciComponent, data: {title: 'Lista Annunci'}, canActivate: [AuthGuard] },
  {path: 'annuncio/:id', component: AnnuncioShowComponent, data: {title: 'Dettagli Annuncio'}, canActivate: [AuthGuard] },
  {path: 'nuovo-annuncio', component: AnnuncioNewComponent, data: {title: 'Aggiungi Annuncio'}, canActivate: [AuthGuard] },
  {path: 'edita-annuncio/:id', component: AnnuncioEditComponent, data: {title: 'Modifica Annuncio'}, canActivate: [AuthGuard] },
  {path: 'acquisti', component: AcquistiComponent, data: {title: 'Lista Acquisti'}, canActivate: [AuthGuard] },
  {path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
