import {
  Component,
  ViewChild,
  AfterViewInit,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { VehicleService } from '../../services';
import { IVeiculo } from '../../schema';
import {
  BaseResourceComponent,
  SharedHeaderComponent,
} from '../../../../shared/components';
import { extractData } from '../../../../core';
import { AppRoutes, BreadcrumbService } from '../../../../shared';
import { VehicleTableListComponent } from '../../components';

@Component({
  selector: 'app-vehicle-list-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    SharedHeaderComponent,
    VehicleTableListComponent,
  ],
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss'],
})
export class VehicleListPage
  extends BaseResourceComponent
  implements OnInit, AfterViewInit
{
  private vehicleService = inject(VehicleService);

  public displayedColumns = this.generateDisplayedColumns<IVeiculo>(
    {
      id: 0,
      placa: '',
      modelo: '',
      chassi: '',
      renavam: '',
      ano: '',
    },
    {
      exclude: ['id'],
      includeActions: true,
    }
  );
  public dataSource = new MatTableDataSource<IVeiculo>([]);

  @ViewChild(MatPaginator) public paginator!: MatPaginator;
  @ViewChild(MatSort) public sort!: MatSort;

  ngOnInit(): void {
    this.setBreadcrumb([{ label: 'Veículos' }, { label: 'Listar Veículo' }]);
    this.vehicleService.getAll().then((response) => {
      this.dataSource.data = extractData(response);
      console.log(response);
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public applyFilter(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public excluir(id: number): void {
    const updated = this.dataSource.data.filter((v) => v.id !== id);
    this.dataSource.data = updated;
  }

  public goToCreate(): void {
    this.goTo('/vehicle/create');
  }
}
