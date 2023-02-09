import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  data: Observable<string> = new Observable<string>();
  constructor() {}

  getData() {
    this.data = new Observable((observer) => {
      setTimeout(() => {
        observer.next('first');
      }, 1000);

      setTimeout(() => {
        observer.next('seconde');
      }, 2000);

      setTimeout(() => {
        observer.error('third');
      }, 3000);
      setTimeout(() => {
        observer.complete();
      }, 4000);
    });
    return this.data;
  }
}
