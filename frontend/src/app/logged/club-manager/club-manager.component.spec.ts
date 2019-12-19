import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubManagerComponent } from './club-manager.component';

describe('ClubManagerComponent', () => {
  let component: ClubManagerComponent;
  let fixture: ComponentFixture<ClubManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
