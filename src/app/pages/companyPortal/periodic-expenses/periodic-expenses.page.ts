import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { EditExpenseComponent } from 'src/app/components/edit-expense/edit-expense.component';
import { ExpenseService } from 'src/app/services/expense.service';
import { AddExpensePage } from '../add-expense/add-expense.page';


@Component({
  selector: 'app-periodic-expenses',
  templateUrl: './periodic-expenses.page.html',
  styleUrls: ['./periodic-expenses.page.scss'],
})
export class PeriodicExpensesPage implements OnInit {
  expenses: any;
  constructor(public modalCtrl: ModalController,private expenseService: ExpenseService,
    private alertCtrl: AlertController) { 
    this.getExpenses();
  }

  ngOnInit() {
  }
  async addExpense(){
    const add = await this.modalCtrl.create({
      component: AddExpensePage,
    });
    add.onDidDismiss().then((data => {
      if(data.data != null){
        this.getExpenses();
      }
    }))
    await add.present();
  };
  async editExpense(){
    const repay = await this.modalCtrl.create({
      component: EditExpenseComponent,
    });
    await repay.present();
  };

  getExpenses(){
    this.expenseService.getExpenses().subscribe((res)=>{
      console.log(res);
      this.expenses = res;
    })
  };

  async confirmation(id) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Confirmation',
      message: 'Are you sure you want to delete',
      buttons: [{
        text: 'Cancel',
      }, {
        text: 'Delete',
        role: 'Delete',
        handler: () => {
          this.deleteExpense(id);
        },
      }]
    });

    await alert.present();

  };

  deleteExpense(id){
    this.expenseService.deleteExpenses(id).subscribe((res)=>{
      console.log(res);
      this.getExpenses();
    })
  }
}
