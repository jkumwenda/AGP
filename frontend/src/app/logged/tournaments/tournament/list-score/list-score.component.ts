import {Component, Input, OnInit} from '@angular/core';
import {Score} from '../../../../shared/interfaces/score';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ScoreService} from '../../../../shared/services/score.service';

@Component({
  selector: 'app-list-score',
  templateUrl: './list-score.component.html',
  styleUrls: ['./list-score.component.css']
})
export class ListScoreComponent implements OnInit {

  @Input() scores: Score[];
  public updateForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private  scoreService: ScoreService
  ) { }

  updateScore() {

    const formScore = this.updateForm.value;
    this.scoreService.editScore(formScore.pk_scoreid, formScore).then(
      (result: Score) => {
       this.scores.forEach(score => {
         if (score.pk_scoreid === result.pk_scoreid) {
              score.hits = result.hits;
              score.edit = false;
              return;
         }
       });
      },
      error => {}
    );
  }
  initForm(score: Score) {
    this.updateForm = this.formBuilder.group({
      pk_scoreid: score.pk_scoreid,
      hits: [score.hits, Validators.compose([Validators.required,  Validators.pattern('^[0-9]*$')])]
    });
  }

  ngOnInit() {
  }

  editScore(score: Score) {
    this.scores.forEach(s => {
      s.edit = s.pk_scoreid === score.pk_scoreid;
    });

    this.initForm(score);
  }
}
