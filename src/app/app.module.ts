import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

import { AnnunciComponent } from './components/annuncio/annunci/annunci.component';
import { AnnuncioShowComponent } from './components/annuncio/annuncio-show/annuncio-show.component';
import { AnnuncioNewComponent } from './components/annuncio/annuncio-new/annuncio-new.component';
import { AnnuncioEditComponent } from './components/annuncio/annuncio-edit/annuncio-edit.component';
import { AcquistiComponent } from './components/annuncio/acquisti/acquisti.component';

import { LoginComponent } from './login/login.component';
import { AlertComponent } from './components/alert/alert.component';
import { RegisterComponent } from './register/register.component';
import { AnnunciSearchComponent } from './components/annuncio/annunci-search/annunci-search.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnunciComponent,
    AnnuncioShowComponent,
    AnnuncioNewComponent,
    AnnuncioEditComponent,
    NavbarComponent,
    HomeComponent,
    AcquistiComponent,
    LoginComponent,
    AlertComponent,
    RegisterComponent,
    AnnunciSearchComponent,
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
