import {Component, OnInit} from '@angular/core';
import {Patient} from "../../shared/model/patient";
import {PatientService} from "../../shared/services/patient.service";

@Component({
  selector: 'app-patient-view-list',
  templateUrl: './patient-view-list.component.html',
  styleUrls: ['./patient-view-list.component.scss']
})
export class PatientViewListComponent implements OnInit{

  columnsToDisplay = ['number', 'name', 'height', 'weight'];

  patients: Patient[] = [];

  constructor(private patientService: PatientService) {}

  ngOnInit() {
    this.patientService.getAllPatients().subscribe((res) => {
      this.patients = res;
    })
  }
}
