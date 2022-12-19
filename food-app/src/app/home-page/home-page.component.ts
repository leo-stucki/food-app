import {Component, OnInit} from '@angular/core';
import {Patient} from "../shared/model/patient";
import {PatientService} from "../shared/services/patient.service";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{

  currentPatient: Patient = new Patient();

  constructor(private patientService: PatientService) {
  }

  ngOnInit() {
    this.patientService.getCurrentPatient().subscribe((res) => {
      this.currentPatient = res;
    })
  }
}
