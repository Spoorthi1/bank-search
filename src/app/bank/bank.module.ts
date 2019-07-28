import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankListComponent } from './components/bank-list/bank-list.component';
import { BankContainerComponent } from './bank-container/bank-container.component';
import { BankDetailsComponent } from './components/bank-details/bank-details.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [BankListComponent, BankContainerComponent, BankDetailsComponent]
})
export class BankModule { }
