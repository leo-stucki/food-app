import { Injectable } from '@angular/core';
import {Attribute} from "../model/attribute";
import {Observable, of} from "rxjs";

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
}
