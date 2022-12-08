import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientViewListComponent } from './patient-view-list.component';

describe('PatientViewListComponent', () => {
  let component: PatientViewListComponent;
  let fixture: ComponentFixture<PatientViewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientViewListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientViewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
