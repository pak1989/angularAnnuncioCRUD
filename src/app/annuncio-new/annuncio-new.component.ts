import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';
import { AnnuncioService } from '../service/annuncio.service';
import { Annuncio } from '../models/annuncio';


@Component({
  selector: 'app-annuncio-new',
  templateUrl: './annuncio-new.component.html',
  styleUrls: ['./annuncio-new.component.scss']
})
export class AnnuncioNewComponent implements OnInit {
  
  insertAnnuncioForm: FormGroup;
  annuncio:Annuncio;
  
  constructor(private router:Router, private route:ActivatedRoute, private data: AnnuncioService, private fb:FormBuilder) { }
  
  
  ngOnInit() {
    this.insertAnnuncioForm = this.fb.group({
      utente:{"id":1},
      aperto: true,
      prezzo:["", Validators.required],
      testoAnnuncio:["", [Validators.required, Validators.minLength(4)]],
      category: this.fb.array([{"id":1}])
    })
  }
  
  save(){
    this.annuncio = new Annuncio(true, this.insertAnnuncioForm.value.testoAnnuncio, this.insertAnnuncioForm.value.prezzo, this.insertAnnuncioForm.value.category, this.insertAnnuncioForm.value.utente) 
    console.log(this.annuncio)
    this.data.insertAnnuncio(this.annuncio).subscribe(res => console.log('Annuncio Inserito'), (err) => console.log(err));
    this.router.navigate(['/annunci'])
  } 
  
}
