import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperadminPage } from './superadmin.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin-list',
    pathMatch: 'full'
  },
  {
    path: '',
    component: SuperadminPage,
    children:[
      {
        path: 'companies',
        loadChildren: () => import('../companies/companies.module').then( m => m.CompaniesPageModule)
      },
      {
        path: 'admin-list',
        loadChildren: () => import('../../pages/admin-list/admin-list.module').then( m => m.AdminListPageModule)
      },
      {
        path: 'admin-company/:id',
        loadChildren: () => import('../admin-company/admin-company.module').then( m => m.AdminCompanyPageModule)
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperadminPageRoutingModule {}
