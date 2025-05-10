import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {
  BaseResourceComponent,
  SharedSkeletonComponent,
} from '../../../../shared/components';
import { AppRoutes } from '../../../../shared';
import { VehicleService } from '../../services';

@Component({
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    SharedSkeletonComponent,
  ],
  standalone: true,
  selector: 'app-vehicle-table-list',
  templateUrl: './vehicle-table-list.component.html',
  styleUrls: ['./vehicle-table-list.component.scss'],
})
export class VehicleTableListComponent extends BaseResourceComponent {
  @Input() public dataSource: MatTableDataSource<any> =
    new MatTableDataSource();
  @Input() public displayedColumns: string[] = [];
  private vehicleService = inject(VehicleService);
  public isLoadingDelete = false;

  public onEdit(id: string) {
    this.goTo([`/${AppRoutes.VEHICLES}/${AppRoutes.EDIT}/${id}`]);
  }

  public onDelete(id: string) {
    this.isLoadingDelete = true;
    this.startLoading();

    this.vehicleService
      .delete(id)
      .then(() => {
        this.showSuccess('Veículo removido com sucesso');
        this.dataSource.data = this.dataSource.data.filter((v) => v._id !== id);
      })
      .catch((err) => {
        this.showError('Erro ao excluir veículo', err?.message || '');
      })
      .finally(() => {
        this.isLoadingDelete = false;
        this.stopLoading();
      });
  }
}
