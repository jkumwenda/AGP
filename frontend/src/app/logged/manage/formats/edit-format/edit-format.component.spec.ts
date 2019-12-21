import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormatComponent } from './edit-format.component';

describe('EditFormatComponent', () => {
  let component: EditFormatComponent;
  let fixture: ComponentFixture<EditFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
