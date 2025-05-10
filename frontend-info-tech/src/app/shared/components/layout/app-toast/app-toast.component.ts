import { Component } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast-style',
  standalone: true,
  imports: [CommonModule, MatSnackBarModule],
  templateUrl: `app-toast.component.html`,
  styleUrls: ['./app-toast.component.scss'],
})
export class AppToastComponent {}
