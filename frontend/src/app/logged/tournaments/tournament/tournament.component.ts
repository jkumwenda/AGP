import { Component, OnInit } from '@angular/core';
import { Tournament } from 'src/app/shared/interfaces/tournament';
import { TournamentService } from 'src/app/shared/services/tournament.service';
import { Slot } from 'src/app/shared/interfaces/slot';
import { Field } from 'src/app/shared/interfaces/field';
import { ActivatedRoute } from '@angular/router';

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
    private tournamentService:TournamentService,
    private activatedRoute: ActivatedRoute
  ) {

    this.tournamentId= this.activatedRoute.snapshot.params['id']
    this.tournament= Tournament.initialize()
    this.tournament.field.push(new Field(null))
  }


  UpdateSlots(slots){
    this.slots=slots

  }

  ngOnInit() {
    this.tournamentService.getTournament(this.tournamentId).then(
      (result:Tournament) => {
        this.tournament=result
        if(result.field.length>0)
            this.slots= this.tournament.field[0].slots
        else
            this.slots=[]
      },
      error=>console.log(error)
    )

  }

}
