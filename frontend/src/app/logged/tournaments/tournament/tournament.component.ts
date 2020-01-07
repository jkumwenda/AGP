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

<<<<<<< HEAD
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
            //console.log(this.tournament.information[0].info)
          }
        else this.tournament.information[0]= new Information(null, null)

        if(this.tournament.eventFormat.length>0){
          this.eventFormat.pk_event_formatid=this.tournament.eventFormat[0].pk_event_formatid
          //console.log(this.tournament.eventFormat[0].format.format)

        }
        else this.tournament.eventFormat.push(new EventFormat(null, null))

        if(this.tournament.registrationDate.length>0){
          this.registrationDate.pk_registration_dateid=this.tournament.registrationDate[0].pk_registration_dateid
          //console.log(this.tournament.registrationDate[0].open_date)
          

        }
        else this.tournament.registrationDate.push(new RegistrationDate(null, null))

      },
      error => console.log(error)
    );
=======
  ngOnInit() {
    console.log('HOTETTETETETET');
>>>>>>> origin/jones
  }

  informationUpdated(information:Information){
   this.tournament.information[0].info = information.info
   console.log(this.tournament.information[0])
  }

  informationCreated(information:Information){
    
    this.tournament.information.push(this.tournament.information[0]);
    console.log(this.tournament.information)

    
    
  }


  editDrawType(data){
    this.tournament.draw_type=data
  }


  editFormat(data){
    this.tournament.eventFormat[0].format=data
    console.log(data)
  }

  editRegistrationDate(data){
    this.tournament.registrationDate[0]=data
    console.log(data)
  }

  ngOnInit() {

    this.getTournament(this.tournamentId);
    
   
  }
}
