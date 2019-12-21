import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawTypesComponent } from './draw-types.component';

describe('DrawTypesComponent', () => {
  let component: DrawTypesComponent;
  let fixture: ComponentFixture<DrawTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
