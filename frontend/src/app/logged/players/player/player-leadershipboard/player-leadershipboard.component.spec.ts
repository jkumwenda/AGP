import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerLeadershipboardComponent } from './player-leadershipboard.component';

describe('PlayerLeadershipboardComponent', () => {
  let component: PlayerLeadershipboardComponent;
  let fixture: ComponentFixture<PlayerLeadershipboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerLeadershipboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerLeadershipboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
