import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { AnnuncioService } from '../service/annuncio.service';

@Component({
  selector: 'app-annuncio-edit',
  templateUrl: './annuncio-edit.component.html',
  styleUrls: ['./annuncio-edit.component.scss']
})
export class AnnuncioEditComponent implements OnInit {
  
  editAnnuncioForm: FormGroup;
  arrayCategory: any  = [
    { "id": 1, "nome": "Elettronica" },
    { "id": 2, "nome": "Giardinaggio"},
    { "id": 3, "nome": "Informatica"}
  ];
  
  constructor(private router:Router, 
    private route:ActivatedRoute, 
    private data: AnnuncioService, 
    private fb:FormBuilder) { }
  
  ngOnInit() {
    
    this.editAnnuncioForm = this.fb.group({
      id: null,
      aperto: null,
      testoAnnuncio:[null, [Validators.required, Validators.minLength(4)]],
      prezzo: [null, Validators.required],
      category: this.fb.array([]),
      utente: null,
    })
    setTimeout(() => {
      this.data.getAnnuncioSingolo(this.route.snapshot.paramMap.get('id')).subscribe(data => {
        this.editAnnuncioForm.patchValue({
          id: data.id,
          aperto: data.aperto,
          testoAnnuncio: data.testoAnnuncio,
          prezzo: data.prezzo,
          category: data.category,
          utente: data.utente
        })
      })
    });
  }
  
  save(){
    this.data.updateAnnuncio(this.editAnnuncioForm.value)
    .subscribe(res => console.log('Annuncio Modificato'), (err) => console.log(err));
    this.router.navigate(['/annunci']);
  } 
  
  onChange(category: Object, isChecked: boolean) {
    const categoryFormArray = <FormArray>this.editAnnuncioForm.controls.category;
    
    if (isChecked) {
      categoryFormArray.push(new FormControl(category));
    } else {
      let index = categoryFormArray.controls.findIndex(x => x.value == category)
      categoryFormArray.removeAt(index);
    }
  }
}
