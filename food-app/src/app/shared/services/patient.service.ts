import {Injectable} from "@angular/core";
import {Patient} from "../model/patient";
import {Observable, of} from "rxjs";

@Injectable({providedIn:'root'})
export class PatientService {

  //MOCK-DATA patients
  patients: Patient[] = [
    {
      id: 1,
      firstName: 'Lian',
      lastName: 'Tschoggo',
      weight: 100,
      height: 1.80,
      current: false
    },
    {
      id: 2,
      firstName: 'livio',
      lastName: 'spa',
      weight: 100,
      height: 1.80,
      current: false
    },
    {
      id: 3,
      firstName: 'linus',
      lastName: 'Acker',
      weight: 100,
      height: 1.80,
      current: false
    },
    {
      id: 4,
      firstName: 'joel',
      lastName: 'blaser',
      weight: 100,
      height: 1.80,
      current: false
    }
  ];

  //MOCK-ENDPOINTS (deliver mock data)
  getAllPatients(): Observable<Patient[]> {
    return of(this.patients);
  }

  getPatientById(id: number): Observable<Patient> {
    for (let patient of this.patients) {
      if (patient.id == id) {
        return of(patient);
      }
    } return of(new Patient());
  }

  changeCurrentPatient(newCurrentPatient: Patient): void {
    for (let patient of this.patients) {
      if (patient.id == newCurrentPatient.id) {
        patient.current = true;
      } else {
        patient.current = false;
      }
    }
  }

  getCurrentPatient(): Observable<Patient> {
    for (let patient of this.patients) {
      if (patient.current == true){
        return of(patient);
      }
    } return of(new Patient());
  }
}
