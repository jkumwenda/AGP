import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './logged/dashboard/dashboard.component';
import { TournamentsComponent } from './logged/tournaments/tournaments.component';
import { TournamentComponent } from './logged/tournaments/tournament/tournament.component';
import { CourseComponent } from './logged/course/course.component';
import { PlayersComponent } from './logged/players/players.component';
import { AddPlayerComponent } from './logged/players/add-player/add-player.component';
import { PlayerComponent } from './logged/players/player/player.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AddTournamentComponent } from './logged/tournaments/add-tournament/add-tournament.component';
import { EditTournamentComponent } from './logged/tournaments/edit-tournament/edit-tournament.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupConfirmationComponent } from './auth/signup-confirmation/signup-confirmation.component';
import { EventsComponent } from './public/events/events.component';
import { LeaderboardComponent } from './public/leaderboard/leaderboard.component';
import { GamesComponent } from './public/games/games.component';
import { ResultsComponent } from './logged/tournaments/results/results.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signup-confirmation', component: SignupConfirmationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tournaments', component: TournamentsComponent },
  { path: 'tournament/:id', component: TournamentComponent },
  { path: 'course', component: CourseComponent},
  { path: 'players', component: PlayersComponent},
  { path: 'tournaments/add-tournament', component: AddTournamentComponent},
  { path: 'tournaments/tournament/:id', component: TournamentComponent},
  { path: 'tournaments/edit-tournament/:id', component: EditTournamentComponent},
  { path: 'tournaments/results/:id', component: ResultsComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'tournaments', component: TournamentsComponent},
  { path: 'course/:id', component: CourseComponent},
  { path: 'players', component: PlayersComponent },
  { path: 'add-player', component: AddPlayerComponent },
  { path: 'player/:id', component: PlayerComponent },
  { path: 'events', component: EventsComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'leaderboard/:id', component: LeaderboardComponent },
  { path: 'games', component: GamesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
