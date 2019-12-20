import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { HttpClientModule } from '@angular/common/http';    // add this
import { FormsModule, ReactiveFormsModule } from '@angular/forms';    // add this
import { AuthService } from './shared/services/auth.service';    // add this
import { AppRoutingModule } from './app-routing.module';
import { DataTablesModule } from 'angular-datatables';

import { SharedModule } from './shared/shared.module';
import { ManageModule } from './logged/manage/manage.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { LoggedComponent } from './logged/logged.component';
import { DashboardComponent } from './logged/dashboard/dashboard.component';
import { TournamentsComponent } from './logged/tournaments/tournaments.component';
import { AddTournamentComponent } from './logged/tournaments/add-tournament/add-tournament.component';
import { EditTournamentComponent } from './logged/tournaments/edit-tournament/edit-tournament.component';
import { TournamentComponent } from './logged/tournaments/tournament/tournament.component';
import { CourseComponent } from './logged/course/course.component';
import { AddRatingComponent } from './logged/course/add-rating/add-rating.component';
import { PlayersComponent } from './logged/players/players.component';
import { EditRatingComponent } from './logged/course/edit-rating/edit-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LoggedComponent,
    DashboardComponent,
    TournamentsComponent,
    AddTournamentComponent,
    EditTournamentComponent,
    TournamentComponent,
    CourseComponent,
    AddRatingComponent,
    PlayersComponent,
    EditRatingComponent

  ],
  imports: [
    DataTablesModule,
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ManageModule,
    SharedModule,
    NgxUiLoaderModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
