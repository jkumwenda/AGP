import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDrawTypeComponent } from './add-draw-type.component';

describe('AddDrawTypeComponent', () => {
  let component: AddDrawTypeComponent;
  let fixture: ComponentFixture<AddDrawTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDrawTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDrawTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
