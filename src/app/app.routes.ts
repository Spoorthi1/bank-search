import { Routes } from '@angular/router';
import { BankListComponent } from './bank/components/bank-list/bank-list.component';
import { BankDetailsComponent } from './bank/components/bank-details/bank-details.component';
import { BankContainerComponent } from './bank/bank-container/bank-container.component';

export const bankRoutes: Routes = [
    {
        path: 'bank-list',
        component: BankContainerComponent,
    },
    {
        path: 'bank-details/:city/:ifsc',
        component: BankDetailsComponent
    },
    { path: '', redirectTo: 'bank-list', pathMatch: 'full' },
];
