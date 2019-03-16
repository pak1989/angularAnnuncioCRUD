import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnunciComponent } from './annunci/annunci.component';
import { AnnuncioShowComponent } from './annuncio-show/annuncio-show.component';
import { AnnuncioNewComponent } from './annuncio-new/annuncio-new.component';
import { AnnuncioEditComponent } from './annuncio-edit/annuncio-edit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnunciComponent,
    AnnuncioShowComponent,
    AnnuncioNewComponent,
    AnnuncioEditComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
