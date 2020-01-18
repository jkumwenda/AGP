import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tournament } from 'src/app/shared/interfaces/tournament';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  @Input() game: Tournament;
  @Output() updatedGames = new EventEmitter<Tournament[]>();

  constructor() {
  }

  updateGame(game) {

  }


  ngOnInit() {

  }
}
