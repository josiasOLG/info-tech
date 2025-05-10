import { Component, inject, signal, effect, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { BaseResourceComponent } from '../base-resource.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-shared-header',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './shared-header.component.html',
  styleUrls: ['./shared-header.component.scss'],
})
export class SharedHeaderComponent extends BaseResourceComponent {
  @Input() viewLink?: () => void;
}
