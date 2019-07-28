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

  /**
  * @method
  * service to get the question list
  */
  getBankList = () => {
    return this.http.get<Bank[]>(helpers.getBankList)
      .pipe(
        catchError((error) => {
          console.log('Can\'t get Bank List');
          return observableThrowError(error);
        })
      );
  }

 /**
  * @method saveNewAnswer
  * Service to save the new answer
  */
 addFavorite = () => {
  // sends changes to be persisted
}

}
