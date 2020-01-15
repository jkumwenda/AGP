import { Component, OnInit } from '@angular/core';
import {Tournament} from '../../shared/interfaces/tournament';
import {TournamentService} from '../../shared/services/tournament.service';
import {error} from 'util';
import {Router} from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  public tournaments: Tournament[] = [];
  public displayedTournaments: Tournament[] = [];
  public  numberOfTournamentsToDisplay = 3;

  constructor(
    private tournamentService: TournamentService,
    public router: Router
  ) { }

  getTournaments() {
    this.tournamentService.getTournaments().then(
      (tournaments: Tournament[]) => {
        this.tournaments = tournaments.sort(
          (tournamentOne, tournamentTwo) => {
            if (tournamentOne.start_date > tournamentTwo.start_date) { return 1; }
            if (tournamentOne.start_date < tournamentTwo.start_date) { return -1; }
          }
        );
        this.initDisplayedEvents();
      },
      error => {}
    );
  }
  initDisplayedEvents() {
    this.displayedTournaments = this.tournaments.filter(
      (tournament, index) => {
        return index < this.numberOfTournamentsToDisplay;
      }
    );
  }
  ngOnInit() {
    this.getTournaments();
  }

  navigateToTournament(eventid: number) {
    this.router.navigate(['/tournament', eventid]);
  }

  changeDisplayed(tournaments: Tournament[]) {
    this.displayedTournaments = tournaments;
  }
}
