import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DebtsPageRoutingModule } from './debts-routing.module';

import { DebtsPage } from './debts.page';
import { RepayDebtComponent } from 'src/app/components/repay-debt/repay-debt.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DebtsPageRoutingModule
  ],
  declarations: [DebtsPage, RepayDebtComponent,],
  entryComponents: [RepayDebtComponent]
})
export class DebtsPageModule {}
