import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageNavComponent } from './manage-nav.component';

describe('ManageNavComponent', () => {
  let component: ManageNavComponent;
  let fixture: ComponentFixture<ManageNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
