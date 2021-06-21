import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyPortalPage } from './company-portal.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'customers',
    pathMatch: 'full'
  },
  {
    path: '',
    component: CompanyPortalPage,
    children: [
      {
        path: 'customers',
        loadChildren: () => import('../customers/customers.module').then(m => m.CustomersPageModule)
      },
      {
        path: 'invoices',
        loadChildren: () => import('../invoices/invoices.module').then(m => m.InvoicesPageModule)
      },
      {
        path: 'earnings',
        loadChildren: () => import('../earnings/earnings.module').then(m => m.EarningsPageModule)
      },
      {
        path: 'salary',
        loadChildren: () => import('../salary/salary.module').then(m => m.SalaryPageModule)
      },
      {
        path: 'tax',
        loadChildren: () => import('../tax/tax.module').then(m => m.TaxPageModule)
      },
      {
        path: 'expenses',
        loadChildren: () => import('../expenses/expenses.module').then(m => m.ExpensesPageModule)
      },
      {
        path: 'budget',
        loadChildren: () => import('../budget/budget.module').then(m => m.BudgetPageModule)
      },
      {
        path: 'ledger',
        loadChildren: () => import('../ledger/ledger.module').then(m => m.LedgerPageModule)
      },
      {
        path: 'assets',
        loadChildren: () => import('../assets/assets.module').then(m => m.AssetsPageModule)
      },
      {
        path: 'audit-logs',
        loadChildren: () => import('../audit-logs/audit-logs.module').then(m => m.AuditLogsPageModule)
      },
      {
        path: 'debts',
        loadChildren: () => import('../debts/debts.module').then( m => m.DebtsPageModule)
      },
      {
        path: 'users',
        loadChildren: () => import('../../users/users.module').then( m => m.UsersPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyPortalPageRoutingModule { }
