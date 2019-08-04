import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {
  data: any;

  constructor() {
    this.data = [{
      id: 1,
      name: 'feature1',
      details: 'details1'
    }, {
      id: 2,
      name: 'feature2',
      details: 'details2'
    }, {
      id: 3,
      name: 'feature3',
      details: 'details3'
    }];
  }

  getData() {
    return of(this.data).pipe(delay(1000));
  }

  getDataById(id: number) : Observable<any> {
    for(let i = 0; i < this.data.length; i++){
      if (this.data[i].id == id){
        return of(this.data[i]);
      }
    }
  }
}
