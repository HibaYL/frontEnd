import { Component } from '@angular/core';
import {ExerciceService} from "../../service/exercice.service";
import {ProgrammeService} from "../../service/programme.service";

@Component({
  selector: 'app-get-all-programme',
  templateUrl: './get-all-programme.component.html',
  styleUrl: './get-all-programme.component.css'
})
export class GetAllProgrammeComponent {
  programmes:any=[];
  name : String="";
  constructor(private programmeService: ProgrammeService) { }

  ngOnInit(){

    this.getALlProgrammes();}

  getALlProgrammes() {

    this.programmeService.getAllProgramme().subscribe((res) => {

      console.log(res);
      this.programmes=res;

    })

  }
  deleteProgramme(id: number) {

    this.programmeService.deleteProgramme(id).subscribe((res) => {

      console.log(res);
      this.getALlProgrammes();
    })
  }
  search(){
    this.programmes = this.programmes.filter((res : any) => {
      return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
    })
  }
}
