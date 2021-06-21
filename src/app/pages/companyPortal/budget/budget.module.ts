import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BudgetPageRoutingModule } from './budget-routing.module';

import { BudgetPage } from './budget.page';
import { NewBudgetComponent } from 'src/app/components/new-budget/new-budget.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BudgetPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [BudgetPage,NewBudgetComponent],
  entryComponents:[NewBudgetComponent]
})
export class BudgetPageModule {}
