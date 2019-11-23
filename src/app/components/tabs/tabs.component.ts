import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() tabs;
  @Output() selectTab = new EventEmitter();

  selectedTab;

  constructor() { }

  ngOnInit() {
    this.selectedTab = this.tabs[0];
  }

  onSelectTab(tab) {
    this.selectedTab = tab;
    this.selectTab.emit(tab);
  }

}
