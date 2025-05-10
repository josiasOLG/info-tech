import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  public breadcrumbs = computed(() => {
    const route = this.activatedRoute.root;
    const result: {
      label: string;
      icon?: string;
      url: string;
    }[] = [];

    let currentRoute = route;
    let url = '';

    while (currentRoute) {
      const children = currentRoute.children;
      if (children.length === 0) break;

      const child = children[0];
      const routeSnapshot = child.snapshot;
      const routeConfig = routeSnapshot.routeConfig;

      if (routeConfig && routeSnapshot.data?.['title']) {
        const path = routeConfig.path ?? '';
        url += '/' + path;

        result.push({
          label: routeSnapshot.data['title'],
          icon: routeSnapshot.data['icon'],
          url,
        });
      }

      currentRoute = child;
    }

    return result;
  });

  public goTo(url: string) {
    this.router.navigateByUrl(url);
  }
}
