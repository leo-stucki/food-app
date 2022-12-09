import { Component } from '@angular/core';
import {FoodPerDish} from "../../../shared/model/foodPerDish";
import {Food} from "../../../shared/model/food";
import {Dish} from "../../../shared/model/dish";

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.scss']
})
export class DishListComponent {

  foods: Food[] = [
    {
      id: 1,
      name: 'fleisch',
      unit: 'g'
    },
    {
      id: 2,
      name: 'spagetti',
      unit: 'g'
    }
  ];

  dishes: Dish[] = [
    {
      id: 1,
      name: 'spagetti bolo',
      unit: 'g'
    },
    {
      id: 2,
      name: 'spagetti',
      unit: 'g'
    }
  ];

  foodPerDish: FoodPerDish[] = [
    {
      dishId: 1,
      foodId: 1,
      foodAmount: 100
    },
    {
      dishId: 1,
      foodId: 2,
      foodAmount: 150
    },
    {
      dishId: 2,
      foodId: 2,
      foodAmount: 100
    },
  ];
}
