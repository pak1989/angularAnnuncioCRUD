import { Component, OnInit } from '@angular/core';
import { AnnuncioService } from '../service/annuncio.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  private annunci:any;
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
    this.data.searchAnnuncio(this.searchAnnuncioForm.value)
    .subscribe(res => console.log('Ricerca'), (err) => console.log(err));
    this.router.navigate(['/annunci/result']);
  }
  
}
