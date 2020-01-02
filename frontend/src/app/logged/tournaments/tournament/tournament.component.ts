import { Component, OnInit } from '@angular/core';
import { Tournament } from 'src/app/shared/interfaces/tournament';
import { TournamentService } from 'src/app/shared/services/tournament.service';
import { Slot } from 'src/app/shared/interfaces/slot';
import { Field } from 'src/app/shared/interfaces/field';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  public tournamentId:number
  public tournament:Tournament
  public slots:Slot[]=[]

  constructor(
    private tournamentService:TournamentService
  ) {
    this.tournament= Tournament.initialize()
    this.tournament.field[0]= new Field(null)
  }

  ngOnInit() {
    this.tournamentService.getTournament(1).then(
      (result:Tournament) => {
        this.tournament=result
        this.slots= result.field[0].slots
      },
      error=>console.log(error)
    )

  }

}
