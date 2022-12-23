import {Component, Input} from '@angular/core';
import {Attribute} from "../../shared/model/attribute";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Food} from "../../shared/model/food";
import {AttributePerFood} from "../../shared/model/attributePerFood";
import {FoodService} from "../../shared/services/food.service";
import {CreateAttributeComponent} from "./create-attribute/create-attribute.component";

@Component({
  selector: 'app-create-food',
  templateUrl: './create-food.component.html',
  styleUrls: ['./create-food.component.scss']
})
export class CreateFoodComponent {

  foodFinished: boolean = false;

  newAttributePerFood = new AttributePerFood();

  newFood = new Food();

  attributes: Attribute[] = [];

  constructor(private foodService: FoodService, public dialogRef: MatDialogRef<CreateFoodComponent>, public dialog: MatDialog) {}

  openDialog(): void {
    this.createFood();
    const dialogRef = this.dialog.open(CreateAttributeComponent, {
      height: '50%',
      width: '50%',
    });

    dialogRef.afterClosed().subscribe((res) => {
      this.newAttributePerFood.attribute = res.attribute;
      this.newAttributePerFood.attributeAmount = res.attributeAmount;
      this.attributes.push(this.newAttributePerFood.attribute!);
    });
  }

  createFood() {
    if (!this.foodFinished) {
      this.foodService.createFood(this.newFood.name!, this.newFood.unit!).subscribe((res) => {
        this.newAttributePerFood.food = res;
      })
      this.foodFinished = true;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
