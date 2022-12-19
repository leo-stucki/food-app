import {Component, OnInit} from '@angular/core';
import {Food} from "../../shared/model/food";
import {FoodService} from "../../shared/services/food.service";
import {AttributePerFoodService} from "../../shared/services/attribute-per-food.service";
import {AttributeService} from "../../shared/services/attribute.service";
import {AttributePerFood} from "../../shared/model/attributePerFood";

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit{

  foods: Food[] = [];

  filteredFoods: Food[] = [];

  dataSource: Food[] = [];

  constructor(private foodService: FoodService, private attributePerFoodService: AttributePerFoodService) {}

  ngOnInit() {
    this.foodService.getAllFoods().subscribe((res) => {
      this.foods = res;
      this.dataSource = this.foods;
    })
  };

  getAttributesByFoodId(foodId: number): AttributePerFood[] {
    let result: AttributePerFood[] = [];
    this.attributePerFoodService.getAttributesPerFoodByFoodId(foodId).subscribe((res) => {
      result = res;
      console.dir(result)
      for (let attributePerFood of result) {
        if (attributePerFood.foodAmount != 100) {
          attributePerFood.foodAmount = 100;
          attributePerFood.attributeAmount = this.calculatePerHundredGrams(attributePerFood.foodAmount!, attributePerFood.attributeAmount!);
        }
      }
    });
    return result;
  }

  calculatePerHundredGrams(foodAmount: number, attributeAmount: number): number{
    let factor = foodAmount / 100;
    return attributeAmount * factor;
  }

  filterResult(event: any) {
    let search: string = event.target.value;
    if (search) {
      this.filteredFoods = this.foods.filter(
        (food) => food.name?.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );
      this.dataSource = this.filteredFoods;
    } else {
      this.dataSource = this.foods;
    }
  };
}
