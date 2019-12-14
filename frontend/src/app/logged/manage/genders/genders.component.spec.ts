import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GendersComponent } from './genders.component';

describe('GendersComponent', () => {
  let component: GendersComponent;
  let fixture: ComponentFixture<GendersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GendersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
