import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule }   from '@angular/forms';

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
import { HttpClientModule } from '@angular/common/http';
import { AcquistiComponent } from './acquisti/acquisti.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnunciComponent,
    AnnuncioShowComponent,
    AnnuncioNewComponent,
    AnnuncioEditComponent,
    NavbarComponent,
    HomeComponent,
    AcquistiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
