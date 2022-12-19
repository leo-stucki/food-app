import { Component } from '@angular/core';
import {Patient} from "../shared/model/patient";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent {

  SelectedPatient: Patient = new Patient();

  selectPatient(selectedPatient: Patient) {
    this.SelectedPatient = selectedPatient;
  }
}
