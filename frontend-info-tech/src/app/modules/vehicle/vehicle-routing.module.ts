import { Routes } from '@angular/router';
import { VehicleCreateComponent, VehicleListPage } from './pages';

export const VehicleRoutes: Routes = [
  {
    path: 'list',
    component: VehicleListPage,
    data: {
      title: 'Lista de Veículos',
      subtitle: 'Lorem ipsum dolor sit amet',
    },
  },
  {
    path: 'create',
    component: VehicleCreateComponent,
    data: {
      title: 'Criar Veículos',
      subtitle: 'Lorem ipsum dolor sit amet',
    },
  },
  {
    path: 'edit/:id',
    component: VehicleCreateComponent,
    data: {
      title: 'Editar Veículos',
      subtitle: 'Lorem ipsum dolor sit amet',
    },
  },
];
