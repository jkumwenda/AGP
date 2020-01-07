import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventFormatComponent } from './add-event-format.component';

describe('AddEventFormatComponent', () => {
  let component: AddEventFormatComponent;
  let fixture: ComponentFixture<AddEventFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEventFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEventFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
