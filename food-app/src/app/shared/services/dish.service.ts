import { Injectable } from '@angular/core';
import {Dish} from "../model/dish";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DishService {

  //MOCK-DATA  dishes
  dishes: Dish[] = [
    {
      id: 1,
      name: 'spagetti bolo',
      unit: 'mg'
    },
    {
      id: 2,
      name: 'thunfisch shake',
      unit: 'ml'
    },
    {
      id: 3,
      name: 'steak mit sosse',
      unit: 'mg'
    },
    {
      id: 4,
      name: 'schnipo',
      unit: 'mg'
    },
  ]

  //MOCK-ENDPOINTS (deliver mock data)
  getAllDishes(): Observable<Dish[]> {
    return of(this.dishes);
  }
}
