import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealPlanPageComponent } from './meal-plan-page.component';

describe('MealPlanPageComponent', () => {
  let component: MealPlanPageComponent;
  let fixture: ComponentFixture<MealPlanPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealPlanPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealPlanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
