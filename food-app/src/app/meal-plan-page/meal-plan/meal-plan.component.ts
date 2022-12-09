import { Component } from '@angular/core';
import {Meal} from "../../shared/model/meal";

@Component({
  selector: 'app-meal-plan',
  templateUrl: './meal-plan.component.html',
  styleUrls: ['./meal-plan.component.scss']
})
export class MealPlanComponent {

  meals: Meal[] = [
    {
      id: 1,
      dishId: 1,
      time: new Date()
    },
    {
      id: 2,
      dishId: 2,
      time: new Date()
    },
    {
      id: 3,
      dishId: 1,
      time: new Date()
    }
  ]
}
