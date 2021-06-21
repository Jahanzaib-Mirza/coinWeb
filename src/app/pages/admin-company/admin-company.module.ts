import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminCompanyPageRoutingModule } from './admin-company-routing.module';

import { AdminCompanyPage } from './admin-company.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminCompanyPageRoutingModule
  ],
  declarations: [AdminCompanyPage]
})
export class AdminCompanyPageModule {}
