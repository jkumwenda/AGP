import { Component, OnInit } from '@angular/core';
import { Tournament } from "src/app/shared/interfaces/tournament";
import { TournamentService } from "src/app/shared/services/tournament.service";
import { Router } from '@angular/router';
import { RegistrationDate } from '../../shared/interfaces/registration-date';
@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})

export class TournamentsComponent implements OnInit {
  moduleTitle = 'Tournament';
  public tournaments: Tournament[]=[];
  public tournamentId: number;
  editedTournament=null;
                                                                                        
  constructor(
    private tournamentService: TournamentService,
    private router: Router,
  ) { 
  }

  getTournaments() {
    this.tournamentService.getTournaments().then((result:Tournament[]) => {
      this.tournaments = result;

    }, (error) => {
    });
  }

  checkIfEmpty(){
    return Array.isArray(this.tournaments) && this.tournaments.length
  }

  editTournament(tournamentId) {
    console.log(tournamentId)
    this.router.navigate(['/tournaments/edit-tournament', tournamentId]);
  }

  deleteTournament(tournamentId) {
    this.tournamentService.deleteTournament(tournamentId).then((result:Tournament) => {
      this.getTournaments();
      this.tournaments=this.tournaments.filter(tournamenId => tournamentId !== result.pk_eventid)
    }, (error) => {
    });
  }

  viewTournament(tournamentId){
    this.tournamentService.getTournament(tournamentId).then(
      (result:Tournament) => {
        this.tournamentId=result.pk_eventid;
      this.router.navigate(['/tournaments/tournament', result.pk_eventid]);    
    },
    error => console.log(error)
    );
  }

  ngOnInit() {
    this.getTournaments();
    }
}
