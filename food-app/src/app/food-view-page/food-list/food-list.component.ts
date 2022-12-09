import { Component } from '@angular/core';
import {Food} from "../../shared/model/food";
import {Attribute} from "../../shared/model/attribute";
import {AttributesPerFood} from "../../shared/model/attributesPerFood";

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent {
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

  attributes: Attribute[] =  [
    {
      id: 1,
      name: 'protein',
      unit: 'mg',
    },
    {
      id: 2,
      name: 'saltz',
      unit: 'mg',
    }
  ];

  attributePerFood: AttributesPerFood[] = [
    {
      foodId: 1,
      attributeId: 1,
      foodAmount: 100,
      attributeAmount: 5
    },
    {
      foodId: 1,
      attributeId: 2,
      foodAmount: 100,
      attributeAmount: 10,
    },
    {
      foodId: 2,
      attributeId: 1,
      foodAmount: 100,
      attributeAmount: 20
    },
  ]
}
