import { Component, OnInit } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Bank } from '../../models/bank';
import { Router, ActivatedRoute } from '@angular/router';
import { BankService } from '../../services/bank.service';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {
  ifsc: string;
  bankList$: Observable<Bank>;
  noData = false;
  constructor(private bankService: BankService,
    private router: ActivatedRoute) { }

  // Get the list of banks and get the ifsc code from the route and filter the bank list based on ifsc
  ngOnInit() {
    this.router.params.subscribe(params => {
      this.ifsc = params['ifsc'];
      console.log(this.ifsc);
    });

    if (this.ifsc) {
    this.bankList$ = this.bankService.getBankList()
    .pipe(
      map((res: Bank[]) => {
        const bankDetails = res.find((bank) => bank.ifsc === this.ifsc);
        if (!bankDetails) {
          this.noData = true;
        }
        return bankDetails;
      }),
      catchError((error) => {
        console.log('Can\'t get Bank List');
        return observableThrowError(error);
      })
    );
    }
  }

}
