import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostExerciceComponent } from './components/post-exercice/post-exercice.component';
import { GetAllExerciceComponent } from './components/get-all-exercice/get-all-exercice.component';
import {  UpdateExerciceComponent } from './components/update-exercice/update-exercice.component';
import {PostSalleComponent} from "./components/post-salle/post-salle.component";
import {GetAllSalleComponent} from "./components/get-all-salle/get-all-salle.component";
import {UpdateSalleComponent} from "./components/update-salle/update-salle.component";
import {PostProgrammeComponent} from "./components/post-programme/post-programme.component";
import {GetAllProgrammeComponent} from "./components/get-all-programme/get-all-programme.component";
import {UpdateProgrammeComponent} from "./components/update-programme/update-programme.component";
import {PostEquipementComponent} from "./components/post-equipement/post-equipement.component";
import {GetAllEquipementComponent} from "./components/get-all-equipement/get-all-equipement.component";
import {UpdateEquipementComponent} from "./components/update-equipement/update-equipement.component";
import { HomeComponent } from './components/home/home.component';
import {UserDashboardComponent} from "./components/user-dashboard/user-dashboard.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-dashboard', component: UserDashboardComponent },


{ path:'exercice' , component: PostExerciceComponent},
{ path:'listexercices' , component: GetAllExerciceComponent},
{ path:'exercice/:id' , component: UpdateExerciceComponent},


  { path:'salle' , component: PostSalleComponent},
  { path:'listsalles' , component: GetAllSalleComponent},
  { path:'salle/:id' , component: UpdateSalleComponent},

  { path:'programme' , component: PostProgrammeComponent},
  { path:'listprogrammes' , component: GetAllProgrammeComponent},
  { path:'programme/:id' , component: UpdateProgrammeComponent},

  { path:'equipement' , component: PostEquipementComponent},
  { path:'listequipements' , component: GetAllEquipementComponent},
  { path:'equipement/:id' , component: UpdateEquipementComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
