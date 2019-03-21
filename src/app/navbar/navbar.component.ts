import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AnnuncioService } from '../service/annuncio.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private searchAnnuncioForm: FormGroup;
  
  constructor(private data: AnnuncioService,
    private router: Router,
    private fb: FormBuilder) { }
  
  ngOnInit() {
    this.searchAnnuncioForm = this.fb.group({
      testoAnnuncio:["", [Validators.required, Validators.minLength(3)]],
    })
  }
  
  search(){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(['/annunci/search', {testoAnnuncio: this.searchAnnuncioForm.value.testoAnnuncio}]))
    .then(()=> this.searchAnnuncioForm.setValue({testoAnnuncio:""}));
  }
}
