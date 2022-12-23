import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {CreatePatientComponent} from "./create-patient/create-patient.component";
import {PatientService} from "../shared/services/patient.service";
import {Patient} from "../shared/model/patient";

@Component({
  selector: 'app-patient-view-page',
  templateUrl: './patient-view-page.component.html',
  styleUrls: ['./patient-view-page.component.scss']
})
export class PatientViewPageComponent implements OnInit{

  patients: Patient[] = [];

  constructor(public dialog: MatDialog, private patientService: PatientService) {
  }

  ngOnInit() {
    this.patientService.getAllPatients().subscribe((res) => {
      this.patients = res;
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreatePatientComponent, {
      height: '50%',
      width: '50%',
    });

    dialogRef.afterClosed().subscribe((res) => {
      const newPatient: Patient = {
          firstName: res.firstName,
          lastName: res.lastName,
          height: res.height,
          weight: res.weight
        };
      this.patientService.createPatient(newPatient).subscribe((res) => {
        this.patients = res;
      });
    })
  }
}
