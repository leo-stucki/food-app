import { Injectable } from '@angular/core';
import {Food} from "../model/food";
import {Observable, of} from "rxjs";
import {Patient} from "../model/patient";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  //MOCK-FOODS foods
  foods: Food[] = [
    {
      id: 1,
      name: 'steak',
      unit: 'mg'
    },
    {
      id: 2,
      name: 'wasser',
      unit: 'ml'
    },
    {
      id: 3,
      name: 'salat',
      unit: 'mg'
    },
    {
      id: 4,
      name: 'saltz',
      unit: 'µg'
    }
  ];

  //MOCK-ENDPOINTS (deliver mock data)
  getAllFoods(): Observable<Food[]> {
    return of(this.foods);
  }

  getFoodById(id: number): Observable<Patient> {
    for (let food of this.foods) {
      if (food.id == id) {
        return of(food);
      }
    } return of(new Food());
  }
}
