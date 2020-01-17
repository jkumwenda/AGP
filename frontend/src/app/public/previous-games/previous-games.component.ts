import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GameService } from '../../shared/services/game.service';
import { Tournament } from "src/app/shared/interfaces/tournament";

@Component({
  selector: 'app-previous-games',
  templateUrl: './previous-games.component.html',
  styleUrls: ['./previous-games.component.css']
})
export class PreviousGamesComponent implements OnInit {

  @Output() gameSelected = new EventEmitter<Tournament>();

  moduleTitle = 'Previous Games';
  public eventId:number;
  public games: Tournament[];

  constructor(
    private gameService: GameService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    this.eventId = this.activatedRoute.snapshot.params['id'];

  }

  getGames() {
    this.gameService.getGames().then((result) => {
      this.games = result as Tournament[];
      this.games=this.games.slice(0,3);
      
      if(!this.eventId){
      this.emitGameSelectedEvent(this.games[0]);
      }
    }, (error) => {
    });
  }

  emitGameSelectedEvent(game:Tournament){
    this.gameSelected.emit(game);
  }

  viewGame = (gameId) => this.router.navigate(['', gameId])

  ngOnInit() {
   this.getGames();
  
  }

  
}
