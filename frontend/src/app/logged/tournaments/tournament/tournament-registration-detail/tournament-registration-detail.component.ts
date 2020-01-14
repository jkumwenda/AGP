import {Component, Input, OnInit} from '@angular/core';
import {Tournament} from '../../../../shared/interfaces/tournament';
import {RegistrationDate} from '../../../../shared/interfaces/registration-date';

@Component({
  selector: 'app-tournament-registration-detail',
  templateUrl: './tournament-registration-detail.component.html',
  styleUrls: ['./tournament-registration-detail.component.css']
})
export class TournamentRegistrationDetailComponent implements OnInit {
  public editComponentCreated = false;
  public addComponentCreated = false;
  @Input() tournament: Tournament;

  constructor() { }

  ngOnInit() {
  }

  editRegistrationDate(registrationDate: RegistrationDate) {
    this.tournament.registrationDate[0] = registrationDate;
  }
}
