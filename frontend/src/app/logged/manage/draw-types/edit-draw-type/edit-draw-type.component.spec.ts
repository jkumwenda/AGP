import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDrawTypeComponent } from './edit-draw-type.component';

describe('EditDrawTypeComponent', () => {
  let component: EditDrawTypeComponent;
  let fixture: ComponentFixture<EditDrawTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDrawTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDrawTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
