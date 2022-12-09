import {Component, OnInit} from '@angular/core';
import {Patient} from "../../shared/model/patient";
import {PatientService} from "../../shared/services/patient.service";

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit{

  patients: Patient[] = [];

  constructor(private patientService: PatientService) {
  }

  ngOnInit() {
    this.patientService.getAllPatients().subscribe((res) => {
      this.patients = res;
    })
  }
}
