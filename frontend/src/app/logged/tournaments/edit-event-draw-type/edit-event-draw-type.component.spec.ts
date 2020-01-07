import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEventDrawTypeComponent } from './edit-event-draw-type.component';

describe('EditEventDrawTypeComponent', () => {
  let component: EditEventDrawTypeComponent;
  let fixture: ComponentFixture<EditEventDrawTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEventDrawTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEventDrawTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
