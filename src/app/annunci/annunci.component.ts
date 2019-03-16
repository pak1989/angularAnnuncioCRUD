import { Component, OnInit } from '@angular/core';
import { AnnuncioService } from '../service/annuncio.service';

@Component({
  selector: 'app-annunci',
  templateUrl: './annunci.component.html',
  styleUrls: ['./annunci.component.scss']
})
export class AnnunciComponent implements OnInit {

  private annunci:any;

  constructor(private data: AnnuncioService) { }

  ngOnInit(): void {
    this.data.getAnnunci().subscribe(data => {
      this.annunci = data;
    })
  }

}
