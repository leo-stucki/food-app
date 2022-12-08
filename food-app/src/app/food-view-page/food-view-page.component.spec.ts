import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodViewPageComponent } from './food-view-page.component';

describe('FoodViewPageComponent', () => {
  let component: FoodViewPageComponent;
  let fixture: ComponentFixture<FoodViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodViewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
