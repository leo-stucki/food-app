import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePatientComponentComponent } from './create-patient-component.component';

describe('CreatePatientComponentComponent', () => {
  let component: CreatePatientComponentComponent;
  let fixture: ComponentFixture<CreatePatientComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePatientComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePatientComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
