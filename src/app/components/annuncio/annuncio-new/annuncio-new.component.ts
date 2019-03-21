import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { AnnuncioService } from 'src/app/service/annuncio.service';

@Component({
  selector: 'app-annuncio-new',
  templateUrl: './annuncio-new.component.html',
  styleUrls: ['./annuncio-new.component.scss']
})
export class AnnuncioNewComponent implements OnInit {
  
  insertAnnuncioForm: FormGroup;
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
    this.insertAnnuncioForm = this.fb.group({
      utente:{"id":1},
      aperto: true,
      prezzo:["", Validators.required],
      testoAnnuncio:["", [Validators.required, Validators.minLength(4)]],
      category: this.fb.array([])
    })
  }
  
  save(){
    this.data.insertAnnuncio(this.insertAnnuncioForm.value)
    .subscribe(res => console.log('Annuncio Inserito'), (err) => console.log(err));
    this.router.navigateByUrl('/annunci', {skipLocationChange: true})
    .then(()=>this.router.navigate(['/annunci']));
  } 
  
  onChange(category: Object, isChecked: boolean) {
    const categoryFormArray = <FormArray>this.insertAnnuncioForm.controls.category;

    if (isChecked) {
      while (categoryFormArray.length > 0) {
        categoryFormArray.removeAt(0);
      }
      categoryFormArray.push(new FormControl(category));
    } else {
      let index = categoryFormArray.controls.findIndex(x => x.value == category)
      categoryFormArray.removeAt(index);
    }
  }
}
