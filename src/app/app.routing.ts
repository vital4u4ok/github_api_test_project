import { MENU_ITEM } from './constants/menu';
import { Routes } from '@angular/router';
import { RepositoriesComponent } from './views/repositories/repositories.component';

export const routes: Routes = [
  {
    path: MENU_ITEM.REPOSITORIES.route,
    component: RepositoriesComponent
  },
  {
    path: 'repository/:id',
    component: RepositoriesComponent
  },
  {
    path: '**',
    redirectTo: MENU_ITEM.REPOSITORIES.route
  }
];
