import { Component } from '@angular/core';
import {ExerciceService} from "../../service/exercice.service";
import {SalleserviceService} from "../../service/salleservice.service";

@Component({
  selector: 'app-get-all-salle',
  templateUrl: './get-all-salle.component.html',
  styleUrl: './get-all-salle.component.css'
})
export class GetAllSalleComponent {
  salles:any=[];
  name : String="";
  constructor(private salleserviceService:SalleserviceService) { }

  ngOnInit(){

    this.getALlSalle();
  }

  getALlSalle() {

    this.salleserviceService.getAllSalle().subscribe((res) => {

      console.log(res);
      this.salles=res;

    })

  }
  deleteProduct(id: number) {

    this.salleserviceService.deleteSalle(id).subscribe((res) => {

      console.log(res);
      this.getALlSalle();
    })
  }
  search(){
    this.salles = this.salles.filter((res : any) => {
      return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());})
  }
}
