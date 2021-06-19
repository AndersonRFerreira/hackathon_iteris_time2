import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OlimpiadasModalidadesModel } from './olimpiadas-modalidades-model';


@Injectable({
  providedIn: 'root'
})
export class OlimpiadasModalidaesApiService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://it3-klj-default-rtdb.firebaseio.com/olimpiadasModalidades.json';

  public get(): Observable<OlimpiadasModalidadesModel[]> {
    return this.http.get<OlimpiadasModalidadesModel[]>(this.apiUrl);
  }
}




