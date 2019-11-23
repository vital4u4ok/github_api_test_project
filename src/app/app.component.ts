import { Component } from '@angular/core';
import { MENU_ITEM } from './constants/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tech-task';

  readonly navigationItems = Object.keys(MENU_ITEM).map(key => MENU_ITEM[key]);
}
