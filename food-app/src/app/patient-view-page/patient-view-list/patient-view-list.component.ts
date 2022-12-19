import {Component, OnInit} from '@angular/core';
import {Patient} from "../../shared/model/patient";
import {PatientService} from "../../shared/services/patient.service";

@Component({
  selector: 'app-patient-view-list',
  templateUrl: './patient-view-list.component.html',
  styleUrls: ['./patient-view-list.component.scss']
})
export class PatientViewListComponent implements OnInit {

  columnsToDisplay = ['number', 'name', 'height', 'weight'];

  patients: Patient[] = [];

  filteredPatients: Patient[] = [];

  dataSource: Patient[] = [];

  constructor(private patientService: PatientService) {
  }

  ngOnInit() {
    this.patientService.getAllPatients().subscribe((res) => {
      this.patients = res;
      this.dataSource = this.patients;
    })
  }

  filterResult(event: any) {
    let search: string = event.target.value;
    if (search) {
      this.filteredPatients = this.patients.filter(
        (patient) => patient.firstName?.toLowerCase().indexOf(search.toLowerCase()) !== -1 || patient.lastName?.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );
      this.dataSource = this.filteredPatients;
    } else {
      this.dataSource = this.patients;
    }
  }
}
