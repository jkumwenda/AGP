import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../../shared/services/game.service';
import { Tournament } from "src/app/shared/interfaces/tournament";

@Component({
  selector: 'app-roles',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  moduleTitle = 'Previous Games';
  public games: Tournament[];
  public eventId: number;

  constructor(
    private gameService: GameService,
    private router: Router,
  ) { }

  getGames() {
    this.gameService.getGames().then((result) => {
      this.games = result as Tournament[];
    }, (error) => {
    });
  }

  viewGame = (eventId) => this.router.navigate(['/leaderboard/', eventId])

  ngOnInit() {
    this.getGames();
  }
}
