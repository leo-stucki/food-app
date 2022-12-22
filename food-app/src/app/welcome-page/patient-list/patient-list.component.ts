import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Patient} from "../../shared/model/patient";
import {PatientService} from "../../shared/services/patient.service";

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit{

  @Output() newPatientEvent = new EventEmitter<Patient>();

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
    if(search) {
      this.filteredPatients = this.patients.filter(
        (patient) => patient.firstName?.toLowerCase().indexOf(search.toLowerCase()) !== -1 || patient.lastName?.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );
      this.dataSource = this.filteredPatients;
    } else {
      this.dataSource = this.patients;
    }
  }

  selectPatient(patient: Patient) {
    this.newPatientEvent.emit(patient);
  }
}
