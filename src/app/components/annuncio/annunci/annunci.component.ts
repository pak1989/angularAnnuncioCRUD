import { Component, OnInit } from '@angular/core';
import { AnnuncioService } from 'src/app/service/annuncio.service';
import { Subscription } from 'rxjs';
import { Annuncio } from 'src/app/models/annuncio';

@Component({
  selector: 'app-annunci',
  templateUrl: './annunci.component.html',
  styleUrls: ['./annunci.component.scss']
})
export class AnnunciComponent implements OnInit {

  private annunci:Annuncio[];
  private currentAnnunciSubscription: Subscription;

  constructor(private data: AnnuncioService) {
  }
  
  ngOnInit(): void {
    this.currentAnnunciSubscription = this.data.getAnnunci().subscribe(data => {
      this.annunci = data;
    })
  }

  ngOnDestroy() {
    this.currentAnnunciSubscription.unsubscribe();
  }
}
