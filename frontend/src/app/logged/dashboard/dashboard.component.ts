import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor() {}

  doughnutChartLabels: Label[] = ['P 1', 'P 2', 'P 3'];
  doughnutChartData: MultiDataSet = [[55, 25, 20]];
  doughnutChartType: ChartType = 'doughnut';

  barChartOptions: ChartOptions = {
    responsive: true
  };
  barChartLabels: Label[] = [
    'NB',
    'Sparc',
    'HCL',
    'NBS',
    'RBM',
    'NICO'
  ];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33], label: 'Tournament Participation' }
  ];

  ngOnInit() {}
}
