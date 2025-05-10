import { Routes } from '@angular/router';
import { VehicleListPage } from './pages';

export const VehicleRoutes: Routes = [
  {
    path: '',
    component: VehicleListPage,
    title: 'Lista de Veículos',
  },
];
