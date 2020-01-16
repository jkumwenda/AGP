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
  public searchString: string;
  public search = false;
  public searchedTournaments: Tournament[];

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
        this.initDisplayedEvents(this.tournaments);
      },
      error => {}
    );
  }
  initDisplayedEvents(tournaments: Tournament[]) {
    this.displayedTournaments = tournaments.filter(
      (tournament, index) => {
        return index < this.numberOfTournamentsToDisplay;
      }
    );
  }
  ngOnInit() {
    this.getTournaments();
  }

  navigateToTournament(eventId: number) {
    this.router.navigate(['/tournament', eventId]);
  }

  changeDisplayed(tournaments: Tournament[]) {
    this.displayedTournaments = tournaments;
  }

  searchTournament() {
    this.searchedTournaments = this.tournaments.filter((tournament) => {
      return tournament.event.toLowerCase().includes(this.searchString.toLowerCase());
    });
    this.search = true;
    this.initDisplayedEvents(this.searchedTournaments);
  }
}
