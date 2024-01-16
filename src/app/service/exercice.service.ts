import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


const BASIC_URL=["http://localhost:8080"];

@Injectable({
  providedIn: 'root'
})
export class ExerciceService {

 constructor(private http:HttpClient) { }
  postExercice(exercice: any): Observable<any> {
  return this.http.post(BASIC_URL + "/api/exercice",exercice);
  }
  getAllExercice():Observable<any>{
  return this.http.get(BASIC_URL+"/api/exercices");
  }
  getExerciceById(id : number):Observable<any>{
    return this.http.get(BASIC_URL+"/api/exercice/"+id);
    }
  updateExercice(id : number,exercice: any):Observable<any>{
        return this.http.put(BASIC_URL+"/api/exercice/"+id,exercice);
    }
    deleteExercice(id : number):Observable<any>{
            return this.http.delete(BASIC_URL+"/api/exercice/"+id);
        }
}
