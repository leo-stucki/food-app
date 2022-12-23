import {FoodService} from "./dish.service";

describe(FoodService.name, () => {
  let service: FoodService

  beforeEach(() => {
    service = new FoodService();
  })

  it('should return dish by id', (done) => {
    service.getDishById(1).subscribe((res) => {
      expect(res.name).toBe('spagetti bolo');
      expect(res.unit).toBe('mg');
      done();
    })
  })
})
