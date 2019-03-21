import { Component, OnInit, OnDestroy } from '@angular/core';
import { AnnuncioService } from 'src/app/service/annuncio.service';
import { Subscription } from 'rxjs';
import { Annuncio } from 'src/app/models/annuncio';

@Component({
  selector: 'app-annunci',
  templateUrl: './annunci.component.html',
  styleUrls: ['./annunci.component.scss']
})
export class AnnunciComponent implements OnInit, OnDestroy {

  private annunci:Annuncio[];
  private currentAnnunciSubscription: Subscription;

  constructor(private data: AnnuncioService) {
  }
  
  ngOnInit(): void {
    this.currentAnnunciSubscription = this.data.getAnnunci().subscribe(data => {
      this.annunci = data.sort((a,b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
      
    })
  }

  ngOnDestroy() {
    this.currentAnnunciSubscription.unsubscribe();
  }
}
