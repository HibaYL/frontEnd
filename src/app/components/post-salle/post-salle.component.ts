import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ExerciceService} from "../../service/exercice.service";
import {Router} from "@angular/router";
import {SalleserviceService} from "../../service/salleservice.service";

@Component({
  selector: 'app-post-salle',
  templateUrl: './post-salle.component.html',
  styleUrl: './post-salle.component.css'
})
export class PostSalleComponent {
  postSalleForm!: FormGroup;

  constructor(private salleserviceService: SalleserviceService, private fb: FormBuilder,
              private router : Router) {}

  ngOnInit() {

    this.postSalleForm = this.fb.group({
      name: [null, [Validators.required]],
      horaire: [null, [Validators.required]],
      prix: [null, [Validators.required]],
      adresse: [null, [Validators.required]],
      responsable:[null, [Validators.required]]
    });
  }
  postsalle(){
    console.log(this.postSalleForm.value);
    this.salleserviceService.postSalle(this.postSalleForm.value).subscribe((res)=>{
      console.log(res);
      this.router.navigateByUrl("/listsalles");}
    )}
}
