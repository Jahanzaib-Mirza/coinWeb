import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminCompanyPage } from './admin-company.page';

const routes: Routes = [
  {
    path: '',
    component: AdminCompanyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminCompanyPageRoutingModule {}
