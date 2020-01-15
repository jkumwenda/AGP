import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEventFormatComponent } from './edit-event-format.component';

describe('EditEventFormatComponent', () => {
  let component: EditEventFormatComponent;
  let fixture: ComponentFixture<EditEventFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEventFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEventFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
