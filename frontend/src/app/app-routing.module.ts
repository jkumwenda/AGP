import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './logged/dashboard/dashboard.component';
import { TournamentsComponent } from './logged/tournaments/tournaments.component';
import { TournamentComponent } from './logged/tournaments/tournament/tournament.component';
import { CourseComponent } from './logged/course/course.component';
import { PlayersComponent } from './logged/players/players.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
<<<<<<< HEAD
import { AddTournamentComponent } from './logged/tournaments/add-tournament/add-tournament.component';
import { EditTournamentComponent } from './logged/tournaments/edit-tournament/edit-tournament.component';
=======
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
>>>>>>> origin/jones

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tournaments', component: TournamentsComponent },
  { path: 'tournament/:id', component: TournamentComponent },
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
