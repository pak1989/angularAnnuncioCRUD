import { Component, OnInit, Input } from '@angular/core';
import { Annuncio } from 'src/app/models/annuncio';

@Component({
  selector: 'app-annunci-search',
  templateUrl: './annunci-search.component.html',
  styleUrls: ['./annunci-search.component.scss']
})
export class AnnunciSearchComponent implements OnInit {

  @Input() annunci: Annuncio[]

  constructor() { }

  ngOnInit() {
  }

}
