import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFormatComponent } from './event-format.component';

describe('EventFormatComponent', () => {
  let component: EventFormatComponent;
  let fixture: ComponentFixture<EventFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
