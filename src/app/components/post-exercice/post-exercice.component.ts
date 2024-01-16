import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExerciceService } from '../../service/exercice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-post-exercice',
  templateUrl: './post-exercice.component.html',
   styleUrls: ['./post-exercice.component.css']
})
export class PostExerciceComponent {
  postExerciceForm!: FormGroup;

  constructor(private exerciceService: ExerciceService, private fb: FormBuilder,
              private router : Router) {}

  ngOnInit() {

    this.postExerciceForm = this.fb.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      duree: [null, [Validators.required]],
      nbrep: [null, [Validators.required]],
      type: [null, [Validators.required]],
       date:[null, [Validators.required]]
    });
  }
  postexercice(){
  console.log(this.postExerciceForm.value);
  this.exerciceService.postExercice(this.postExerciceForm.value).subscribe((res)=>{
  console.log(res);
  this.router.navigateByUrl("/listexercices");}
  )}
}
