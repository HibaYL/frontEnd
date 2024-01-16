import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { ExerciceService} from '../../service/exercice.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-exercice',
  templateUrl: './update-exercice.component.html',
  styleUrl: './update-exercice.component.css'
})
export class UpdateExerciceComponent {
updateExerciceForm!: FormGroup
id: number=this.activatedRoute.snapshot.params["id"];
constructor(private activatedRoute: ActivatedRoute,
 private service: ExerciceService,
 private fb: FormBuilder,
 private router : Router){}

 ngOnInit(){
  this.updateExerciceForm = this.fb.group({
       name: [null, [Validators.required]],
       description: [null, [Validators.required]],
    duree: [null, [Validators.required]],
    nbrep: [null, [Validators.required]],
       type: [null, [Validators.required]],
        date:[null, [Validators.required]]
     })

 this.getExerciceById();


 }
 getExerciceById(){
 this.service.getExerciceById(this.id).subscribe((res)=>{
 console.log(res);
 this.updateExerciceForm.patchValue(res);
 })
 }
 updateExercice(){
  this.service.updateExercice(this.id,this.updateExerciceForm.value).subscribe((res)=>{
  console.log(res);
  if(res.id!=null)
{  this.router.navigateByUrl("/listexercices");
}
 })
}
}
