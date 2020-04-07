import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedComponentComponent } from './added-component.component';

describe('AddedComponentComponent', () => {
  let component: AddedComponentComponent;
  let fixture: ComponentFixture<AddedComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
