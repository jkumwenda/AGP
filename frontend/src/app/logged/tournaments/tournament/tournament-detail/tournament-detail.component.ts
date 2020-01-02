import { Component, OnInit, Input } from '@angular/core';
import { Tournament } from 'src/app/shared/interfaces/tournament';
import { Field } from 'src/app/shared/interfaces/field';

@Component({
  selector: 'app-tournament-detail',
  templateUrl: './tournament-detail.component.html',
  styleUrls: ['./tournament-detail.component.css']
})
export class TournamentDetailComponent implements OnInit {

  @Input() tournament:Tournament

  constructor() {

   }

  ngOnInit() {
  }

}
