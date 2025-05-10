import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class ToastService {
  constructor(private snack: MatSnackBar) {}

  show(
    type: 'success' | 'error' | 'warn',
    title: string,
    description?: string
  ) {
    const message = description ? `${title}\n${description}` : title;

    this.snack.open(message, 'Fechar', {
      duration: 4000,
      panelClass: [`toast-${type}`],
      verticalPosition: 'top',
    });
  }

  success(title: string, description?: string) {
    this.show('success', title, description);
  }

  error(title: string, description?: string) {
    this.show('error', title, description);
  }

  warn(title: string, description?: string) {
    this.show('warn', title, description);
  }
}
