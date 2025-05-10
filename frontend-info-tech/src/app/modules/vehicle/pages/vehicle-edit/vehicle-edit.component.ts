import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { initVeiculoForm, IVeiculo } from '../../schema';
import { VehicleService } from '../../services';
import {
  SharedHeaderComponent,
  ValidateInputComponent,
} from '../../../../shared/components';
import { BaseResourceComponent } from '../../../../shared/components';
import { ApiResponse, AppRoutes } from '../../../../shared';

@Component({
  standalone: true,
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: ['./vehicle-edit.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    SharedHeaderComponent,
    ValidateInputComponent,
  ],
})
export class VehicleEditComponent
  extends BaseResourceComponent
  implements OnInit
{
  public form = initVeiculoForm();
  private readonly vehicleService = inject(VehicleService);

  ngOnInit(): void {
    const vehicle = this.getRouteData<ApiResponse<IVeiculo>>('vehicles');
    this.setBreadcrumb([
      { label: 'Veículos', url: `/${AppRoutes.VEHICLES}` },
      { label: 'Editar Veículo' },
    ]);
    const data = vehicle?.data;
    if (data && !Array.isArray(data)) {
      this.form.patchValue(data);
    }
  }

  public submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.startLoading();
    const raw = this.form.getRawValue();

    const payload: Partial<IVeiculo> = {
      placa: raw.placa ?? undefined,
      chassi: raw.chassi ?? undefined,
      renavam: raw.renavam ?? undefined,
      modelo: raw.modelo ?? undefined,
      ano: raw.ano ?? undefined,
    };

    this.vehicleService
      .update(id, payload)
      .then(() => {
        this.showSuccess('Veículo atualizado com sucesso');
        this.goTo([AppRoutes.VEHICLES]);
      })
      .catch((err) => {
        this.showError('Erro ao atualizar veículo', err?.message || '');
      })
      .finally(() => {
        this.stopLoading();
        this.goTo(`/${AppRoutes.VEHICLES}`);
      });
  }

  public back = () => {
    this.backViewlink(`/${AppRoutes.VEHICLES}/${AppRoutes.LIST}`);
  };
}
