import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankListComponent } from './bank-list.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatInputModule, MatCheckboxModule, MatTableModule, MatPaginatorModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';

describe('BankListComponent', () => {
  let component: BankListComponent;
  let fixture: ComponentFixture<BankListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        RouterModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        MatSelectModule
      ],
      declarations: [ BankListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
