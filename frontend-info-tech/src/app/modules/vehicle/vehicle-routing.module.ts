import { Routes } from '@angular/router';
import { VehicleCreateComponent, VehicleListPage } from './pages';
import { vehicleEditResolver } from './resolvers';
import { VehicleEditComponent } from './pages/vehicle-edit/vehicle-edit.component';

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
    component: VehicleEditComponent,
    data: {
      title: 'Editar Veículos',
      subtitle: 'Lorem ipsum dolor sit amet',
    },
    resolve: {
      vehicles: vehicleEditResolver,
    },
  },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
];
