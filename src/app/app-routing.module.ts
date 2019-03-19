import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AnnunciComponent } from './components/annuncio/annunci/annunci.component';
import { AnnuncioShowComponent } from './components/annuncio/annuncio-show/annuncio-show.component';
import { AnnuncioNewComponent } from './components/annuncio/annuncio-new/annuncio-new.component';
import { AnnuncioEditComponent } from './components/annuncio/annuncio-edit/annuncio-edit.component';
import { AcquistiComponent } from './components/annuncio/acquisti/acquisti.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'annunci', component: AnnunciComponent, data: {title: 'Lista Annunci'}},
  {path: 'annuncio/:id', component: AnnuncioShowComponent, data: {title: 'Dettagli Annuncio'}},
  {path: 'nuovo-annuncio', component: AnnuncioNewComponent, data: {title: 'Aggiungi Annuncio'}},
  {path: 'edita-annuncio/:id', component: AnnuncioEditComponent, data: {title: 'Modifica Annuncio'}},
  {path: 'acquisti', component: AcquistiComponent, data: {title: 'Lista Acquisti'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
