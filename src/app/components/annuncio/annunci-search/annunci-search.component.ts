import { Component, OnInit, Input } from '@angular/core';
import { Annuncio } from 'src/app/models/annuncio';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AnnuncioService } from 'src/app/service/annuncio.service';

@Component({
  selector: 'app-annunci-search',
  templateUrl: './annunci-search.component.html',
  styleUrls: ['./annunci-search.component.scss']
})
export class AnnunciSearchComponent implements OnInit {
  
  private annunci: any;
  private currentAnnunciSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private data: AnnuncioService) {}

  ngOnInit() {
    this.currentAnnunciSubscription = this.data.searchAnnuncio(this.route.snapshot.paramMap.get('testoAnnuncio')).subscribe(data => {
      this.annunci = data.sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
    })
  }

  ngOnDestroy() {
    this.currentAnnunciSubscription.unsubscribe();
  }

}
