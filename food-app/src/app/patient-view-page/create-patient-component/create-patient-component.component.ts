import {Component, Inject} from '@angular/core';
import {Patient} from "../../shared/model/patient";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-patient-component',
  templateUrl: './create-patient-component.component.html',
  styleUrls: ['./create-patient-component.component.scss']
})
export class CreatePatientComponentComponent {
  newPatient = new Patient();

  constructor(public dialogRef: MatDialogRef<CreatePatientComponentComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
