import { Component, OnInit } from '@angular/core';
import { AnnuncioService } from 'src/app/service/annuncio.service';
import { Subscription } from 'rxjs';
import { Acquisto } from 'src/app/models/acquisto';

@Component({
  selector: 'app-acquisti',
  templateUrl: './acquisti.component.html',
  styleUrls: ['./acquisti.component.scss']
})
export class AcquistiComponent implements OnInit {

  private acquisti:Acquisto[];
  private currentAcquistiSubscription: Subscription;

  constructor(private data: AnnuncioService) {
  }
  
  ngOnInit() {
    this.currentAcquistiSubscription = this.data.getAcquisti().subscribe(data => {
      this.acquisti = data;
    })
  }

  ngOnDestroy() {
    this.currentAcquistiSubscription.unsubscribe();
  }

}
