import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './logged/dashboard/dashboard.component';
import { TournamentsComponent } from './logged/tournaments/tournaments.component';
import { TournamentComponent } from './logged/tournaments/tournament/tournament.component';
import { CourseComponent } from './logged/course/course.component';
import { PlayersComponent } from './logged/players/players.component';
import { LoginComponent } from './auth/login/login.component';
import { AddTournamentComponent } from './logged/tournaments/add-tournament/add-tournament.component';
import { EditTournamentComponent } from './logged/tournaments/edit-tournament/edit-tournament.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'tournaments', component: TournamentsComponent},
  {path: 'course', component: CourseComponent},
  {path: 'players', component: PlayersComponent},
  {path: 'tournaments/add-tournament', component: AddTournamentComponent},
  {path: 'tournaments/tournament/:id', component: TournamentComponent},
  {path: 'tournaments/edit-tournament/:id', component: EditTournamentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
