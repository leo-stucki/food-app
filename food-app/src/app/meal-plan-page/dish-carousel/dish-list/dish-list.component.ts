import {Component, OnInit} from '@angular/core';
import {Dish} from "../../../shared/model/dish";
import {DishService} from "../../../shared/services/dish.service";

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.scss']
})
export class DishListComponent implements OnInit{

  dishes: Dish[] = [];

  constructor(private dishService: DishService ) {}

  ngOnInit() {
    this.dishService.getAllDishes().subscribe((res) => {
      this.dishes = res;
    })
  }
}
