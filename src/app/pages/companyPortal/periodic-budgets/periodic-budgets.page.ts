import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewBudgetComponent } from 'src/app/components/new-budget/new-budget.component';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-periodic-budgets',
  templateUrl: './periodic-budgets.page.html',
  styleUrls: ['./periodic-budgets.page.scss'],
})
export class PeriodicBudgetsPage implements OnInit {

  constructor(private budgetService: BudgetService, private modalCtrl: ModalController) { 
    this.getBudgets();
  }
  ngOnInit() {
  }
  async addBudget(){
    const repay = await this.modalCtrl.create({
      component: NewBudgetComponent,
    });
    await repay.present();
  };

  getBudgets(){
    this.budgetService.getbudgets().subscribe((res)=>{
      console.log(res);
    })
  };

}
