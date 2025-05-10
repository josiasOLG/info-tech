// breadcrumb.component.ts
import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { BreadcrumbService } from '../../services';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  private breadcrumbService = inject(BreadcrumbService);
  private router = inject(Router);

  readonly breadcrumbs = computed(() => this.breadcrumbService.breadcrumbs());

  goTo(url?: string) {
    if (url) this.router.navigateByUrl(url);
  }
}
