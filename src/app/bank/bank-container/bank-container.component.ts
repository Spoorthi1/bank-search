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
  dropDownOption: string[] = ['MUMBAI', 'BANGALORE'];
  city: string;
  constructor(private bankService: BankService) { }

  // get all the banks on ngOnInit by making a service call
  ngOnInit() {
  }

  sendCity($event) {
    this.city = $event.value;
    this.bankList$ = this.bankService.getBankList(this.city)
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
