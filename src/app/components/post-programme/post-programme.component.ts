import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ExerciceService} from "../../service/exercice.service";
import {Router} from "@angular/router";
import {ProgrammeService} from "../../service/programme.service";

@Component({
  selector: 'app-post-programme',
  templateUrl: './post-programme.component.html',
  styleUrl: './post-programme.component.css'
})
export class PostProgrammeComponent {
  postProgrammeForm!: FormGroup;

  constructor(private programmeService: ProgrammeService, private fb: FormBuilder,
              private router : Router) {}

  ngOnInit() {

    this.postProgrammeForm = this.fb.group({
      name: [null, [Validators.required]],
      cout: [null, [Validators.required]],
      niveau: [null, [Validators.required]],
      instructeur: [null, [Validators.required]]
    });
  }
  postProgramme(){
    console.log(this.postProgrammeForm.value);
    this.programmeService.postProgramme(this.postProgrammeForm.value).subscribe((res)=>{
      console.log(res);
      this.router.navigateByUrl("/listprogrammes");}
    )}
}
