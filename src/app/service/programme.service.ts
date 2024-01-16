import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const BASIC_URL=["http://localhost:8080"];
@Injectable({
  providedIn: 'root'
})
export class ProgrammeService {

  constructor(private http:HttpClient) { }
  postProgramme(programme: any): Observable<any> {
    return this.http.post(BASIC_URL + "/api4/programme",programme);
  }
  getAllProgramme():Observable<any>{
    return this.http.get(BASIC_URL+"/api4/programmes");
  }
  getProgrammeById(id : number):Observable<any>{
    return this.http.get(BASIC_URL+"/api4/programme/"+id);
  }
  updateProgramme(id : number,programme: any):Observable<any>{
    return this.http.put(BASIC_URL+"/api4/programme/"+id,programme);
  }
  deleteProgramme(id : number):Observable<any>{
    return this.http.delete(BASIC_URL+"/api4/programme/"+id);
  }
}
