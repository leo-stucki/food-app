import {FoodService} from "./dish.service";
import {StatisticService} from "./statistic.service";
import {Observable, of} from "rxjs";
import {Attribute} from "../model/attribute";
import {Patient} from "../model/patient";
import {PatientService} from "./patient.service";
import {AttributeService} from "./attribute.service";

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

describe(StatisticService.name, () => {
  let service: StatisticService

  beforeEach(() => {
    service = new StatisticService(new MockPatientService() as PatientService, new MockAttributeService() as AttributeService);
  })

  it('should return a patients statistics by his/her id', (done) => {
    service.getStatisticsByPatient(1).subscribe((res) => {
      expect(res[0].patient?.firstName).toBe('Lian');
      expect(res[0].attribute?.name).toBe('zucker');
      done();
    })
  });
})
