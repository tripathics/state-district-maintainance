import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictAdderComponent } from './district-adder.component';

describe('DistrictAdderComponent', () => {
  let component: DistrictAdderComponent;
  let fixture: ComponentFixture<DistrictAdderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictAdderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
