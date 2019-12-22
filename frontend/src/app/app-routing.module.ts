import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './logged/dashboard/dashboard.component';
import { TournamentsComponent } from './logged/tournaments/tournaments.component';
import { CourseComponent } from './logged/course/course.component';
import { PlayersComponent } from './logged/players/players.component';
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: '404', component: PageNotFoundComponent },
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'tournaments', component: TournamentsComponent},
  {path: 'course', component: CourseComponent},
  {path: 'players', component: PlayersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
