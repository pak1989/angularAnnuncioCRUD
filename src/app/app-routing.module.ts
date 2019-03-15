import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AnnunciComponent } from './annunci/annunci.component';
import { AnnuncioShowComponent } from './annuncio-show/annuncio-show.component';
import { AnnuncioNewComponent } from './annuncio-new/annuncio-new.component';
import { AnnuncioEditComponent } from './annuncio-edit/annuncio-edit.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'annunci', component: AnnunciComponent, data: {title: 'Lista Annunci'}},
  {path: 'annuncio/:id', component: AnnuncioShowComponent, data: {title: 'Dettagli Annuncio'}},
  {path: 'nuovo-annuncio', component: AnnuncioNewComponent, data: {title: 'Aggiungi Annuncio'}},
  {path: 'edita-annuncio/:id', component: AnnuncioEditComponent, data: {title: 'Modifica Annuncio'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
