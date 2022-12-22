import { Injectable } from '@angular/core';
import {Attribute} from "../model/attribute";
import {Observable, of} from "rxjs";
import {Food} from "../model/food";
import {AttributePerFood} from "../model/attributePerFood";
import {MessageService} from "./message.service";
import {FoodService} from "./food.service";

@Injectable({
  providedIn: 'root'
})
export class AttributeService {

  //MOCK-DATA attributes
  attributes: Attribute[] = [
    {
      id: 1,
      name: 'zucker',
      unit: 'mg'
    },
    {
      id: 2,
      name: 'kcal',
      unit: 'mg'
    },
    {
      id: 3,
      name: 'vitamin b',
      unit: 'µg'
    },
    {
      id: 4,
      name: 'vitamin c',
      unit: 'µg'
    }
  ]

  constructor(private messageService: MessageService) {}

  //MOCK-ENDPOINTS (deliver mock data)
  getAllAttributes(): Observable<Attribute[]> {
    return of(this.attributes);
  }

  getAttributeById(id: number): Observable<Attribute> {
    for (let attribute of this.attributes) {
      if (attribute.id == id) {
        return of(attribute);
      }
    } return of(new Attribute);
  }

  createAttribute(name: string, unit: string): Observable<Attribute[]> {
    let check = this.attributes.length;
    let newAttribute = new Attribute();

    newAttribute.id = this.attributes.length + 1;
    newAttribute.name = name;
    newAttribute.unit = unit;

    this.attributes = [...this.attributes, newAttribute]

    console.dir(this.attributes)

    if (check == this.attributes.length - 1){
      this.messageService.createSuccessMessage('Attribut wurde erstellt');
    } else {
      this.messageService.createErrorMessage('Beim erstellen des Attributes ist ein Fehler aufgetreten.')
    }

    return of(this.attributes);
  }
}
