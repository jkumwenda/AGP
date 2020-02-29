import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { Profile } from 'src/app/shared/interfaces/profile';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  private profile : Profile;
  constructor(
    private profileService:ProfileService,
  ) {

  }

  getUserProfile(usernname){
    this.profileService.getUserProfile(usernname).then(
      result => {
        this.profile = result[0] as Profile;
        var profileID = this.profile.pk_profileid;
        var name = this.profile.user.first_name +' '+this.profile.user.last_name;
        var email = this.profile.user.email;
        localStorage.setItem('profileID', String(profileID));
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
      },
      error => {
      }

    );    
  }

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

  ngOnInit() {
    this.getUserProfile(localStorage.getItem('username'));
  }
}
