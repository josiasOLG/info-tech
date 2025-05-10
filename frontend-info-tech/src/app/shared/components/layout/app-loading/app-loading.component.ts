import { Component, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingService } from '../../../services';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './app-loading.component.html',
})
export class AppLoadingComponent {
  private loadingService = inject(LoadingService);
  visible = signal(false);

  constructor() {
    effect(() => {
      this.visible.set(this.loadingService.loading());
    });
  }
}
