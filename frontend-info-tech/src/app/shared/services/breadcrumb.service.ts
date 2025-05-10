import { Injectable, signal } from '@angular/core';

export interface BreadcrumbItem {
  label: string;
  icon?: string;
  url?: string;
}

@Injectable({ providedIn: 'root' })
export class BreadcrumbService {
  private readonly _breadcrumbs = signal<BreadcrumbItem[]>([]);
  readonly breadcrumbs = this._breadcrumbs.asReadonly();

  set(items: BreadcrumbItem[]) {
    this._breadcrumbs.set(items);
  }

  clear() {
    this._breadcrumbs.set([]);
  }
}
