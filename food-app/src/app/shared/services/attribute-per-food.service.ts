import { Injectable } from '@angular/core';

import {AttributePerFood} from "../model/attributePerFood";
import {AttributeService} from "./attribute.service";
import {FoodService} from "./food.service";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AttributePerFoodService {

  //MOCK-DATA attributes.attributeAmount || attributes.foodAmount
  attributePerFoods: AttributePerFood[] = [
    {
      attributeAmount: 100,
      foodAmount: 200,
    },
    {
      attributeAmount: 1300,
      foodAmount: 2200,
    },
    {
      attributeAmount: 200,
      foodAmount: 100,
    },
    {
      attributeAmount: 500,
      foodAmount: 300,
    },
    {
      attributeAmount: 200,
      foodAmount: 100,
    },
    {
      attributeAmount: 200,
      foodAmount: 200,
    },
  ];

  constructor(private foodService: FoodService, private attributeService: AttributeService) {
    //MOCK-DATA attributes.food
    this.foodService.getFoodById(1).subscribe((res) => {
      this.attributePerFoods[0].food = res;
      this.attributePerFoods[1].food = res;
    });
    this.foodService.getFoodById(2).subscribe((res) => {
      this.attributePerFoods[2].food = res;
    });
    this.foodService.getFoodById(3).subscribe((res) => {
      this.attributePerFoods[3].food = res;
    });
    this.foodService.getFoodById(4).subscribe((res) => {
      this.attributePerFoods[4].food = res;
      this.attributePerFoods[5].food = res;
    });
    //MOCK-DATA attributes.attribute
    this.attributeService.getAttributeById(1).subscribe((res) => {
      this.attributePerFoods[0].attribute = res;
    });
    this.attributeService.getAttributeById(2).subscribe((res) => {
      this.attributePerFoods[1].attribute = res;
      this.attributePerFoods[2].attribute = res;
    });
    this.attributeService.getAttributeById(3).subscribe((res) => {
      this.attributePerFoods[3].attribute = res;
      this.attributePerFoods[4].attribute = res;
    });
    this.attributeService.getAttributeById(4).subscribe((res) => {
      this.attributePerFoods[5].attribute = res;
    });
  }

  //MOCK-ENDPOINTS (deliver mock data)
  getAttributesPerFoodByFoodId(foodId: number): Observable<AttributePerFood[]> {
    let result: AttributePerFood[] = [];
    for (let attributePerFood of this.attributePerFoods) {
      if (attributePerFood.food?.id == foodId) {
        result.push(attributePerFood);
      }
    } return of(result);
  }
}
