import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {AttributeService} from "../../../shared/services/attribute.service";
import {Attribute} from "../../../shared/model/attribute";
import {AttributePerFood} from "../../../shared/model/attributePerFood";

@Component({
  selector: 'app-create-attribute',
  templateUrl: './create-attribute.component.html',
  styleUrls: ['./create-attribute.component.scss']
})
export class CreateAttributeComponent implements OnInit{

  newAttribute = new Attribute();

  newAttributePerFood = new AttributePerFood();

  attributes: Attribute[] = [];

  constructor(public dialogRef: MatDialogRef<CreateAttributeComponent>, private attributeService: AttributeService) {}

  ngOnInit() {
    this.attributeService.getAllAttributes().subscribe((res) => {
      this.attributes = res;
    });
  }

  chooseAttribute(attribute: Attribute) {
    this.newAttributePerFood.attribute = attribute;
    console.dir(this.newAttributePerFood)
  }

  createNewAttribute() {
    this.attributeService.createAttribute(this.newAttribute.name!, this.newAttribute.unit!).subscribe((res) => {
      this.attributes = res;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
