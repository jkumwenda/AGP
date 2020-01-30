import {Component, Input, OnInit} from '@angular/core';
import {Score} from '../../../../shared/interfaces/score';

@Component({
  selector: 'app-list-score',
  templateUrl: './list-score.component.html',
  styleUrls: ['./list-score.component.css']
})
export class ListScoreComponent implements OnInit {

  @Input() scores: Score[];

  constructor() { }

  ngOnInit() {
  }

}
