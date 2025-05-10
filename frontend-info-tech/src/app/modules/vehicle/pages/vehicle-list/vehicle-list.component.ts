import { Component, ViewChild, AfterViewInit } from '@angular/core';
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
  ],
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss'],
})
export class VehicleListPage implements AfterViewInit {
  displayedColumns = ['placa', 'modelo', 'acoes'];
  vehicles = [
    { id: '1', placa: 'ABC-1234', modelo: 'Corolla' },
    { id: '2', placa: 'XYZ-9876', modelo: 'Onix' },
    { id: '3', placa: 'DEF-4567', modelo: 'Civic' },
    { id: '4', placa: 'GHI-8901', modelo: 'HB20' },
    { id: '5', placa: 'JKL-2222', modelo: 'Polo' },
    { id: '6', placa: 'MNO-3333', modelo: 'Golf' },
    { id: '7', placa: 'PQR-4444', modelo: 'Argo' },
    { id: '8', placa: 'STU-5555', modelo: 'Compass' },
    { id: '9', placa: 'VWX-6666', modelo: 'Spin' },
    { id: '10', placa: 'YZA-7777', modelo: 'T-Cross' },
  ];

  dataSource = new MatTableDataSource(this.vehicles);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  excluir(id: string) {
    this.vehicles = this.vehicles.filter((v) => v.id !== id);
    this.dataSource.data = this.vehicles;
  }
}
