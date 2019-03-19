import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Annuncio } from 'src/app/models/annuncio';
import { AnnuncioService } from 'src/app/service/annuncio.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-annuncio-show',
  templateUrl: './annuncio-show.component.html',
  styleUrls: ['./annuncio-show.component.scss']
})
export class AnnuncioShowComponent implements OnInit, OnDestroy {

  private annuncio: Annuncio;
  private currentAnnuncioSubscription: Subscription;

  constructor(private router:Router, 
    private route: ActivatedRoute, 
    private data: AnnuncioService
    ) { }

  ngOnInit(): void {
    this.currentAnnuncioSubscription = this.data.getAnnuncioSingolo(this.route.snapshot.paramMap.get('id'))
    .subscribe(data => { this.annuncio = data; })
  }
  
  ngOnDestroy() {
    this.currentAnnuncioSubscription.unsubscribe();
  }

  compra(){
    this.data.acquistaAnnuncio(this.route.snapshot.paramMap.get('id'))
    .subscribe(res => console.log(res), (err) => console.log(err));
    this.router.navigate(['/annunci']);
  }
}
