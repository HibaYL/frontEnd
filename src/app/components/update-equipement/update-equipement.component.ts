import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {EquipementService} from "../../service/equipement.service";
@Component({
  selector: 'app-update-equipement',
  templateUrl: './update-equipement.component.html',
  styleUrl: './update-equipement.component.css'
})
export class UpdateEquipementComponent {
  updateEquipementForm!: FormGroup
  id: number=this.activatedRoute.snapshot.params["id"];
  constructor(private activatedRoute: ActivatedRoute,
              private service: EquipementService,
              private fb: FormBuilder,
              private router : Router){}

  ngOnInit(){
    this.updateEquipementForm = this.fb.group({
      type: [null, [Validators.required]],
      taille: [null, [Validators.required]],
      poids: [null, [Validators.required]],
      disponibilite: [null, [Validators.required]]
    })

    this.getEquipementById();


  }
  getEquipementById(){
    this.service.getEquipementById(this.id).subscribe((res)=>{
      console.log(res);
      this.updateEquipementForm.patchValue(res);
    })
  }
  updateEquipement(){
    this.service.updateEquipement(this.id,this.updateEquipementForm.value).subscribe((res)=>{
      console.log(res);
      if(res.id!=null)
      {  this.router.navigateByUrl("/listequipements");
      }
    })
  }
}
