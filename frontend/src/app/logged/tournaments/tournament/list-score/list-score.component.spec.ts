import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListScoreComponent } from './list-score.component';

describe('ListScoreComponent', () => {
  let component: ListScoreComponent;
  let fixture: ComponentFixture<ListScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
