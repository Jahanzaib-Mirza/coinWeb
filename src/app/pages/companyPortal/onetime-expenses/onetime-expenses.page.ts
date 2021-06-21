import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditExpenseComponent } from 'src/app/components/edit-expense/edit-expense.component';
import { AddExpensePage } from '../add-expense/add-expense.page';

@Component({
  selector: 'app-onetime-expenses',
  templateUrl: './onetime-expenses.page.html',
  styleUrls: ['./onetime-expenses.page.scss'],
})
export class OnetimeExpensesPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }
  async addExpense(){
    const repay = await this.modalCtrl.create({
      component: AddExpensePage,
    });
    await repay.present();
  }
  async editExpense(){
    const repay = await this.modalCtrl.create({
      component: EditExpenseComponent,
    });
    await repay.present();
  }

}
