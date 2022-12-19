import { Component } from '@angular/core';
import {Patient} from "../shared/model/patient";
import {PatientService} from "../shared/services/patient.service";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent {

  SelectedPatient: Patient = new Patient();

  constructor(private patientService: PatientService) {
  }

  selectPatient(selectedPatient: Patient) {
    this.SelectedPatient = selectedPatient;
  }

  submitSelectedPatient() {
    this.patientService.changeCurrentPatient(this.SelectedPatient);
  }
}
