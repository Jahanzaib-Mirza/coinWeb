import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActiveDebtsPageRoutingModule } from './active-debts-routing.module';

import { ActiveDebtsPage } from './active-debts.page';
import { AddDebtComponent } from 'src/app/components/add-debt/add-debt.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActiveDebtsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ActiveDebtsPage,AddDebtComponent]
})
export class ActiveDebtsPageModule {}
