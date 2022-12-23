import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private snackBar: MatSnackBar) { }

  createSuccessMessage(message: string): void {
    if (!message == null || undefined) {
      this.snackBar.open(message, '', {
        duration: 3000
      });
    }
  }

  createErrorMessage(message: string): void {
    if (!message == null || undefined) {
      this.snackBar.open(message, '', {
        duration: 3000
      });
    }
  }
}
