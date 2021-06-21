import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeriodicBudgetsPageRoutingModule } from './periodic-budgets-routing.module';

import { PeriodicBudgetsPage } from './periodic-budgets.page';
import { NewBudgetComponent } from 'src/app/components/new-budget/new-budget.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeriodicBudgetsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PeriodicBudgetsPage]
})
export class PeriodicBudgetsPageModule {}
