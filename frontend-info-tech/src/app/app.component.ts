import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavComponent } from './shared/components/layout/side-nav/side-nav.component';
import { TopBarComponent } from './shared/components/layout/top-bar/top-bar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { AppLoadingComponent } from './shared/components/layout/app-loading/app-loading.component';
import { AppToastComponent } from './shared/components/layout/app-toast/app-toast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SideNavComponent,
    TopBarComponent,
    MatSidenavModule,
    MatCardModule,
    AppLoadingComponent,
    AppToastComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
