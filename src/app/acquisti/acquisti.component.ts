import { Component, OnInit } from '@angular/core';
import { AnnuncioService } from '../service/annuncio.service';

@Component({
  selector: 'app-acquisti',
  templateUrl: './acquisti.component.html',
  styleUrls: ['./acquisti.component.scss']
})
export class AcquistiComponent implements OnInit {

  private acquisti:any;

  constructor(private data: AnnuncioService) { }

  ngOnInit() {
    this.data.getAcquisti().subscribe(data => {
      this.acquisti = data;
    })
  }

}
