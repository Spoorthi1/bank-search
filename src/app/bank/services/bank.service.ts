import { Injectable } from '@angular/core';
import { Observable, of, throwError as observableThrowError } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as helpers from '../../helpers';
import { Bank } from '../models/bank';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http: HttpClient) { }
  public responseCache = new Map();

  /**
  * @method
  * service to get the question list
  */
  getBankList = () => {
    const banksFromCache = this.responseCache.get(helpers.getBankList);
    if (banksFromCache) {
      return of(banksFromCache);
    }
    // const response = this.http.get<Bank[]>(helpers.getBankList);
    // response.subscribe(banks => this.responseCache.set(helpers.getBankList, banks));
    // return response;
    return this.http.get<Bank[]>(helpers.getBankList)
      .pipe(
        map(banks => {
          this.responseCache.set(helpers.getBankList, banks);
          return banks;
        }),
        catchError((error) => {
          console.log('Can\'t get Bank List');
          return observableThrowError(error);
        })
      );
  }

}
