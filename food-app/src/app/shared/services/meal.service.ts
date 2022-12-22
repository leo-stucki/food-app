import { Injectable } from '@angular/core';
import {Meal} from "../model/meal";
import {Observable, of} from "rxjs";
import {MealPerPatient} from "../model/mealPerPatient";
import {PatientService} from "./patient.service";
import {DishService} from "./dish.service";
import {Dish} from "../model/dish";

@Injectable({
  providedIn: 'root'
})
export class MealService {

  //MOCK-DATA meals
  meals: Meal[] = [
    {
      id: 1,
      dishId: 1,
      time: new Date(2022,  12, 19, 0, 0, 0, 0),
    },
    {
      id: 2,
      dishId: 1,
      time: new Date(2022,  12, 19, 12, 0, 0, 0),
    },
    {
      id: 3,
      dishId: 2,
      time: new Date(2022,  12, 20, 0, 0, 0, 0),
    },
    {
      id: 4,
      dishId: 2,
      time: new Date(2022,  12, 20, 12, 0, 0, 0),
    },
  ];

  //MOCK-DATA mealPerPatients
  mealPerPatients: MealPerPatient[] = [
    {},{},{},{}
  ];


  constructor(private patientService: PatientService, private dishService: DishService) {
    //MOCK-DATA mealPerPatients.patient
    this.patientService.getPatientById(1).subscribe((res) => {
      this.mealPerPatients[0].patient = res;
      this.mealPerPatients[1].patient = res;
      this.mealPerPatients[2].patient = res;
      this.mealPerPatients[3].patient = res;
    });
    //MOCK-DATA mealPerPatients.meal
    this.mealPerPatients[0].meal = this.meals[0];
    this.mealPerPatients[1].meal = this.meals[1];
    this.mealPerPatients[2].meal = this.meals[2];
    this.mealPerPatients[3].meal = this.meals[3];
  }

  //MOCK-ENDPOINTS (deliver mock data)
  getMealsPerPatientId(patientId: number): Observable<Meal[]> {
    let meals: Meal[] = [];
    for (let mealsPerPatients of this.mealPerPatients) {
      if (mealsPerPatients.patient?.id == patientId){
        meals.push(mealsPerPatients.meal!);
      }
    } return of(meals);
  }
}
