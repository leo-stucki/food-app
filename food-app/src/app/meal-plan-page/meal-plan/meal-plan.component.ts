import {Component, OnInit} from '@angular/core';
import {Meal} from "../../shared/model/meal";
import {MealService} from "../../shared/services/meal.service";
import {Patient} from "../../shared/model/patient";
import {PatientService} from "../../shared/services/patient.service";
import {Dish} from "../../shared/model/dish";
import {DishService} from "../../shared/services/dish.service";
import {compileResults} from "@angular/compiler-cli/src/ngtsc/annotations/common";

@Component({
  selector: 'app-meal-plan',
  templateUrl: './meal-plan.component.html',
  styleUrls: ['./meal-plan.component.scss']
})
export class MealPlanComponent implements OnInit{

  currentPatient: Patient = new Patient();

  meals: Meal [] = [];

  constructor(private patientService: PatientService, private mealService: MealService, private dishService: DishService) {}

  ngOnInit() {
    this.patientService.getCurrentPatient().subscribe((res) => {
      this.currentPatient = res;
      this.mealService.getMealsPerPatientId(this.currentPatient.id!).subscribe((res) => {
        this.meals = res;
        console.log(this.meals)
        }
      );
    });
  }

  getDishById(dishId: number): Dish[]{
    let result: Dish[] = [];
    this.dishService.getDishById(dishId).subscribe((res) => {
      result = res;
    });
    return result;
  }
}
