import { Component } from '@angular/core';
import { ExerciceService } from '../../service/exercice.service';

@Component({
  selector: 'app-get-all-exercice',
  templateUrl: './get-all-exercice.component.html',
  styleUrls: ['./get-all-exercice.component.css']
})
export class GetAllExerciceComponent {
  exercices:any=[];
nom : String="";
constructor(private exerciceService: ExerciceService) { }

ngOnInit(){

this.getALlExercices();}

getALlExercices() {

this.exerciceService.getAllExercice().subscribe((res) => {

console.log(res);
this.exercices=res;

})

}
deleteExercice(id: number) {

this.exerciceService.deleteExercice(id).subscribe((res) => {

console.log(res);
this.getALlExercices();
})
}
search(){
this.exercices = this.exercices.filter((res : any) => {
return res.name.toLocaleLowerCase().match(this.nom.toLocaleLowerCase());})
}
}
