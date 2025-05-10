import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'vehicle',
    loadChildren: () =>
      import('./modules/vehicle/vehicle-routing.module').then(
        (m) => m.VehicleRoutes
      ),
  },
  {
    path: '',
    redirectTo: '/vehicle',
    pathMatch: 'full',
  },
];
