import {Patient} from "../model/patient";
import {PatientService} from "./patient.service";
import {MessageService} from "./message.service";

class MockMessageService {
  createSuccessMessage(message: string): void {}

  createErrorMessage(message: string): void {}
}

describe(PatientService.name, () => {
  let service: PatientService

  beforeEach(() => {
    service = new PatientService(new MockMessageService() as MessageService);
  })

  it('should return patient by id', (done) => {
    service.getPatientById(1).subscribe((res) => {
      expect(res.firstName).toBe('Lian');
      expect(res.lastName).toBe('Tschoggo');
      expect(res.height).toBe(1.8);
      expect(res.weight).toBe(100);
      done();
    })
  })

  it('should return the patient that is currently being inspected', (done) => {
    service.getCurrentPatient().subscribe((res) => {
      expect(res.current).toBe(true);
      done();
    })
  });

  it('should create a new Patient and return a array of all Patients including the newly added', (done) => {
    const patient: Patient = {
      firstName: 'Max',
      lastName: 'Mustermann',
      weight: 100,
      height: 1.80,
      current: false
    }
    service.createPatient(patient).subscribe((res) => {
      expect(res[0].firstName).toBe('Lian');
      expect(res[0].lastName).toBe('Tschoggo');
      expect(res[0].height).toBe(1.8);
      expect(res[0].weight).toBe(100);
      expect(res[res.length-1].firstName).toBe('Max');
      expect(res[res.length-1].lastName).toBe('Mustermann');
      expect(res[res.length-1].height).toBe(1.8);
      expect(res[res.length-1].weight).toBe(100);
      done();
    })
  });
})
