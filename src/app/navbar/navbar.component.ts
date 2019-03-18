import { Component, OnInit } from '@angular/core';
import { AnnuncioService } from '../service/annuncio.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  private annunci:any;
  
  constructor(private data: AnnuncioService) { }
  
  ngOnInit() {
  }
  
  searchByTestoAnnuncio(testoAnnuncio){
    this.data.searchAnnuncio(testoAnnuncio).subscribe(data => {
      this.annunci = data;
      console.log(this.annunci)
    })
  }

  testoToSearch = '';
  
  onSubmit(event: any){
    this.testoToSearch += event.target.value;
    console.log(this.testoToSearch)
    this.data.searchAnnuncio(this.testoToSearch).subscribe(data => {
      this.annunci = data;
      console.log(this.annunci)
    })
    this.testoToSearch = '';
  }

  values = '';

  onKey(event: any) { // without type info
    this.values += event.target.value + ' | ';
    console.log(this.values)
  }

}
