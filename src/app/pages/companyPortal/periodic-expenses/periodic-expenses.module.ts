import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeriodicExpensesPageRoutingModule } from './periodic-expenses-routing.module';

import { PeriodicExpensesPage } from './periodic-expenses.page';
import { EditExpenseComponent } from 'src/app/components/edit-expense/edit-expense.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PeriodicExpensesPageRoutingModule,
    
  ],
  declarations: [PeriodicExpensesPage,EditExpenseComponent, ],
  entryComponents:[EditExpenseComponent,]
})
export class PeriodicExpensesPageModule {}
