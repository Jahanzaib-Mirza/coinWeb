import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalaryPortalPageRoutingModule } from './salary-portal-routing.module';

import { SalaryPortalPage } from './salary-portal.page';
import { AddSalaryComponent } from 'src/app/components/add-salary/add-salary.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SalaryPortalPageRoutingModule
  ],
  declarations: [SalaryPortalPage,AddSalaryComponent],
  entryComponents:[AddSalaryComponent]
})
export class SalaryPortalPageModule {}
