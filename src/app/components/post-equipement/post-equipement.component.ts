import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import Validators
import { Router } from '@angular/router';
import {EquipementService} from "../../service/equipement.service";

@Component({
  selector: 'app-post-equipement',
  templateUrl: './post-equipement.component.html',
  styleUrl: './post-equipement.component.css'
})
export class PostEquipementComponent {
  postEquipementForm!: FormGroup;

  constructor(private equipementService: EquipementService, private fb: FormBuilder,
              private router : Router) {}

  ngOnInit() {

    this.postEquipementForm = this.fb.group({
      type: [null, [Validators.required]],
      taille: [null, [Validators.required]],
      poids: [null, [Validators.required]],
      disponibilite: [null, [Validators.required]]
    });
  }
  postEquipement(){
    console.log(this.postEquipementForm.value);
    this.equipementService.postEquipement(this.postEquipementForm.value).subscribe((res)=>{
      console.log(res);
      this.router.navigateByUrl("/listequipements");}
    )}
}
