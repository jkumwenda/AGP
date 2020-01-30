import {Component, Input, OnInit} from '@angular/core';
import {Score} from '../../../../shared/interfaces/score';
import {TournamentService} from '../../../../shared/services/tournament.service';
import {ScoreService} from '../../../../shared/services/score.service';
import {Tournament} from '../../../../shared/interfaces/tournament';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-player-leadershipboard',
  templateUrl: './player-leadershipboard.component.html',
  styleUrls: ['./player-leadershipboard.component.css']
})
export class PlayerLeadershipboardComponent implements OnInit {

  @Input() profileId: number;
  @Input() events: Tournament[];
  public scores: Score[] = [];
  public selectedModel: Tournament;
  constructor(
    private eventService: TournamentService,
    private  scoreService: ScoreService,
    private  activatedRoute: ActivatedRoute
  ) {
    this.selectedModel = Tournament.initialize();
    this.profileId = this.activatedRoute.snapshot.params.id;
  }



 getScores(eventId) {
    this.scoreService.getScores(this.profileId, eventId).then(
      (result: Score[]) => {
        this.scores = result;
      },
      error => {}
    );
 }

  // tslint:disable-next-line:use-lifecycle-interface
 ngOnChanges() {
    if (this.events.length > 0) {
      this.selectedModel = this.events[0];
      this.getScores(this.selectedModel.pk_eventid);
    }
 }
  ngOnInit() {

  }

  fetchScores(event) {
   this.getScores(event.pk_eventid);
  }
}
