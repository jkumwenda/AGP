import { Component, OnInit, Input } from '@angular/core';
import { Tournament } from 'src/app/shared/interfaces/tournament';
import { GameService } from 'src/app/shared/services/game.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  public eventId: number;
  public game: Tournament;
  public games: Tournament[] = [];

  constructor(
    private gameService: GameService,
    private activatedRoute: ActivatedRoute
  ) {
    this.game= Tournament.initialize();
    this.eventId = this.activatedRoute.snapshot.params['id'];

    console.log(this.eventId);
  }

  UpdateGames(games) {
    this.games = games;
  }

  getGame() {
    this.gameService.getGame(this.eventId).then(
      (result: Tournament) => {
        this.game = result;
      },
      error => {}
    );
  }
  
  selectGame(game){
    this.game = game;
  }

  ngOnInit() {  
    if(this.eventId)
       this.getGame();
  }

}
