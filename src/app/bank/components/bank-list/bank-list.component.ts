import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Bank } from '../../models/bank';
import { element } from '@angular/core/src/render3/instructions';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.css']
})
export class BankListComponent implements OnInit {

  constructor(private router: Router) { }

  ELEMENT_DATA: any[] = [];
  displayedColumns: string[] = ['bankId', 'ifsc', 'branch', 'bankName', 'address'];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  banks: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() set bankList(list: Bank[]) {
    this.banks = list;
    list.forEach((el) => {
      this.ELEMENT_DATA.push({ bankId: el.bank_id, ifsc: el.ifsc, branch: el.branch, bankName: el.bank_name, address: el.address });
    });
  }
  @Output() bankEmitter: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  emitRow(row) {
    const index = this.banks.findIndex((bank) => row.ifsc === bank.ifsc);
    if (index >= 0) {
      const url = '/bank-details/' + this.banks[index].ifsc;
      // this.bankEmitter.emit(this.banks[index]);
      this.router.navigate([url]);
    }
  }

}