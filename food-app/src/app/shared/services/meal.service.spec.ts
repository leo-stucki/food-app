import {MealService} from "./meal.service";
import {Observable, of} from "rxjs";
import {Patient} from "../model/patient";
import {PatientService} from "./patient.service";

class MockPatientService {
  getPatientById(id: number): Observable<Patient> {
    const patient: Patient = {
      id: 1,
      firstName: 'Lian',
      lastName: 'Tschoggo',
      weight: 100,
      height: 1.80,
      current: false
    }
    return of(patient);
  }
}

describe(MealService.name, () => {
  let service: MealService

  beforeEach(() => {
    service = new MealService(new MockPatientService() as PatientService);
  })

  it('should return patient by id', (done) => {
    service.getMealsPerPatientId(1).subscribe((res) => {
      expect(res[0].id).toBe(1);
      expect(res[0].dishId).toBe(1);
      expect(res[0].time?.getFullYear()).toBe(2023);
      expect(res[0].time?.getMonth()).toBe(0);
      expect(res[0].time?.getDate()).toBe(19);
      done();
    })
  })
})
