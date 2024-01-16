import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ExerciceService} from "../../service/exercice.service";
import {ProgrammeService} from "../../service/programme.service";

@Component({
  selector: 'app-update-programme',
  templateUrl: './update-programme.component.html',
  styleUrl: './update-programme.component.css'
})
export class UpdateProgrammeComponent {
  updateProgrammeForm!: FormGroup
  id: number=this.activatedRoute.snapshot.params["id"];
  constructor(private activatedRoute: ActivatedRoute,
              private service: ProgrammeService,
              private fb: FormBuilder,
              private router : Router){}

  ngOnInit(){
    this.updateProgrammeForm = this.fb.group({
      name: [null, [Validators.required]],
      cout: [null, [Validators.required]],
      niveau: [null, [Validators.required]],
      instructeur: [null, [Validators.required]]
    })

    this.getProgrammeById();


  }
  getProgrammeById(){
    this.service.getProgrammeById(this.id).subscribe((res)=>{
      console.log(res);
      this.updateProgrammeForm.patchValue(res);
    })
  }
  updateProgramme(){
    this.service.updateProgramme(this.id,this.updateProgrammeForm.value).subscribe((res)=>{
      console.log(res);
      if(res.id!=null)
      {  this.router.navigateByUrl("/listprogrammes");
      }
    })
  }
}
