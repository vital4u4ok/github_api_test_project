import { Injectable } from '@angular/core';
import { RepositoryService } from '../services/repository.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RepositoryStore {

    protected _items: BehaviorSubject<any> = new BehaviorSubject(null);

    protected _selectedItem: BehaviorSubject<any> = new BehaviorSubject(null);

    get items(): any | Observable<any> {
        return this._items.asObservable();
    }

    get selectedItem(): any | Observable<any> {
        return this._selectedItem.asObservable();
    }

    constructor(private repositoryService: RepositoryService) {}

    getItems(): Observable<any> {
        const obs = this.repositoryService.getRepositories();
        obs.subscribe(res => this._items.next(res));

        return obs;
    }

    getItemById(id: number): Observable<any> {
        const obs = this.repositoryService.getRepositoryById(id);
        obs.subscribe(res => this._selectedItem.next(res));

        return obs;
    }

    getCommitsByRepositoryId(id: number): Observable<any> {
        const obs = this.repositoryService.getCommitsByRepositoryId(id);
        obs.subscribe(res => this._selectedItem.next({...this._selectedItem.getValue(), ...{commits: res}}));

        return obs;
    }
}
