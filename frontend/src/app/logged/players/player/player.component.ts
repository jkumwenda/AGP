import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

//import * as Chartist from 'chartist';

//import { ChartEvent, ChartType } from 'ng-chartist';

declare var require: any;

const data: any = require('./data.json');

export interface Chart {
  //type: ChartType;
  //data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  //events?: ChartEvent;
}

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  private profileId: number;
  public charts: Chart[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.profileId = activatedRoute.snapshot.params['id'];
    this.charts = [
      {
        //data: data.Line,
        //type: 'Line'
      },
    ];
  }

  ngOnInit() {}
}
