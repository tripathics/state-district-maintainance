import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateAdderComponent } from './state-adder.component';

describe('StateAdderComponent', () => {
  let component: StateAdderComponent;
  let fixture: ComponentFixture<StateAdderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateAdderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
