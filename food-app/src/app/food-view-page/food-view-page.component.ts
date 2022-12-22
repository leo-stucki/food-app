import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FoodService} from "../shared/services/food.service";
import {Food} from "../shared/model/food";
import {CreateFoodComponent} from "./create-food/create-food.component";

@Component({
  selector: 'app-food-view-page',
  templateUrl: './food-view-page.component.html',
  styleUrls: ['./food-view-page.component.scss']
})
export class FoodViewPageComponent {

  foods: Food[] = [];

  constructor(public dialog: MatDialog, private foodService: FoodService) {
  }

  ngOnInit() {
    this.foodService.getAllFoods().subscribe((res) => {
      this.foods = res;
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateFoodComponent, {
      height: '50%',
      width: '50%',
    });

    dialogRef.afterClosed().subscribe((res) => {
      this.foodService.createAttributePerFood(res).subscribe((res) => {
        this.foods = res;
      })
    });
  }
}
