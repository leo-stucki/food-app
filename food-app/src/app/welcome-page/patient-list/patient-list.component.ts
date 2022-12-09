import { Component } from '@angular/core';
import {Patient} from "../../shared/model/patient";

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent {

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
    },
  ];
}
