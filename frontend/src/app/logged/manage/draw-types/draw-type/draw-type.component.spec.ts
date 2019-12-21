import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawTypeComponent } from './draw-type.component';

describe('DrawTypeComponent', () => {
  let component: DrawTypeComponent;
  let fixture: ComponentFixture<DrawTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
