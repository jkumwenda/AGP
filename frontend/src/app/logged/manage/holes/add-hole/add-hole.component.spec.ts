import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHoleComponent } from './add-hole.component';

describe('AddHoleComponent', () => {
  let component: AddHoleComponent;
  let fixture: ComponentFixture<AddHoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
