import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentRegistrationDetailComponent } from './tournament-registration-detail.component';

describe('TournamentRegistrationDetailComponent', () => {
  let component: TournamentRegistrationDetailComponent;
  let fixture: ComponentFixture<TournamentRegistrationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentRegistrationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentRegistrationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
