import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './Class/person';

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {

  constructor(private http: HttpClient) { }

  _url= 'http://localhost:3000/Person';

  postData(person: Person): Observable<Person>{
    return this.http.post<Person>(this._url, person)
  }
}
