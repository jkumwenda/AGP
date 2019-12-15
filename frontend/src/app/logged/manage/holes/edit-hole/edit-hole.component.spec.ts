import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHoleComponent } from './edit-hole.component';

describe('EditHoleComponent', () => {
  let component: EditHoleComponent;
  let fixture: ComponentFixture<EditHoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
