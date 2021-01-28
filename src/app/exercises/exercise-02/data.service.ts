import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _count$ = new BehaviorSubject<number>(0);

  constructor() {}

  increaseCount() {
    const count = this._count$.value + 1;
    this._count$.next(count);
  }

  decreaseCount() {
    if (this._count$.value) {
      const count = this._count$.value - 1;
      this._count$.next(count);
    }
  }

  get count$() {
    return this._count$.asObservable();
  }
}
