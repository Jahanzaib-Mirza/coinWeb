import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'company-portal',
    pathMatch: 'full'
  },
  {
    path: 'superadmin',
    loadChildren: () => import('./pages/superadmin/superadmin.module').then( m => m.SuperadminPageModule)
  },
  {
    path: 'companies',
    loadChildren: () => import('./pages/companies/companies.module').then( m => m.CompaniesPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'company-portal',
    loadChildren: () => import('./pages/companyPortal/company-portal/company-portal.module').then( m => m.CompanyPortalPageModule)
  },
  {
    path: 'customers',
    loadChildren: () => import('./pages/companyPortal/customers/customers.module').then( m => m.CustomersPageModule)
  },
  {
    path: 'invoices',
    loadChildren: () => import('./pages/companyPortal/invoices/invoices.module').then( m => m.InvoicesPageModule)
  },
  {
    path: 'earnings',
    loadChildren: () => import('./pages/companyPortal/earnings/earnings.module').then( m => m.EarningsPageModule)
  },
  {
    path: 'salary',
    loadChildren: () => import('./pages/companyPortal/salary/salary.module').then( m => m.SalaryPageModule)
  },
  {
    path: 'tax',
    loadChildren: () => import('./pages/companyPortal/tax/tax.module').then( m => m.TaxPageModule)
  },
  {
    path: 'expenses',
    loadChildren: () => import('./pages/companyPortal/expenses/expenses.module').then( m => m.ExpensesPageModule)
  },
  {
    path: 'budget',
    loadChildren: () => import('./pages/companyPortal/budget/budget.module').then( m => m.BudgetPageModule)
  },
  {
    path: 'ledger',
    loadChildren: () => import('./pages/companyPortal/ledger/ledger.module').then( m => m.LedgerPageModule)
  },
  {
    path: 'assets',
    loadChildren: () => import('./pages/companyPortal/assets/assets.module').then( m => m.AssetsPageModule)
  },
  {
    path: 'audit-logs',
    loadChildren: () => import('./pages/companyPortal/audit-logs/audit-logs.module').then( m => m.AuditLogsPageModule)
  },
  {
    path: 'debts',
    loadChildren: () => import('./pages/companyPortal/debts/debts.module').then( m => m.DebtsPageModule)
  },
  {
    path: 'active-debts',
    loadChildren: () => import('./pages/companyPortal/active-debts/active-debts.module').then( m => m.ActiveDebtsPageModule)
  },
  {
    path: 'closed-debts',
    loadChildren: () => import('./pages/companyPortal/closed-debts/closed-debts.module').then( m => m.ClosedDebtsPageModule)
  },
  {
    path: 'onetime-budgets',
    loadChildren: () => import('./pages/companyPortal/onetime-budgets/onetime-budgets.module').then( m => m.OnetimeBudgetsPageModule)
  },
  {
    path: 'periodic-budgets',
    loadChildren: () => import('./pages/companyPortal/periodic-budgets/periodic-budgets.module').then( m => m.PeriodicBudgetsPageModule)
  },
  {
    path: 'periodic-expenses',
    loadChildren: () => import('./pages/companyPortal/periodic-expenses/periodic-expenses.module').then( m => m.PeriodicExpensesPageModule)
  },
  {
    path: 'onetime-expenses',
    loadChildren: () => import('./pages/companyPortal/onetime-expenses/onetime-expenses.module').then( m => m.OnetimeExpensesPageModule)
  },
  {
    path: 'salary-portal',
    loadChildren: () => import('./pages/companyPortal/salary-portal/salary-portal.module').then( m => m.SalaryPortalPageModule)
  },
  {
    path: 'salary-record',
    loadChildren: () => import('./pages/companyPortal/salary-record/salary-record.module').then( m => m.SalaryRecordPageModule)
  },
  {
    path: 'salary-portal',
    loadChildren: () => import('./pages/companyPortal/salary-portal/salary-portal.module').then( m => m.SalaryPortalPageModule)
  },
  {
    path: 'salary-record',
    loadChildren: () => import('./pages/companyPortal/salary-record/salary-record.module').then( m => m.SalaryRecordPageModule)
  },
  {
    path: 'admin-list',
    loadChildren: () => import('./pages/admin-list/admin-list.module').then( m => m.AdminListPageModule)
  },
  {
    path: 'add-admin',
    loadChildren: () => import('./pages/add-admin/add-admin.module').then( m => m.AddAdminPageModule)
  },
  {
    path: 'admin-company/:id',
    loadChildren: () => import('./pages/admin-company/admin-company.module').then( m => m.AdminCompanyPageModule)
  },
  {
    path: 'add-company',
    loadChildren: () => import('./pages/add-company/add-company.module').then( m => m.AddCompanyPageModule)
  },
  {
    path: 'update-company',
    loadChildren: () => import('./pages/update-company/update-company.module').then( m => m.UpdateCompanyPageModule)
  },
  {
    path: 'edit-salary',
    loadChildren: () => import('./pages/companyPortal/edit-salary/edit-salary.module').then( m => m.EditSalaryPageModule)
  },
  {
    path: 'deduct-salary',
    loadChildren: () => import('./pages/companyPortal/deduct-salary/deduct-salary.module').then( m => m.DeductSalaryPageModule)
  },
  
  {
    path: 'add-user',
    loadChildren: () => import('./pages/companyPortal/add-user/add-user.module').then( m => m.AddUserPageModule)
  },
  {
    path: 'add-expense',
    loadChildren: () => import('./pages/companyPortal/add-expense/add-expense.module').then( m => m.AddExpensePageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
