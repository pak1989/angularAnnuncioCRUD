import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AnnuncioService } from '../service/annuncio.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Annuncio } from '../models/annuncio';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  @Output() annunci: EventEmitter<Annuncio[]> = new EventEmitter();
  searchAnnuncioForm: FormGroup;
  
  constructor(private data: AnnuncioService,
    private router: Router,
    private fb: FormBuilder) { }
  
  ngOnInit() {
    this.searchAnnuncioForm = this.fb.group({
      testoAnnuncio:["", [Validators.required, Validators.minLength(4)]],
    })
  }
  
  search(){
    this.data.searchAnnuncio(this.searchAnnuncioForm.value.testoAnnuncio)
    .subscribe(data => {
      this.annunci.emit(data.sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0));
    })
    this.router.navigate(['/annunci/search']);
  }
}
