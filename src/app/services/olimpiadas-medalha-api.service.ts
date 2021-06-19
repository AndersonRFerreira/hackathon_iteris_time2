import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OlimpiadasMedalhaModel } from './olimpiadas-medalha-model';


@Injectable({
  providedIn: 'root'
})
export class OlimpiadasMedalhaApiService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://it3-klj-default-rtdb.firebaseio.com/olimpiadasMedalhas.json';

  public get(): Observable<OlimpiadasMedalhaModel[]> {
    return this.http.get<OlimpiadasMedalhaModel[]>(this.apiUrl);
  }
}
