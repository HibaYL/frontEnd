import { Component } from '@angular/core';
import {ExerciceService} from "../../service/exercice.service";
import {EquipementService} from "../../service/equipement.service";

@Component({
  selector: 'app-get-all-equipement',
  templateUrl: './get-all-equipement.component.html',
  styleUrl: './get-all-equipement.component.css'
})
export class GetAllEquipementComponent {
  equipements:any=[];
  type : String="";
  constructor(private equipementService: EquipementService) { }

  ngOnInit(){

    this.getALlEquipements();}

  getALlEquipements() {

    this.equipementService.getAllEquipement().subscribe((res) => {

      console.log(res);
      this.equipements=res;

    })

  }
  deleteEquipement(id: number) {

    this.equipementService.deleteEquipement(id).subscribe((res) => {

      console.log(res);
      this.getALlEquipements();
    })
  }
  search(){
    this.equipements = this.equipements.filter((res : any) => {
      return res.type.toLocaleLowerCase().match(this.type.toLocaleLowerCase());})
  }

}
