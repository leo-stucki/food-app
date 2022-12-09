import { Component } from '@angular/core';
import {Patient} from "../../shared/model/patient";

@Component({
  selector: 'app-patient-view-list',
  templateUrl: './patient-view-list.component.html',
  styleUrls: ['./patient-view-list.component.scss']
})
export class PatientViewListComponent {

  columnsToDisplay = ['number', 'name', 'height', 'weight'];

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
