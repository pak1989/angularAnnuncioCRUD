import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Annuncio } from '../models/annuncio';

const linkAnnuncio = 'http://localhost:8080/restebay/rest/annuncio/';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AnnuncioService {


  /* private linkCategory = 'http://localhost:8080/restebay/rest/annuncio/'; */

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

  updateAnnuncio(id, annuncio): Observable<Annuncio> {
    return this.http.put<Annuncio>(linkAnnuncio + id, annuncio, httpOptions );
  }
  
  deleteAnnuncio(id): Observable<Annuncio> {
    return this.http.delete<Annuncio>(linkAnnuncio + id, httpOptions );
  }
}
