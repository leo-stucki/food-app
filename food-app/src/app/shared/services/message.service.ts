import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private snackBar: MatSnackBar) { }

  createSuccessMessage(message: string): void {
    this.snackBar.open(message, 'none', {
      duration: 3000
    });
  }

  createErrorMessage(message: string): void {
    this.snackBar.open(message, 'none', {
      duration: 3000
    });
  }
}
