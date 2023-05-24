import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { Questionario } from '../models/questionario';

@Injectable({
  providedIn: 'root'
})

export class QuestServiceService {
  private url = "Paciente";

  constructor(private http: HttpClient) { }

  public getQuestionarios(): Observable<Questionario[]>
  {
    return this.http.get<Questionario[]>(`${environment.apiUrl}/${this.url}`);
  }

  public enviarQuestionario(questionario: any)
  {
    return this.http.post(`${environment.apiUrl}/${this.url}`, questionario);
  }

 
}
