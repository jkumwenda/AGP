import { Component, OnInit } from '@angular/core';
import { RegistrationDate } from 'src/app/shared/interfaces/registration-date';
import { Information } from 'src/app/shared/interfaces/information';
import { EventFormat } from 'src/app/shared/interfaces/event-format';
import { Tournament } from 'src/app/shared/interfaces/tournament';
import { DrawType } from 'src/app/shared/interfaces/draw-type';
import { TournamentService } from "src/app/shared/services/tournament.service";
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})

export class TournamentComponent implements OnInit {
  public registrationDate:RegistrationDate;
  tournaments: any[];
  informations: any[];
  public information:Information;
  public eventFormat: EventFormat;
  public drawType: DrawType;
  public tournament: Tournament;
  public tournamentId:number;
  public informationId: number;
  public registrationDateId: number;
  public eventFormatId: number;
  public editComponentCreated: boolean = false;
  public addComponentCreated: boolean = false;

  constructor(    
    private router: Router,
    private tournamentService: TournamentService,
    private activatedRoute:ActivatedRoute
  ) { 

    this.information= new Information(null,null);
    this.eventFormat= new EventFormat(null,null);
    this.registrationDate= new RegistrationDate(null,null);
    this.tournamentId= this.activatedRoute.snapshot.params['id']
    this.tournament = new Tournament();
    this.tournament.eventFormat.push(new EventFormat(null,null))
    this.tournament.information.push(new Information(null,null))
    this.tournament.registrationDate.push(new RegistrationDate(null,null))
  }

  getTournament(tournamentId) {
    this.tournamentService.getTournament(tournamentId).then(
      (result: Tournament) => {
        this.tournament = result; 
        
        if(this.tournament.information.length > 0){
            this.information.pk_informationid=this.tournament.information[0].pk_informationid  
          }
        else this.tournament.information[0]= new Information(null, null)

        if(this.tournament.eventFormat.length>0){
          this.eventFormat.pk_event_formatid=this.tournament.eventFormat[0].pk_event_formatid
        }
        else this.tournament.eventFormat.push(new EventFormat(null, null))

        if(this.tournament.registrationDate.length>0){
          this.registrationDate.pk_registration_dateid=this.tournament.registrationDate[0].pk_registration_dateid
        }
        else this.tournament.registrationDate.push(new RegistrationDate(null, null))

      },
      error => console.log(error)
    );
  }

  editInformation(data){
    this.tournament.information[0]=data
    this.information=data
    console.log(data)
  }

  editDrawType(data){
    this.tournament.draw_type=data
  }

  editFormat(data){
    this.tournament.eventFormat[0].format=data
    console.log(data)
  }

  editRegistrationDate(data){

    this.tournament.registrationDate[0]= data
    this.registrationDate=data
  
  }

  ngOnInit() {
    this.getTournament(this.tournamentId);    
  }
}
