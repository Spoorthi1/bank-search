import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankContainerComponent } from './bank-container.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatInputModule, MatCheckboxModule, MatTableModule, MatPaginatorModule, MatSelectModule
} from '@angular/material';
import { BankListComponent } from 'src/app/bank/components/bank-list/bank-list.component';
import { BankDetailsComponent } from 'src/app/bank/components/bank-details/bank-details.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('BankContainerComponent', () => {
  let component: BankContainerComponent;
  let fixture: ComponentFixture<BankContainerComponent>;

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
      RouterTestingModule,
      MatSelectModule,
      BrowserAnimationsModule
      ],
      declarations: [BankListComponent, BankContainerComponent, BankDetailsComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
