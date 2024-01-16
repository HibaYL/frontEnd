import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const BASIC_URL=["http://localhost:8080"];
@Injectable({
  providedIn: 'root'
})
export class SalleserviceService {
  constructor(private http:HttpClient) { }
  postSalle(salle: any): Observable<any> {
    return this.http.post(BASIC_URL + "/api1/salle",salle);
  }
  getAllSalle():Observable<any>{
    return this.http.get(BASIC_URL+"/api1/salles");
  }
  getSalleById(id : number):Observable<any>{
    return this.http.get(BASIC_URL+"/api1/salle/"+id);
  }
  updateSalle(id : number,salle: any):Observable<any>{
    return this.http.put(BASIC_URL+"/api1/salle/"+id,salle);
  }
  deleteSalle(id : number):Observable<any>{
    return this.http.delete(BASIC_URL+"/api1/salle/"+id);
  }
}
