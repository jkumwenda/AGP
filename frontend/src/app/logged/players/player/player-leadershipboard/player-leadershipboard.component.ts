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
  public events: Tournament[];
  public scores: Score[];
  public selectedModel: Tournament;
  constructor(
    private eventService: TournamentService,
    private  scoreService: ScoreService,
    private  activatedRoute: ActivatedRoute
  ) {
    this.selectedModel = Tournament.initialize();
    this.profileId = this.activatedRoute.snapshot.params.id;
  }

getEvents() {
    this.eventService.getTournaments().then(
      (result: Tournament[]) => {
        this.events = result;
        if (this.events.length > 0) {
          this.selectedModel =  this.events[0];
          this.getScores(this.selectedModel.pk_eventid);
        }
      },
      error => {}
    );
 }

 getScores(eventId) {
    this.scoreService.getScores(this.profileId, eventId).then(
      (result: Score[]) => this.scores = result,
      error => {}
    );
 }

  ngOnInit() {
    this.getEvents();

  }

  fetchScores(event) {
  }
}
