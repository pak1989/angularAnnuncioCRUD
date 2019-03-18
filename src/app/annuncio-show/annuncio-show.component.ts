import { Component, OnInit } from '@angular/core';
import { AnnuncioService } from '../service/annuncio.service';
import { Annuncio } from '../models/annuncio';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-annuncio-show',
  templateUrl: './annuncio-show.component.html',
  styleUrls: ['./annuncio-show.component.scss']
})
export class AnnuncioShowComponent implements OnInit {

  private annuncio: Annuncio;

  constructor(private router:Router, 
    private route: ActivatedRoute, 
    private data: AnnuncioService) { }

  ngOnInit(): void {
    this.data.getAnnuncioSingolo(this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.annuncio = data;
    })
  }
  
  deleteAnnuncio(){
    this.data.deleteAnnuncio(this.route.snapshot.paramMap.get('id'))
    .subscribe(res => console.log('Annuncio Inserito'), (err) => console.log(err));
    this.router.navigate(['/annunci']);
  }
}
