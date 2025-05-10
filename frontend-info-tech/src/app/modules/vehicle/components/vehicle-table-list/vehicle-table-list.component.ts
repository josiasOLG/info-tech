import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { BaseResourceComponent } from '../../../../shared/components';
import { AppRoutes } from '../../../../shared';

@Component({
  imports: [CommonModule, MatTableModule, MatIconModule, MatPaginatorModule],
  standalone: true,
  selector: 'app-vehicle-table-list',
  templateUrl: './vehicle-table-list.component.html',
  styleUrls: ['./vehicle-table-list.component.scss'],
})
export class VehicleTableListComponent extends BaseResourceComponent {
  @Input() public dataSource!: MatTableDataSource<any>;
  @Input() public displayedColumns: string[] = [];

  public onEdit(id: string) {
    this.goTo([`/${AppRoutes.VEHICLES}/${AppRoutes.EDIT}/${id}`]);
  }

  public onDelete(id: string) {
    this.goTo([`/${AppRoutes.VEHICLES}/${AppRoutes.EDIT}/${id}`]);
  }
}
