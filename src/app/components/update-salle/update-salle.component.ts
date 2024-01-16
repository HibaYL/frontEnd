import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {SalleserviceService} from "../../service/salleservice.service";

@Component({
  selector: 'app-update-salle',
  templateUrl: './update-salle.component.html',
  styleUrl: './update-salle.component.css'
})
export class UpdateSalleComponent {
  updateSalleForm!: FormGroup
  id: number=this.activatedRoute.snapshot.params["id"];
  constructor(private activatedRoute: ActivatedRoute,
              private service: SalleserviceService,
              private fb: FormBuilder,
              private router : Router){}

  ngOnInit(){
    this.updateSalleForm = this.fb.group({
      name: [null, [Validators.required]],
      horaire: [null, [Validators.required]],
      prix: [null, [Validators.required]],
      adresse: [null, [Validators.required]],
      responsable:[null, [Validators.required]]
    })

    this.getSalleById();


  }
  getSalleById(){
    this.service.getSalleById(this.id).subscribe((res)=>{
      console.log(res);
      this.updateSalleForm.patchValue(res);
    })
  }
  updateSalle(){
    this.service.updateSalle(this.id,this.updateSalleForm.value).subscribe((res)=>{
      console.log(res);
      if(res.id!=null)
      {  this.router.navigateByUrl("/listsalles");
      }
    })
  }
}
