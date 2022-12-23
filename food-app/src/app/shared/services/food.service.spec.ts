import {AttributeService} from "./attribute.service";
import {FoodService} from "./food.service";
import {Observable, of} from "rxjs";
import {Attribute} from "../model/attribute";
import {AttributePerFood} from "../model/attributePerFood";

class MockAttributeService {
  getAttributeById(id: number): Observable<Attribute> {
    const response: Attribute = {
        id: 1,
        name: 'zucker',
        unit: 'mg'
    }
    return of(response);
  }
}

describe(FoodService.name, () => {
  let service: FoodService

  beforeEach(() => {
    service = new FoodService(new MockAttributeService() as AttributeService);
  })

  it('should return food by id', (done) => {
    service.getFoodById(1).subscribe((res) => {
      expect(res.name).toBe('steak');
      expect(res.unit).toBe('mg');
      done();
    })
  })

  it('should return all of the attributes of food by id', (done) => {
    service.getAttributesPerFoodByFoodId(1).subscribe((res) => {
      expect(res[0].attributeAmount).toBe(100);
      expect(res[0].foodAmount).toBe(200);
      expect(res[res.length-1].attributeAmount).toBe(1300);
      expect(res[res.length-1].foodAmount).toBe(2200);
      done();
    })
  })

  it('should create a new food and return a array of all foods including the newly added', (done) => {
    service.createFood('pizza', 'mg').subscribe((res) => {
      expect(res[0].name).toBe('steak');
      expect(res[0].unit).toBe('mg');
      expect(res[res.length-1].name).toBe('pizza');
      expect(res[res.length-1].unit).toBe('mg');
      done();
    })
  });

  it('should create a new attribute per food relationship and return a array of all attribute per food relationships including the newly added', (done) => {
    const attributePerFood: AttributePerFood = {
      food: {
        id: 100,
        name: 'donut',
        unit: 'mg'
      },
      attribute: {
        id: 200,
        name: 'flour',
        unit: 'mg'
      },
      foodAmount: 100,
      attributeAmount: 300
    }

    service.createAttributePerFood(attributePerFood).subscribe((res) => {
      expect(res[0].food?.name).toBe('steak');
      expect(res[0].foodAmount).toBe(200);
      expect(res[0].attribute?.name).toBe('zucker');
      expect(res[0].attributeAmount).toBe(100);
      expect(res[res.length-1].food?.name).toBe('donut');
      expect(res[res.length-1].foodAmount).toBe(100);
      expect(res[res.length-1].attribute?.name).toBe('flour');
      expect(res[res.length-1].attributeAmount).toBe(300);
      done();
    })
  });
})
