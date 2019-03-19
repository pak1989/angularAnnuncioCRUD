import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Annuncio } from '../models/annuncio';
import { Acquisto } from '../models/acquisto';

const linkAnnuncio: string = 'http://localhost:8080/restebay/rest/annuncio/';
const linkAcquisto: string = 'http://localhost:8080/restebay/rest/acquisto/';
const searchQuery: string = 'search?testoAnnuncio=';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AnnuncioService {

  constructor(private http: HttpClient) { }

  getAnnunci(): Observable<Annuncio[]> {
    return this.http.get<Annuncio[]>(linkAnnuncio);
  }

  getAnnuncioSingolo(id): Observable<Annuncio> {
    return this.http.get<Annuncio>(linkAnnuncio + id);
  }

  insertAnnuncio(annuncio): Observable<Annuncio> {
    return this.http.post<Annuncio>(linkAnnuncio, annuncio, httpOptions );
  }

  updateAnnuncio(annuncio): Observable<Annuncio> {
    return this.http.put<Annuncio>(linkAnnuncio, annuncio, httpOptions );
  }
  
  
  searchAnnuncio(testoAnnuncio): Observable<Annuncio[]> {
    return this.http.get<Annuncio[]>(linkAnnuncio + searchQuery + testoAnnuncio);
  }
  
  getAcquisti(): Observable<Acquisto[]> {
    return this.http.get<Acquisto[]>(linkAcquisto);
  }

  acquistaAnnuncio(id): Observable<Acquisto> {
    return this.http.get<Annuncio>( linkAcquisto + id, httpOptions )
  }

}
