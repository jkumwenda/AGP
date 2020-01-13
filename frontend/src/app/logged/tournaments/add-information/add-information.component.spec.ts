import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInformationComponent } from './add-information.component';

describe('AddInformationComponent', () => {
  let component: AddInformationComponent;
  let fixture: ComponentFixture<AddInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
