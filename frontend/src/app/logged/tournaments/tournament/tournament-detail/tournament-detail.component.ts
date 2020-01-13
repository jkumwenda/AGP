import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tournament } from 'src/app/shared/interfaces/tournament';
import { Field } from 'src/app/shared/interfaces/field';
import { Slot } from 'src/app/shared/interfaces/slot';
import {EventFormat} from '../../../../shared/interfaces/event-format';
import {DrawType} from '../../../../shared/interfaces/draw-type';
import {Information} from '../../../../shared/interfaces/information';

@Component({
  selector: 'app-tournament-detail',
  templateUrl: './tournament-detail.component.html',
  styleUrls: ['./tournament-detail.component.css']
})
export class TournamentDetailComponent implements OnInit {
  @Input() tournament: Tournament;
  @Output() updatedSlots = new EventEmitter<Slot[]>();
  public field: Field;
  public addComponentCreated = false;
  public editComponentCreated = false;
  public  editEventComponentCreated = false;
  public eventFormat: EventFormat;
  public editDrawComponentCreated = false;
  public editInFormationComponentCreated = false;
  public editFieldComponent = false;

  constructor() {
    this.tournament = Tournament.initialize();
    this.tournament.field.push(new Field(''));
    this.field = new Field(null);
  }

  updateField(field) {
    this.tournament.field[0] = field;
    this.field = field;

  }
 addField(field) {
   this.tournament.field[0] = field;
   this.updatedSlots.emit(this.tournament.field[0].slots);
 }
  ngOnChanges(): void {
    const fields = this.tournament.field;
    this.field = fields.length > 0 ? fields[0] : new Field(null);
  }


  ngOnInit() {

  }


  editInformation(information: Information) {
    this.tournament.information[0] = information;
  }

  editFormat(format: EventFormat) {
    this.tournament.eventFormat[0] = format;
  }

  editDrawType(drawType: DrawType) {
  this.tournament.draw_type = drawType;
  }
}
