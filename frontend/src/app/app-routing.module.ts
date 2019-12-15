import { DashboardComponent } from './logged/dashboard/dashboard.component';
import { TournamentComponent } from './logged/tournaments/tournament/tournament.component';
import { CourseComponent } from './logged/course/course.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'tournaments', component: TournamentComponent},
  {path: 'course', component: CourseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
