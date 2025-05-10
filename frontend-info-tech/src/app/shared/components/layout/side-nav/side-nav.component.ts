import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { IMenuItem, MENU_ITEMS } from './menu-itens';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule, RouterModule, MatListModule, MatIconModule],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  public menuItems: IMenuItem[] = MENU_ITEMS;
  public dropdownStates = new Map<string, boolean>();

  constructor(private router: Router) {}

  public handleClick(item: IMenuItem): void {
    if (item.action) {
      item.action();
    } else if (item.link) {
      this.router.navigateByUrl(item.link);
    }
  }

  toggleDropdown(item: IMenuItem) {
    const key = item.label!;
    const state = this.dropdownStates.get(key) ?? false;
    this.dropdownStates.set(key, !state);
  }

  isDropdownOpen(item: IMenuItem): boolean {
    const key = item.label!;
    return this.dropdownStates.get(key) ?? false;
  }
}
