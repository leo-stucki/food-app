import {Injectable} from "@angular/core";
import {Patient} from "../model/patient";
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";

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

  constructor(private messageService: MessageService) {}

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

  createPatient(firstName: string, lastName: string, height: number, weight: number): Observable<Patient[]> {
    let check = this.patients.length;
    let newPatient = new Patient();

    newPatient.id = this.patients.length + 1;
    newPatient.firstName = firstName;
    newPatient.lastName = lastName;
    newPatient.height = height;
    newPatient.weight = weight;

    this.patients = [...this.patients, newPatient]

    console.dir(this.patients)

    if (check == this.patients.length - 1){
      this.messageService.createSuccessMessage('Patient wurde erstellt');
    } else {
      this.messageService.createErrorMessage('Beim erstellen des Patienten ist ein Fehler aufgetreten.')
    }

    return of(this.patients);
  }
}
