import { Component, OnInit, Input, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { DrawType } from 'src/app/shared/interfaces/draw-type';
import { DrawTypeService } from 'src/app/shared/services/draw-type.service';
import { Tournament } from 'src/app/shared/interfaces/tournament';
import { TournamentService } from 'src/app/shared/services/tournament.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-edit-event-draw-type',
  templateUrl: './edit-event-draw-type.component.html',
  styleUrls: ['./edit-event-draw-type.component.css']
})
export class EditEventDrawTypeComponent implements OnInit {
  @Input() drawTypeId;
  @Input() eventId: number;
  @Output() drawTypeEdited = new EventEmitter<any>()
  @Output() event
  @ViewChild('closeModal', null) closeModal: ElementRef;

  public moduleTitle: string = 'Edit Draw Type';
  public eventDrawTypeForm: FormGroup;
  private eventDrawTypeData: any;
  public drawType: DrawType;
  public drawTypes: DrawType[];
  public tournament: Tournament;


  constructor(
    private formBuilder: FormBuilder,
    private drawTypeService: DrawTypeService,
    private tournamentService: TournamentService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
     this.eventId = activatedRoute.snapshot.params['id'];
     this.initializeEventDrawTypeForm();
   }

   getEventDrawType(eventId){

     this.tournamentService.getTournament(eventId).then((result) => {
       this.tournament = result as Tournament;

       this.initializeEventDrawTypeForm();
       console.log(this.initializeEventDrawTypeForm());

     }, (error) => {
     });
     }

   editEventDrawType(eventId){
     const data = this.eventDrawTypeForm.value;
     this.eventDrawTypeData = {
      fk_draw_typeid: data.fk_draw_typeid,
     };
     let dType= this.drawTypes.find(typ=> typ.pk_draw_typeid==this.eventDrawTypeData.fk_draw_typeid)
     this.tournamentService.editTournament(this.eventId, this.eventDrawTypeData).then((result) => {
      this.drawTypeEdited.emit(dType)
      this.closeModal.nativeElement.click()

    }, (error) => {
       console.log(error);

     });
    }

    getDrawTypes() {
      this.drawTypeService.getDrawTypes().then(
        (result: DrawType[]) => {
          this.drawTypes = result
        },
        error => console.log(error)
      );
    }

    initializeEventDrawTypeForm() {
      if (this.tournament == null) {
        this.tournament = Tournament.initialize();
        this.tournament.fk_draw_typeid = null;
      }

      this.eventDrawTypeForm = this.formBuilder.group({
        fk_draw_typeid: [this.tournament.fk_draw_typeid, Validators.compose([Validators.required])],
      });
    }

    ngOnInit() {
      this.getDrawTypes();
      this.getEventDrawType(this.eventId)
    }
  }
