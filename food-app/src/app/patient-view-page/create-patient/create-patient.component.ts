import {Component, Inject} from '@angular/core';
import {Patient} from "../../shared/model/patient";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-patient-component',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.scss']
})
export class CreatePatientComponent {
  newPatient = new Patient();

  constructor(public dialogRef: MatDialogRef<CreatePatientComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
