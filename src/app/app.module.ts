import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostExerciceComponent } from './components/post-exercice/post-exercice.component';
import { GetAllExerciceComponent } from './components/get-all-exercice/get-all-exercice.component';
import { UpdateExerciceComponent } from './components/update-exercice/update-exercice.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { GetAllSalleComponent } from './components/get-all-salle/get-all-salle.component';
import { PostSalleComponent } from './components/post-salle/post-salle.component';
import { UpdateSalleComponent } from './components/update-salle/update-salle.component';
import { PostProgrammeComponent } from './components/post-programme/post-programme.component';
import { PostEquipementComponent } from './components/post-equipement/post-equipement.component';
import { UpdateProgrammeComponent } from './components/update-programme/update-programme.component';
import { UpdateEquipementComponent } from './components/update-equipement/update-equipement.component';
import { GetAllProgrammeComponent } from './components/get-all-programme/get-all-programme.component';
import { GetAllEquipementComponent } from './components/get-all-equipement/get-all-equipement.component';
import { HomeComponent } from './components/home/home.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component'


@NgModule({
  declarations: [
    AppComponent,
    PostExerciceComponent,
    GetAllExerciceComponent,
    UpdateExerciceComponent,
    GetAllSalleComponent,
    PostSalleComponent,
    UpdateSalleComponent,
    PostProgrammeComponent,
    PostEquipementComponent,
    UpdateProgrammeComponent,
    UpdateEquipementComponent,
    GetAllProgrammeComponent,
    GetAllEquipementComponent,
    HomeComponent,
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
