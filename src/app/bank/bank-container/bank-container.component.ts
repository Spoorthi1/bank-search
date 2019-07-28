import { Component, OnInit } from '@angular/core';
import { BankService } from '../services/bank.service';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Bank } from '../models/bank';
@Component({
  selector: 'app-bank-container',
  templateUrl: './bank-container.component.html',
  styleUrls: ['./bank-container.component.css']
})
export class BankContainerComponent implements OnInit {
  bankList$: Observable<Bank[]>;
  constructor(private bankService: BankService) { }

  ngOnInit() {
    this.bankList$ = this.bankService.getBankList()
    .pipe(
      map((res: Bank[]) => {
        return res;
      }),
      catchError((error) => {
        console.log('Can\'t get Bank List');
        return observableThrowError(error);
      })
    );
  }

}
