import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})
export class TournamentsComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  viewTournament(tournamentId) {
    this.router.navigate(['tournament', tournamentId]);
  }

  ngOnInit() {
  }
}
