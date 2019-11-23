import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Repository } from '../../models/repository';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { RepositoryStore } from 'src/app/stores/repository.store';

@Component({
  selector: 'app-repositories-view',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit, OnDestroy {

  unsubscribeAll: Subject<any>;

  private selectedId: number;

  repositories: Repository[] = [];
  selectedItem: Repository;

  readonly TAB = {
    INFO: {
      name: 'info'
    },
    COMMITS: {
      name: 'commits'
    }
  };

  tabs = Object.keys(this.TAB).map(k => this.TAB[k]);
  selectedTab = this.tabs[0];

  constructor(
    protected repositoryStore: RepositoryStore,
    protected route: ActivatedRoute,
    protected router: Router
    ) {
      this.unsubscribeAll = new Subject();
    }

  ngOnInit(): void {
    this.subscribeData();
    this.setupView();
  }

  setupView(): void {
    if (!this.selectedId) {
      this.repositoryStore.getItems();
    }
  }

  subscribeData(): void {
    this.route.paramMap
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe(paramMap => {
        const id = +paramMap.get('id');
        this.selectedId = id;

        if (id) {
          this.repositoryStore.getItemById(id);
        } else {
          this.selectedItem = null;
        }
      });

    this.repositoryStore.items
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((resp: Repository[]) => {
        if (resp) {
          this.repositories = resp;
        }
      });

    this.repositoryStore.selectedItem
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((resp: Repository) => {
        if (resp && this.selectedId) {
          this.selectedItem = resp;
        }
      });
  }

  onGetCommits(): void {
    this.repositoryStore.getCommitsByRepositoryId(this.selectedItem.id);
  }

  onSelect(repository: Repository): void {
    this.router.navigate(['/repository', repository.id]);
  }

  onTabSelect(tab): void {
    if (tab === this.TAB.COMMITS && !this.selectedItem.commits) {
      this.repositoryStore.getCommitsByRepositoryId(this.selectedItem.id);
    }

    this.selectedTab = tab;
  }

  unsubscribeData(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  ngOnDestroy(): void {
    this.unsubscribeData();
  }
}
