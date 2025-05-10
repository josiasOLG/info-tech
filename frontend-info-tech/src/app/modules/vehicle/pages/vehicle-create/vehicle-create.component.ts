import { Component, inject } from '@angular/core';
import { initVeiculoForm } from '../../schema';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  BaseResourceComponent,
  SharedHeaderComponent,
  ValidateInputComponent,
} from '../../../../shared/components';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutes } from '../../../../shared';
import { VehicleService } from '../../services';

@Component({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ValidateInputComponent,
    SharedHeaderComponent,
    MatCardModule,
    MatIconModule,
  ],
  standalone: true,
  selector: 'app-vehicle-create',
  templateUrl: './vehicle-create.component.html',
  styleUrls: ['./vehicle-create.component.scss'],
})
export class VehicleCreateComponent extends BaseResourceComponent {
  public form = initVeiculoForm();
  private readonly vehicleService = inject(VehicleService);

  public submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.startLoading();
    const raw = this.form.getRawValue();
    const payload = {
      placa: raw.placa ?? '',
      chassi: raw.chassi ?? '',
      renavam: raw.renavam ?? '',
      modelo: raw.modelo ?? '',
      ano: raw.ano ?? '',
    };
    this.vehicleService
      .create(payload)
      .then((createdVehicle) => {
        this.showSuccess('Veículo criado com sucesso');
        this.goTo([AppRoutes.VEHICLES]);
      })
      .catch((err) => {
        this.showError('Erro ao criar veículo', err?.message || '');
      })
      .finally(() => {
        this.stopLoading();
      });
  }

  public back = () => {
    this.backViewlink(`/${AppRoutes.VEHICLES}/${AppRoutes.LIST}`);
  };
}
