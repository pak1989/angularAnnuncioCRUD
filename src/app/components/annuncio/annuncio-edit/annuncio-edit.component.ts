import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { AnnuncioService } from 'src/app/service/annuncio.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-annuncio-edit',
  templateUrl: './annuncio-edit.component.html',
  styleUrls: ['./annuncio-edit.component.scss']
})
export class AnnuncioEditComponent implements OnInit, OnDestroy {
  
  editAnnuncioForm: FormGroup;
  arrayCategory: any  = [
    { "id": 1, "nome": "Elettronica" },
    { "id": 2, "nome": "Giardinaggio"},
    { "id": 3, "nome": "Informatica"}
  ];
  private currentAnnuncioSubscription: Subscription;
  
  constructor(private router:Router, 
              private route:ActivatedRoute, 
              private data: AnnuncioService, 
              private fb:FormBuilder) {
              }
              
              ngOnInit() {
                this.currentAnnuncioSubscription = this.data.getAnnuncioSingolo(this.route.snapshot.paramMap.get('id'))
                .subscribe(data => {
                  const categoryArrControl = new FormControl();
                  this.editAnnuncioForm = this.fb.group({
                    id: data.id,
                    aperto: data.aperto,
                    testoAnnuncio: data.testoAnnuncio,
                    prezzo: data.prezzo,
                    category: this.fb.array([categoryArrControl]),
                    utente: data.utente
                  })
                  this.editAnnuncioForm.patchValue({ 
                    category: categoryArrControl.setValue(data.category[0])
                  });
                });
              }

  ngOnDestroy() {
    this.currentAnnuncioSubscription.unsubscribe();
  }
  
  save(){
    this.data.updateAnnuncio(this.editAnnuncioForm.value)
    .subscribe(res => console.log('Annuncio Modificato'), (err) => console.log(err));
    this.router.navigateByUrl('/RefrshComponent', {skipLocationChange: true}).then(()=>
    this.router.navigate(['/annunci']));
  } 
  
  onChange(category: Object, isChecked: boolean) {
    const categoryFormArray = <FormArray>this.editAnnuncioForm.controls.category;

    if (isChecked) {
      while (categoryFormArray.length > 0) {
        categoryFormArray.removeAt(0);
      };
      categoryFormArray.push(new FormControl(category));
    } else {
      let index = categoryFormArray.controls.findIndex(x => x.value == category)
      categoryFormArray.removeAt(index);
    }
  }
}
