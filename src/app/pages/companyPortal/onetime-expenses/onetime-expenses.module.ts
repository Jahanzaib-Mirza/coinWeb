import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnetimeExpensesPageRoutingModule } from './onetime-expenses-routing.module';

import { OnetimeExpensesPage } from './onetime-expenses.page';
import { EditExpenseComponent } from 'src/app/components/edit-expense/edit-expense.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnetimeExpensesPageRoutingModule
  ],
  declarations: [OnetimeExpensesPage,,EditExpenseComponent],
  entryComponents:[,EditExpenseComponent]

})
export class OnetimeExpensesPageModule {}
