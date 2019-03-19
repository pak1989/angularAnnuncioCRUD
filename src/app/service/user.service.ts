import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

const linkUser: string = 'http://localhost:8080/restebay/rest/utente/';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor( private http: HttpClient ) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(linkUser);
  }

  getById(id: number): Observable<User> {
      return this.http.get<User>(linkUser + id);
  }

  register(user: User): Observable<User> {
      return this.http.post<User>(linkUser, user, httpOptions);
  }

  update(user: User): Observable<User> {
      return this.http.put<User>(linkUser, user, httpOptions);
  }

  delete(id: number) {
      return this.http.delete(linkUser + id);
  }
}
