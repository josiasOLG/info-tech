import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BreadcrumbComponent } from '../../breadcrumb';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, BreadcrumbComponent],
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {}
