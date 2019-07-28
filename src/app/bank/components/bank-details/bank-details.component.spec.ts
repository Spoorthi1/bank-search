import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankDetailsComponent } from './bank-details.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatInputModule, MatCheckboxModule, MatTableModule, MatPaginatorModule, MatSelectModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BankListComponent } from 'src/app/bank/components/bank-list/bank-list.component';
import { BankContainerComponent } from 'src/app/bank/bank-container/bank-container.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('BankDetailsComponent', () => {
  let component: BankDetailsComponent;
  let fixture: ComponentFixture<BankDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        HttpClientModule,
      HttpClientTestingModule,
      RouterModule,
      RouterTestingModule,
      MatSelectModule,
      BrowserAnimationsModule
      ],
      declarations: [BankListComponent, BankContainerComponent, BankDetailsComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
