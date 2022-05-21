import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Forfait } from './forfait';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ForfaitService {
  forfaitsUrl = 'http://localhost/Technique-Programmation-3-Projet-2/';

  constructor(private http: HttpClient) {}

  getForfaits(): Observable<Forfait[]> {
    return this.http.get<Forfait[]>(this.forfaitsUrl);
  }

  addForfait(forfait: Forfait): Observable<Forfait> {
    return this.http.post<Forfait>(this.forfaitsUrl, forfait, httpOptions);
  }
  editForfait(forfait: Forfait): Observable<Forfait> {
    return this.http.put<Forfait>(
      this.forfaitsUrl +  "?id="+ forfait.id,
      forfait,
      httpOptions
    );
  }
  deleteForfait(id: string): Observable<Forfait> {
    return this.http.delete<Forfait>(this.forfaitsUrl + "?id="+ id );
  }
}




