import { Injectable } from '@angular/core';
import {Food} from "../model/food";
import {Observable, of} from "rxjs";
import {Patient} from "../model/patient";
import {AttributePerFood} from "../model/attributePerFood";
import {AttributeService} from "./attribute.service";
import {Attribute} from "../model/attribute";
import {MessageService} from "./message.service";

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

  constructor(private attributeService: AttributeService, private messageService: MessageService) {
    //MOCK-DATA atteibutes.food
    this.attributePerFoods[0].food = this.foods[0];
    this.attributePerFoods[1].food = this.foods[0];
    this.attributePerFoods[2].food = this.foods[1];
    this.attributePerFoods[3].food = this.foods[2];
    this.attributePerFoods[4].food = this.foods[3];
    this.attributePerFoods[5].food = this.foods[3];
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

  getAttributesPerFoodByFoodId(foodId: number): Observable<AttributePerFood[]> {
    let result: AttributePerFood[] = [];
    for (let attributePerFood of this.attributePerFoods) {
      if (attributePerFood.food?.id == foodId) {
        result.push(attributePerFood);
      }
    } return of(result);
  }

  createFood(name: string, unit: string): Observable<Food> {
    let check = this.foods.length;
    let newFood = new Food();

    newFood.id = this.foods.length + 1;
    newFood.name = name;
    newFood.unit = unit;

    this.foods = [...this.foods, newFood]

    console.dir(this.foods)

    if (check == this.foods.length - 1){
      this.messageService.createSuccessMessage('Lebensmittel wurde erstellt');
    } else {
      this.messageService.createErrorMessage('Beim erstellen des Lebensmittels ist ein Fehler aufgetreten.')
    }

    return of(this.foods[check]);
  }

  createAttributePerFood(newAttributePerFood: AttributePerFood): Observable<Food[]> {
    let check = this.attributePerFoods.length;

    this.attributePerFoods = [...this.attributePerFoods, newAttributePerFood]

    console.dir(this.attributePerFoods)

    return of(this.foods);
  }
}
