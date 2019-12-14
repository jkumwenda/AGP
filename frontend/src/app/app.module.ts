import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { HttpClientModule } from '@angular/common/http';    // add this
import { FormsModule, ReactiveFormsModule } from '@angular/forms';    // add this
import { AuthService } from './shared/services/auth.service';    // add this
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { ManageModule } from './logged/manage/manage.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { LoggedComponent } from './logged/logged.component';
import { DashboardComponent } from './logged/dashboard/dashboard.component';
import { CustomersComponent } from './logged/customers/customers.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LoggedComponent,
    CustomersComponent,
    DashboardComponent,

  ],
  imports: [
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
