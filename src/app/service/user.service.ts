// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'your_backend_api_base_url';

  constructor(private http: HttpClient) { }

  getProgrammes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/programmes`);
  }

  getExercices(): Observable<any> {
    return this.http.get(`${this.baseUrl}/exercices`);
  }

  getEquipements(): Observable<any> {
    return this.http.get(`${this.baseUrl}/equipements`);
  }

  getSalles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/salles`);
  }
}
