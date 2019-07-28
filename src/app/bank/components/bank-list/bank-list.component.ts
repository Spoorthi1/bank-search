import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Bank } from '../../models/bank';
import { element } from '@angular/core/src/render3/instructions';
import { Router, NavigationExtras } from '@angular/router';
import {SelectionModel} from '@angular/cdk/collections';
@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.css']
})
export class BankListComponent implements OnInit {

  constructor(private router: Router) { }
  fbanks: any;
  ELEMENT_DATA: any[] = [];
  displayedColumns: string[] = ['select', 'bankId', 'ifsc', 'branch', 'bankName', 'address'];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  banks: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // Get the list of banks and add it to ELEMENT_DATA to be displayed as table
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

  // Filter is applied based on what the user is searching
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // On click of any row the user is routed to /bank-details/:id page
  emitRow(row) {
    const index = this.banks.findIndex((bank) => row.ifsc === bank.ifsc);
    if (index >= 0) {
      const url = '/bank-details/' + this.banks[index].ifsc;
      this.router.navigate([url]);
    }
  }

  // saving bank as favorite
  // 1. checks if localStorage is empty, then adds the item
  // 2. if localStorage is not empty then checks if item already present, then deletes it assuming that user unchecked the checkbox
  // 3. if localStorage is not empty then checks if item not present, then adds the item in the array and updates the localStorage
  saveFavorite($event, row) {
    console.log(row);
    if (localStorage.getItem('favorite-banks')) {
      this.fbanks = JSON.parse(localStorage.getItem('favorite-banks'));
      const index = this.fbanks.findIndex((fb) => fb.ifsc === row.ifsc);
      if (index >= 0) {
        this.fbanks.splice(index, 1);
        localStorage.setItem('favorite-banks', JSON.stringify(this.fbanks));
      } else {
        this.fbanks.push(row);
        localStorage.setItem('favorite-banks', JSON.stringify(this.fbanks));
      }
    } else {
      this.fbanks = [];
      this.fbanks.push(row);
      localStorage.setItem('favorite-banks', JSON.stringify(this.fbanks));
    }
  }

  // Returns the status of checkbox. If the bank is added as favorite(thereby added in localstorage),
  // then returns true else returns false
  isSelected(row) {
    if (localStorage.getItem('favorite-banks')) {
      const fbanks = JSON.parse(localStorage.getItem('favorite-banks'));
      const index = fbanks.findIndex((fb) => fb.ifsc === row.ifsc);
      if (index >= 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

}
