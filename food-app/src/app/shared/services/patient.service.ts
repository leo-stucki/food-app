import {Injectable} from "@angular/core";
import {Patient} from "../model/patient";
import {Observable, of} from "rxjs";


@Injectable({providedIn:'root'})
export class PatientService {

  patients: Patient[] = [
    {
      id: 1,
      firstName: 'Lian',
      lastName: 'Tschoggo',
      weight: 100,
      height: 1.80
    },
    {
      id: 2,
      firstName: 'livio',
      lastName: 'spa',
      weight: 100,
      height: 1.80
    },
    {
      id: 3,
      firstName: 'linus',
      lastName: 'Acker',
      weight: 100,
      height: 1.80
    }
  ];

  //constructor(private http: HttpClient) {
  //}

  getAllPatients(): Observable<Patient[]> {
    //return this.http.get<Patient[]>(URL);
    return of(this.patients);
  }
}
