import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { VehicleService } from '../services/vehicle.service';
import { of } from 'rxjs';

export const vehicleListResolver: ResolveFn<any> = () => {
  return inject(VehicleService).getAll();
};

export const vehicleDetailResolver: ResolveFn<any> = (route, _state) => {
  const id = route.paramMap.get('id');
  return id ? inject(VehicleService).getById(id) : of(null);
};

export const vehicleEditResolver: ResolveFn<any> = (route, _state) => {
  const id = route.paramMap.get('id');
  return id ? inject(VehicleService).getById(id) : of(null);
};
